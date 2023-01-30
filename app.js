const AdminJS = require('adminjs')
const AdminJSExpress = require('@adminjs/express')
const express = require('express')
// const Connect = require('connect-pg-simple')
const session = require('express-session')
const mongoose = require('mongoose');
const AdminJSMongoose = require('@adminjs/mongoose')
// const orm =  require('@admin-bro/typeorm');
// const Database = orm.Database;
// const Resource = orm.Resource
AdminJS.registerAdapter({
  Resource: AdminJSMongoose.Resource,
  Database: AdminJSMongoose.Database,
})


const User = require("./models/User")
const newsEvent = require("./models/newsevent");
const newsSchema = require('./models/newsevent');

const PORT = 3000



const DEFAULT_ADMIN = {
    email: 'admin@example.com',
    password: 'password',
}

const authenticate = async (email, password) => {
    if (email === DEFAULT_ADMIN.email && password === DEFAULT_ADMIN.password) {
        return Promise.resolve(DEFAULT_ADMIN)
    }
    return null
}

const start = async () => {
    const app = express();
    await mongoose.connect('mongodb://0.0.0.0:27017/adminjs');
   
    const adminOptions = {
      // We pass Category to `resources`
      resources: [User,newsSchema],
    }
    // Please note that some plugins don't need you to create AdminJS instance manually,
    // instead you would just pass `adminOptions` into the plugin directly,
    // an example would be "@adminjs/hapi"
  
    const admin = new AdminJS(adminOptions)
    const adminRouter = AdminJSExpress.buildAuthenticatedRouter(
        admin,
        {
          authenticate,
          cookieName: 'adminjs',
          cookiePassword: 'sessionsecret',
        },
        null,
        {
        //   store: sessionStore,
          resave: true,
          saveUninitialized: true,
          secret: 'sessionsecret',
          cookie: {
            httpOnly: process.env.NODE_ENV === 'production',
            secure: process.env.NODE_ENV === 'production',
          },
          name: 'adminjs',
        }
      )

    app.use(admin.options.rootPath, adminRouter)

    app.listen(PORT, () => {
        console.log(`AdminJS started on http://localhost:${PORT}${admin.options.rootPath}`)

    })
}

start()