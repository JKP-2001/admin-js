const User = require( "./user.js")

const {
  gcCompetitionsStoreModel,
  spardhaEventModel,
  spardhaOverallStandingsModel,
  spardhaResultModel,
} = require( "./gcScoreboardModel.js")

const busTiming = require( "./busTiming.js")
const buyDetails = require( "./buyModel.js")
const {
  TravelPostModel,
  TravelChatModel,
  ReplyPostModel,
} = require( "./campusTravelModel.js")
const contactParent = require( "./contactParent.js")
const contactsSubsection = require( "./contactsSubsection.js")
const ferryTiming = require( "./ferryTiming.js")
const foodItems = require( "./foodItems.js")
const foodOutlets = require( "./foodOutlets.js")
const foundItem = require( "./foundModel.js")
const lastUpdate = require( "./lastUpdate.js")
const LostAndFoundDetails = require( "./LostModel.js")
// const messMenuItemModelDetails = require( "./messMenu.js")
// const newsModel = require( "./newsModel.js")
const role = require( "./role.js")
const BuyAndSellDetails = require( "./sellModel.js")
const Time = require( "./timeModel.js")

module.exports =  {
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
  role,
  BuyAndSellDetails,
  Time,
};
