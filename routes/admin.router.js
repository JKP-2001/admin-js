
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
const { adminOptions, hmcOptions, clubAccess, clubOptions, campusTravel, normalUserOptions, travelReply } = require('../config/adminjs/resourceOptions');
const { newsFileUpload } = require("../config/features/newsFileUpload");
const { messFileUpload } = require("../config/features/messMenuUpload");

const {
  User,
  spardhaEventModel,
  gcCompetitionsStoreModel,
  spardhaOverallStandingsModel,
  spardhaResultModel,
  busTiming,
  buyDetails,
  TravelPostModel,
  TravelChatModel,
  ReplyPostModel,
  contactParent,
  contactsSubsection,
  ferryTiming,
  foodItems,
  foodOutlets,
  foundItem,
  lastUpdate,
  LostAndFoundDetails,
  // messMenuItemModelDetails,
  // newsModel,
  role,
  BuyAndSellDetails,
  Time,
} = require("../models/index")
const { gcNavigation, timingNavigation, cabSharingNavigation, foodNavigation, lostAndFoundNavigaion, buyAndSellNavigation } = require("../navigations");




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
      resource: User,
      options: normalUserOptions
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
    },

    {
      resource: TravelPostModel,
      options:campusTravel
      // options: clubOptions,
      // features: [c],
    },

    {
      resource: ReplyPostModel,
      options: travelReply
    },

    {
      resource: spardhaEventModel,
      options: {
        navigation: gcNavigation,
      },
    },
    {
      resource: gcCompetitionsStoreModel,
      options: {
        navigation: gcNavigation,
      },
    },
    {
      resource: spardhaOverallStandingsModel,
      options: {
        navigation: gcNavigation,
      },
    },
    {
      resource: spardhaResultModel,
      options: {
        navigation: gcNavigation,
      },
    },
    {
      resource: busTiming,
      options: {
        navigation: timingNavigation,
      },
    },
    {
      resource: ferryTiming,
      options: {
        navigation: timingNavigation,
      },
    },
    {
      resource: Time,
      options: {
        navigation: timingNavigation,
      },
    },
    {
      resource: TravelChatModel,
      options: {
        navigation: cabSharingNavigation,
      },
    },
    {
      resource: foodItems,
      options: {
        navigation: foodNavigation,
      },
    },
    {
      resource: foodOutlets,
      options: {
        navigation: foodNavigation,
      },
    },
    {
      resource: lastUpdate,
      options: {
        navigation: foodNavigation,
      },
    },
    {
      resource: LostAndFoundDetails,
      options: {
        navigation: lostAndFoundNavigaion,
      },
    },
    {
      resource: foundItem,
      options: {
        navigation: lostAndFoundNavigaion,
      },
    },
    {
      resource: buyDetails,
      options: {
        navigation: buyAndSellNavigation,
      },
    },
    {
      resource: BuyAndSellDetails,
      options: {
        navigation: buyAndSellNavigation,
      },
    },
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
