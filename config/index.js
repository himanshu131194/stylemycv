export default {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 8000,
  mongoURI: 'mongodb+srv://stylemycv:stylemycv123@cluster0-4h7wx.mongodb.net/test?retryWrites=true&w=majority',
  S3: {
  	 BUCKET : 'stylemycv',
  	 URL : 'https://stylemycv.s3.ap-south-1.amazonaws.com',
  	 ACCESS: 'AKIA3YIPQLXVUZ3S3UD7',
  	 SECRET: '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',
  	 PASSWORD: 'WMwQ}t%c(XqR'
  },
  API_URL : "https://limitless-falls-23578.herokuapp.com"
}
