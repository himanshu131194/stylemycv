import resumeTrack from '../models/resumeTrack_model'
import resumeTypes from '../models/resumeTypes_model'
import CONFIG from '../../config';

//import executiveResumeExample from '../resumeTemplates/business/executive/executive-resume-example.js/index.js'
// import cfoResumeExample from '../resumeTemplates/business/executive/cfo-resume-example.js/index.js'
import accountantResumeExample from '../resumeTemplates/business/accountant/accountant-resume-example.js'
import administrationResumeExample from '../resumeTemplates/business/administration/administration-resume-example.js'


const TemplateURLS = {
     // "/executive-resume-example" : executiveResumeExample(),
      //"/cfo-resume-example": cfoResumeExample(),
      "/accountant-resume-example": accountantResumeExample(),
      "/administration-resume-example": administrationResumeExample()
}

export default (router)=>{

//     router.get('/executive-resume-example', (req, res)=>{
//            res.send(TemplateURLS[req.url]);
//     });

//     router.get('/cfo-resume-example', (req, res)=>{
//            res.send(cfoResumeExample());
//     });

    router.get('/accountant-resume-example', (req, res)=>{
       res.send(accountantResumeExample());
    });

    router.get('/administration-resume-example', (req, res)=>{
       res.send(administrationResumeExample());
    });
    return router;
}
