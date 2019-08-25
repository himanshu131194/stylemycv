import resumeTrack from '../models/resumeTrack_model'
import resumeTypes from '../models/resumeTypes_model'
import CONFIG from '../../config';

export default (router)=>{

    router.post('/get-resume-samples', async (req, res)=>{
           let category = req.body.category;
           let subCategory = req.body.subCategory;

           const queryFilter = {};
           if(category) 
              queryFilter['category'] = category;
           if(subCategory)
              queryFilter['subCategory'] = subCategory;

           const result = await resumeTrack.find(queryFilter);
           
           console.log(result)

           res.status(200).send({
               result
           })
    });

    router.get('/get-resume-categories', async (req, res)=>{
           try{
             const result = await resumeTypes.find({});
             res.status(200).send({
                 result
             });
           }catch(err){
            res.status(400).send({
               result
            })          
           }
    });

    return router;
}
