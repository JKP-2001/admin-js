const { beforeNewUser } = require("../../controllers/adminContoller");
const { beforeNewMenu, afterNewMenu, beforeMenuListing } = require("../../controllers/messMenuController");
const { afterNewEvent, beforeNewEvent, beforeNewsListing } = require("../../controllers/newsEventController");
const { globalAccess, adminAccess, clubAccess, hmcAccess, onlyhmcAccess, onlyClubAccess } = require("./roleBasedAccess");

const AdminJS = require('adminjs');
const { usersNavigation, foodNavigation, clubNavigation, cabSharingNavigation, buyAndSellNavigation, lostAndFoundNavigaion, timingNavigation } = require("../../navigations");
const { beforeNewTravel, beforeDelEvent, afterNewTravel, beforeTravelPostListing } = require("../../controllers/travelController");


module.exports.adminOptions = {
    id: "Admins",
    sort: {
        sortBy: 'name',
        direction: 'asc',
    },
    properties: {
        encryptedPassword: {
            isVisible: false
        },
        password: {
            type: 'password'
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
        edit: { isAccessible: globalAccess, before: beforeNewUser },
        delete: { isAccessible: globalAccess },
        new: { isAccessible: globalAccess, before: beforeNewUser },
        bulkDelete: { isAccessible: globalAccess },
    },
    navigation: usersNavigation
}

module.exports.normalUserOptions = {
    sort: {
        sortBy: 'name',
        direction: 'asc',
    },
    properties: {
        microsoftid: {
            isVisible: false
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
        edit: { isAccessible: globalAccess, before: beforeNewUser },
        delete: { isAccessible: globalAccess },
        new: { isAccessible: globalAccess, before: beforeNewUser },
        bulkDelete: { isAccessible: globalAccess },
    },
    navigation: usersNavigation
}


module.exports.hmcOptions = {
    id: "Mess",
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
        dateCreated: {
            isVisible: {
                list: true,
                filter: true,
                show: true,
                edit: false,
            },
        },
        uploadedFile: {
            isVisible: {
                list: false,
                filter: false,
                show: true,
                edit: false
            }
        },
    },
    actions: {
        list: { isAccessible: hmcAccess, before: beforeMenuListing },
        edit: { isAccessible: onlyhmcAccess, before: beforeNewMenu },
        delete: { isAccessible: globalAccess },
        new: { isAccessible: globalAccess, before: beforeNewMenu },
        bulkDelete: { isAccessible: globalAccess },
    },
    navigation: foodNavigation
}

module.exports.clubOptions = {
    id: "News",
    sort: {
        sortBy: "creationDate",
        direction: "desc",
    },
    navigation: clubNavigation,
    properties: {
        _id: {
            isVisible: {
                list: false,
                filter: false,
                show: false,
                edit: false,
            },
        },
        uploadedFile: {
            isVisible: {
                list: false,
                filter: false,
                show: true,
                edit: false
            }
        },
        author: {
            isVisible: {
                list: false,
                filter: false,
                show: true,
                edit: false,
            }
        },
        creationDate: {
            isVisible: {
                list: false,
                filter: true,
                show: true,
                edit: false,
            }
        },
        updationDate: {
            isVisible: {
                list: false,
                filter: true,
                show: true,
                edit: false,
            }
        },
        clubName: {
            isVisible: {
                list: true,
                filter: true,
                show: true,
                edit: false,
            }
        },
        clubType: {
            isVisible: {
                list: false,
                filter: true,
                show: true,
                edit: false,
            }
        },
        content: {
            type: 'richtext',
            custom: {
                modules: {
                    toolbar: [['bold', 'italic']],
                },
            },
            isVisible: {
                list: true,
                filter: false,
                show: true,
                edit: true,
            }
        }
    },
    actions: {
        list: { isAccessible: clubAccess, before: beforeNewsListing },
        edit: { isAccessible: onlyClubAccess },
        delete: { isAccessible: clubAccess},
        new: { isAccessible: onlyClubAccess, before: beforeNewEvent, after: afterNewEvent },
        bulkDelete: { isAccessible: clubAccess },
    },
}


module.exports.campusTravelOptions = {
    id: "Travel Posts",
    properties: {
        _id: {
            isVisible: {
                list: false,
                filter: false,
                show: false,
                edit: false,
            },
        },
        chatId: {
            isVisible: {
                list: false,
                filter: true,
                show: true,
                edit: false,
            }
        },
        email: {
            isVisible: {
                list: true,
                filter: true,
                show: true,
                edit: false,
            },
        },
        name: {
            isVisible: {
                list: false,
                filter: true,
                show: true,
                edit: false,
            },
        },
        phonenumber: {
            isVisible: {
                list: false,
                filter: true,
                show: true,
                edit: true,
            },
        }
    },
    actions: {
        list: { isAccessible: true, before: beforeTravelPostListing },
        edit: { isAccessible: true },
        delete: { isAccessible: true, before: beforeDelEvent },
        new: { isAccessible: true, before: beforeNewTravel, after: afterNewTravel },
        bulkDelete: { isAccessible: globalAccess },
    },
    navigation: cabSharingNavigation
}


module.exports.travelReplyOptions = {
    id: "Replies",
    properties: {
        _id: {
            isVisible: {
                list: false,
                filter: false,
                show: false,
                edit: false,
            },
        },
        message: {
            isVisible: {
                list: false,
                filter: true,
                show: true,
                edit: true,
            },
        },
    },
    actions: {
        list: { isAccessible: globalAccess },
        edit: { isAccessible: false },
        delete: { isAccessible: globalAccess },
        new: { isAccessible: false },
        bulkDelete: { isAccessible: globalAccess },
    },
    navigation: cabSharingNavigation
}

module.exports.travelChatOptions = {
    id: "Travel Chat",
    properties: {
        _id: {
            isVisible: {
                list: false,
                filter: false,
                show: false,
                edit: false,
            },
        }
    },
    actions: {
        list: { isAccessible: globalAccess },
        edit: { isAccessible: false },
        delete: { isAccessible: globalAccess },
        new: { isAccessible: false },
        bulkDelete: { isAccessible: globalAccess },
    },
    navigation: cabSharingNavigation
}


module.exports.buyOptions = {
    id:'Buy Item',
    navigation:buyAndSellNavigation,
    actions: {
        list: { isAccessible: globalAccess },
        edit: { isAccessible: false },
        delete: { isAccessible: globalAccess },
        new: { isAccessible: false },
        bulkDelete: { isAccessible: globalAccess },
    },
}


module.exports.sellOptions = {
    id:'Sell Item',
    navigation:buyAndSellNavigation,
    actions: {
        list: { isAccessible: globalAccess },
        edit: { isAccessible: false },
        delete: { isAccessible: globalAccess },
        new: { isAccessible: false },
        bulkDelete: { isAccessible: globalAccess },
    },
}

module.exports.lostItemOptions = {
    id:'Lost Item',
    navigation:lostAndFoundNavigaion,
    actions: {
        list: { isAccessible: globalAccess },
        edit: { isAccessible: false },
        delete: { isAccessible: globalAccess },
        new: { isAccessible: false },
        bulkDelete: { isAccessible: globalAccess },
    },
}

module.exports.foundItemOptions = {
    id:'Found Item',
    navigation:lostAndFoundNavigaion,
    actions: {
        list: { isAccessible: globalAccess },
        edit: { isAccessible: false },
        delete: { isAccessible: globalAccess },
        new: { isAccessible: false },
        bulkDelete: { isAccessible: globalAccess },
    },
}

module.exports.foodOutletOptions = {
    id:'Food Oulet',
    navigation:foodNavigation,
    properties:{
        _id: {
            isVisible: {
                list: false,
                filter: false,
                show: false,
                edit: false,
            },
        },
        imageURL: {
            isVisible: {
                list: false,
                filter: false,
                show: true,
                edit: false
            }
        },

    },
    actions: {
        list: { isAccessible: true },
        edit: { isAccessible: onlyhmcAccess },
        delete: { isAccessible:hmcAccess},
        new: { isAccessible:onlyhmcAccess },
        bulkDelete: { isAccessible: globalAccess },
    },
}


module.exports.foodItemOptions = {
    id:'Food Item',
    navigation:foodNavigation,
    properties:{
        _id: {
            isVisible: {
                list: false,
                filter: false,
                show: false,
                edit: false,
            },
        },
        image: {
            isVisible: {
                list: false,
                filter: false,
                show: true,
                edit: false
            }
        },

    },
    actions: {
        list: { isAccessible: true },
        edit: { isAccessible: onlyhmcAccess },
        delete: {isAccessible:hmcAccess},
        new: { isAccessible:onlyhmcAccess },
        bulkDelete: { isAccessible: globalAccess, isAccessible:hmcAccess },
    },
}

module.exports.lastUpdateOption = {
    id:'Last Update',
    navigation:foodNavigation,
    actions: {
        list: { isAccessible: true },
        edit: { isAccessible: false },
        delete: { isAccessible: false },
        new: { isAccessible: false },
        bulkDelete: { isAccessible: false },
        filter:{isAccessible:false}
    },
}

module.exports.busTimeOption = {
    id:'Bus Timing',
    navigation:timingNavigation,
    actions: {
        list: { isAccessible: globalAccess },
        edit: { isAccessible: globalAccess },
        delete: { isAccessible: globalAccess },
        new: { isAccessible: globalAccess },
        bulkDelete: { isAccessible: globalAccess },
    },
}

module.exports.ferryTimeOption = {
    id:'Ferry Timing',
    navigation:timingNavigation,
    actions: {
        list: { isAccessible: globalAccess },
        edit: { isAccessible: globalAccess },
        delete: { isAccessible: globalAccess },
        new: { isAccessible: globalAccess },
        bulkDelete: { isAccessible: globalAccess },
    },
}


module.exports.timeOption = {
    id:'Timing',
    navigation:timingNavigation,
    actions: {
        list: { isAccessible: globalAccess },
        edit: { isAccessible: globalAccess },
        delete: { isAccessible: globalAccess },
        new: { isAccessible: globalAccess },
        bulkDelete: { isAccessible: globalAccess },
    },
}