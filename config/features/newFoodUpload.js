const uploadFeature = require("@adminjs/upload")

const foodItemLocalProvider = {
  bucket: 'public/foodItems',
  opts: {
    baseUrl: '/public/fooditems',
  },
};

module.exports.foodItemUpload = uploadFeature({
  provider: { local: foodItemLocalProvider },
  validation: { mimeTypes: ['image/png', 'image/jpeg', 'image/jpg'] },
  properties: {
    key: 'image.path',
    bucket: 'image.folder',
    mimeType: 'image.type',
    size: 'image.size',
    filename: 'image.filename',
    file: 'Food Item Image',
  }
})


const foodOutletLocalProvider = {
  bucket: 'public/foodOutlet',
  opts: {
    baseUrl: '/public/foodoutlet',
  },
};

module.exports.foodOutletUpload = uploadFeature({
  provider: { local: foodOutletLocalProvider },
  validation: { mimeTypes: ['image/png', 'image/jpeg', 'image/jpg'] },
  properties: {
    key: 'imageURL.path',
    bucket: 'imageURL.folder',
    mimeType: 'imageURL.type',
    size: 'imageURL.size',
    filename: 'imageURL.filename',
    file: 'Food Outlet Image',
  }
})