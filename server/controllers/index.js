import resumeTrack from '../models/resumeTrack_model'
import resumeTypes from '../models/resumeTypes_model'
import CONFIG from '../../config';

import request from 'request'
import rp from 'request-promise'

export default (router)=>{

    // router.post('/get-resume-samples', async (req, res)=>{
    //        let category = req.body.category;
    //        let subCategory = req.body.subCategory;

    //        const queryFilter = {};
    //        if(category) 
    //           queryFilter['category'] = category;
    //        if(subCategory)
    //           queryFilter['subCategory'] = subCategory;

    //        const result = await resumeTrack.find(queryFilter);
           
    //        res.status(200).send({
    //            result
    //        })
    // });


    router.get('/get-resume-samples', async (req, res)=>{
        let category = req.query.category;
        let subCategory = req.query.subCategory;

        const queryFilter = {};
        if(category) 
           queryFilter['category'] = category;
        if(subCategory)
           queryFilter['subCategory'] = subCategory;

        const result = await resumeTrack.find(queryFilter).limit(6);
        
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


    router.get('/download-resume', async (req, res)=>{
        let {bucketURL, pdfURL} =  req.query;
        let pdf = await rp({
            uri: `${bucketURL}/${pdfURL}`,
            encoding: null
        });
  	    res.send(pdf);
    });

    return router;
}
