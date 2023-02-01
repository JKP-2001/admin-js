const AdminJS = require('adminjs')
const AdminJSExpress = require('@adminjs/express')
const argon2 = require('argon2');
const passwordsFeature = require('@adminjs/passwords');
const uploadFeature = require("@adminjs/upload")
const express = require('express')
const session = require('express-session')
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')
const AdminJSMongoose = require('@adminjs/mongoose')
AdminJS.registerAdapter({
  Resource: AdminJSMongoose.Resource,
  Database: AdminJSMongoose.Database,
})

const Admin = require("../models/Admin")
const newsEvent = require("../models/newsevent");
const messMenu = require('../models/messMenu');
const { globalAccess, hmcAccess } = require('../config/adminjs/roleBasedAccess');
const { adminOptions, hmcOptions, clubAccess, clubOptions } = require('../config/adminjs/resourceOptions');

const usersNavigation = {
  name: 'Users',
  icon: 'User',
}

const localProvider = {
  bucket: 'public/newsfiles',
  opts: {
    baseUrl: '/files',
  },
};

const adminRouter = new AdminJS({
  resources: [
    {
      resource: Admin,
      options: adminOptions,
    },
    {
      resource: messMenu,
      options:hmcOptions
    },
    {
      resource: newsEvent,
      options: clubOptions,
      features: [
        uploadFeature({
          provider: { local: localProvider },
          validation: { mimeTypes: ['image/png', 'application/pdf', 'audio/mpeg'] },
          properties:{
            key: `avatarKey`,
          }
        }),
      ],
      uploadPath: (record, filename) => (
        `${record.id()}/family-photos/${filename}`
      ),
    }
  ],
  rootPath: "/admin",
});


let router;

if (process.env.AUTHENTICATION === "true") {
  router = AdminJSExpress.buildAuthenticatedRouter(adminRouter, {
    authenticate: async (email, password) => {
      const admin = await Admin.findOne({ email });
      if (admin) {
        const matched = await argon2.verify(admin.encryptedPassword, password);
        if (matched) {
          return admin;
        }
      }
      return false;
    },
    cookiePassword: "some-secret-password-used-to-secure-cookie",
  });
} else {
  router = AdminJSExpress.buildRouter(adminRouter);
}

module.exports = router;
