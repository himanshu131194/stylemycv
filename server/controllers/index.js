import resumeTrack from '../models/resumeTrack_model'
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
    //TEST URL IN INDEX CONTROLLER
    router.get('/test-index', (req, res)=>{
           console.log('resume CONTROLLER')
           res.send({
               key: 'working'
           })
    })
    return router;
}
