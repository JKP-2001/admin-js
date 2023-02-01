const { beforeNewUser } = require("../../controllers/adminContoller");
const { beforeNewMenu, afterNewMenu } = require("../../controllers/messMenuController");
const { afterNewEvent } = require("../../controllers/newsEventController");
const { globalAccess, adminAccess, clubAccess, hmcAccess } = require("./roleBasedAccess");

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
        }
    },
    actions: {
        list: { isAccessible: hmcAccess},
        edit: { isAccessible: hmcAccess, before:afterNewMenu},
        delete: { isAccessible: globalAccess },
        new: { isAccessible: globalAccess, },
        bulkDelete:{ isAccessible: globalAccess},
    },
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
        // author: {
        //     isVisible: {
        //         list: false,
        //         filter: false,
        //         show: false,
        //         edit: false,
        //     },
        // },
        // imgURL:{
        //     isVisible: {
        //         list: false,
        //         filter: false,
        //         show: false,
        //         edit: false,
        //     },
        // }

    },
    actions: {
        list: { isAccessible: clubAccess},
        edit: { isAccessible: clubAccess},
        delete: { isAccessible: clubAccess},
        new: { isAccessible: clubAccess, before:afterNewEvent},
        bulkDelete:{ isAccessible: globalAccess},
    },


}