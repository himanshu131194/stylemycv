import resumeTrack from '../models/resumeTrack_model'
import resumeTypes from '../models/resumeTypes_model'
import CONFIG from '../../config';

import executiveResumeExample from '../resumeTemplates/executive-resume-example.js'
import cfoResumeExample from '../resumeTemplates/cfo-resume-example.js'

const TemplateURLS = {
      "/executive-resume-example" : executiveResumeExample(),
      "/cfo-resume-example": cfoResumeExample()
}

export default (router)=>{

    router.get('/executive-resume-example', (req, res)=>{
           res.send(TemplateURLS[req.url]);
    });

    router.get('/cfo-resume-example', (req, res)=>{
           res.send(cfoResumeExample());
    });

    return router;
}
