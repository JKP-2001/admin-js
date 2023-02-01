
const {componentLoader, Components} = require("../components")
const AdminJS = require('adminjs')
const AdminJSExpress = require('@adminjs/express')
const argon2 = require('argon2');
const passwordsFeature = require('@adminjs/passwords');
const express = require('express')
const session = require('express-session')
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')
const AdminJSMongoose = require('@adminjs/mongoose')
const MongoStore = require("connect-mongo")


AdminJS.registerAdapter({
  Resource: AdminJSMongoose.Resource,
  Database: AdminJSMongoose.Database,
})

const Admin = require("../models/Admin")
const newsEvent = require("../models/newsevent");
const messMenu = require('../models/messMenu');
const { globalAccess, hmcAccess } = require('../config/adminjs/roleBasedAccess');
const { adminOptions, hmcOptions, clubAccess, clubOptions } = require('../config/adminjs/resourceOptions');
const { newsFileUpload } = require("../config/features/newsFileUpload");
const { messFileUpload } = require("../config/features/messMenuUpload");
// const { default: Login } = require("../Components/login.jsx");

const usersNavigation = {
  name: 'Users',
  icon: 'User',
}



const adminRouter = new AdminJS({
  resources: [
    {
      resource: Admin,
      options: adminOptions,
    },
    {
      resource: messMenu,
      options:hmcOptions,
      features:[messFileUpload]
    },
    {
      resource: newsEvent,
      options: clubOptions,
      features: [newsFileUpload],
    }
  ],
  rootPath: "/admin",
  componentLoader,
  dashboard: {
    component: Components.Dashboard,
  },
  branding: {
    companyName: "OneStop : Students' Web Committee",
    logo: "/public/assets/one_stop.png",
    favicon: "/public/assets/one_stop.png",
    adminJs: false,
  },
});

adminRouter.watch();

// adminRouter.overrideLogin({ component: Login });

let router;

if (process.env.AUTHENTICATION === "true") {
  router = AdminJSExpress.buildAuthenticatedRouter(adminRouter, {
    cookieName: 'adminJS',
    cookiePassword: 'superlongandcomplicatedname',
    authenticate: async (email, password) => {
      const company = await Admin.findOne({ email });

      if (company && await argon2.verify(company.encryptedPassword, password)) {
        return company.toJSON();
      }
      return false;
    },
  }, null, {
    resave: false,
    saveUninitialized: true,
    store: new MongoStore({ mongoUrl: process.env.DEV_MONGO_URI }),
  });

} else {
  router = AdminJSExpress.buildRouter(adminRouter);
}

module.exports = router;
