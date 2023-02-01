const uploadFeature = require("@adminjs/upload")

const newsLocalProvider = {
    bucket: 'public/newsfiles',
    opts: {
      baseUrl: '/public/newsfiles',
    },
  };
 
module.exports.newsFileUpload = uploadFeature({
    multiple: true,
    provider: { local: newsLocalProvider },
    validation: { mimeTypes: ['image/png', 'application/pdf', 'audio/mpeg','text/csv','application/msword','image/jpeg','video/mp4', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'] },
    properties: {
      key: 'uploadedFile.path',
      bucket: 'uploadedFile.folder',
      mimeType: 'uploadedFile.type',
      size: 'uploadedFile.size',
      filename: 'uploadedFile.filename',
      file: 'File',
    }
  })