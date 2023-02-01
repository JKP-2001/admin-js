const uploadFeature = require("@adminjs/upload")

const newsLocalProvider = {
    bucket: 'public/messFiles',
    opts: {
      baseUrl: '/public/messFiles',
    },
  };
 
module.exports.messFileUpload = uploadFeature({
    provider: { local: newsLocalProvider },
    validation: { mimeTypes: ['image/png','text/csv','image/jpeg']},
    validate:{maxSize:1024*1024},
    properties: {
      key: 'uploadedFile.path',
      bucket: 'uploadedFile.folder',
      mimeType: 'uploadedFile.type',
      size: 'uploadedFile.size',
      filename: 'uploadedFile.filename',
      file: 'CSV File',
    }
})