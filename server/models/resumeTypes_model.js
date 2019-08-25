import mongoose from 'mongoose';
import CONFIG from '../../config/';

const resumeTypes = new mongoose.Schema({
      category:{
         type: String
      },
      subCategory: {
         type: []
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

export default mongoose.model('resumeTypes', resumeTypes);
