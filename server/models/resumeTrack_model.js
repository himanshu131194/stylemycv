import mongoose from 'mongoose';
import CONFIG from '../../config/';

const resumeTrack = new mongoose.Schema({
      resumeImage:{
            thumbnail: {
                  name : { type: String },
                  mime : { type: String },
                  url : { type: String },
                  width: {type: Number},
                  height: { type:Number },
                  size: {type: Number}
            },
            original: {
                  name : { type: String },
                  mime : { type: String },
                  url : { type: String },
                  width: {type: Number},
                  height: { type:Number },
                  size: {type: Number}
            }
      },
      category:{
         type: String
      },
      subCategory: {
         type: String
      },
      templateURL: {
         type: String
      },
      created: {
         type: Date,
         default: Date.now
      },
      updated:{
         type: Date
      },
      comment: {
         type: String
      }
})

export default mongoose.model('resumeTrack', resumeTrack);
