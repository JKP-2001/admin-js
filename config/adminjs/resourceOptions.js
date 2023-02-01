const { beforeNewUser } = require("../../controllers/adminContoller");
const { beforeNewMenu, afterNewMenu } = require("../../controllers/messMenuController");
const { afterNewEvent, beforeNewEvent } = require("../../controllers/newsEventController");
const { globalAccess, adminAccess, clubAccess, hmcAccess } = require("./roleBasedAccess");

const AdminJS = require('adminjs');
const { usersNavigation, foodNavigation, clubNavigation } = require("../../navigations");

module.exports.adminOptions = {
    id: "Users",
    sort: {
        sortBy: 'name',
        direction: 'asc',
    },
    properties: {
        encryptedPassword: {
            isVisible: false
        },
        password:{
            type:'password'
        },
        _id: {
            isVisible: {
                list: false,
                filter: false,
                show: false,
                edit: false,
            },
        },
    },
    actions: {
        list: { isAccessible: globalAccess },
        edit: { isAccessible: globalAccess, before:beforeNewUser },
        delete: { isAccessible: globalAccess },
        new: { isAccessible: globalAccess, before:beforeNewUser},
        bulkDelete:{ isAccessible: globalAccess},
    },
    navigation:usersNavigation
}


module.exports.hmcOptions = {
    id: "HMC",
    sort: {
        sortBy: 'hostel',
        direction: 'asc',
    },
    properties: {
        _id: {
            isVisible: {
                list: false,
                filter: false,
                show: false,
                edit: false,
            },
        },
        dateCreated:{
            isVisible: {
                list:true,
                filter:true,
                show: true,
                edit: false,
            },
        },
        uploadedFile: { isVisible: {
            list:false,
            filter:false,
            show:true,
            edit:false
        } },
    },
    actions: {
        list: { isAccessible: hmcAccess},
        edit: { isAccessible: hmcAccess, before:beforeNewMenu},
        delete: { isAccessible: globalAccess },
        new: { isAccessible: globalAccess, before:beforeNewMenu },
        bulkDelete:{ isAccessible: globalAccess},
    },
    navigation:foodNavigation
}

module.exports.clubOptions = {
    id:"CLUBS",
    sort:{
        sortBy:"creationDate",
        direction:"desc",
    },
    properties: {
        _id: {
            isVisible: {
                list: false,
                filter: false,
                show: false,
                edit: false,
            },
        },
        uploadedFile: { isVisible: {
            list:false,
            filter:false,
            show:true,
            edit:false
        } },
        author:{
            isVisible:{
                list: false,
                filter: false,
                show: true,
                edit: false,
            }
        },
        creationDate:{
            isVisible:{
                list: false,
                filter: true,
                show: true,
                edit: false,
            }
        },
        updationDate:{
            isVisible:{
                list: false,
                filter: true,
                show: true,
                edit: false,
            }
        },
        clubName:{
            isVisible:{
                list: true,
                filter: true,
                show: true,
                edit: false,
            }
        },
        clubType:{
            isVisible:{
                list: false,
                filter: true,
                show: true,
                edit: false,
            }
        },
        content:{
            type:'richtext',
            custom: {
                modules: {
                  toolbar: [['bold', 'italic']],
                },
              },
            isVisible:{
                list: true,
                filter: false,
                show: true,
                edit: true,
            }
        }
    },
    actions: {
        list: { isAccessible: clubAccess},
        edit: { isAccessible: clubAccess},
        delete: { isAccessible: clubAccess},
        new: { isAccessible: clubAccess, before:beforeNewEvent, after:afterNewEvent},
        bulkDelete:{ isAccessible: globalAccess},
    },
    navigation:clubNavigation
}