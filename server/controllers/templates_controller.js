import resumeTrack from '../models/resumeTrack_model'
import resumeTypes from '../models/resumeTypes_model'
import CONFIG from '../../config';

//import executiveResumeExample from '../resumeTemplates/business/executive/executive-resume-example.js/index.js'
// import cfoResumeExample from '../resumeTemplates/business/executive/cfo-resume-example.js/index.js'
import accountantResumeExample from '../resumeTemplates/business/accountant/accountant-resume-example.js'
import administrationResumeExample from '../resumeTemplates/business/administration/administration-resume-example.js'
import bankingResumeExample from '../resumeTemplates/business/banking/banking-resume-example.js'
import financeprofessionalResumeExample from '../resumeTemplates/business/banking/finance-professional-resume-example.js'
import investmentbankingResumeExample from '../resumeTemplates/business/banking/investment-banking-resume-example.js'
import businessanalystResumeExample from '../resumeTemplates/business/businessdevelopment/business-analyst-resume-example.js'
import directorOfSalesResumeExample from '../resumeTemplates/business/sales/director-of-sales-resume-example.js'
import salesassociateResumeExample from '../resumeTemplates/business/sales/sales-associate-resume-example.js'
import salesResumeExample from '../resumeTemplates/business/sales/sales-resume-example.js';

import administrationHrResumeExample from '../resumeTemplates/business/hr/administration-resume-example.js';
import humanresourcesHrResumeExample from '../resumeTemplates/business/hr/human-resources-resume-example.js';
import hrdepartmentmanagerResumeExample from '../resumeTemplates/business/hr/hr-department-manager.js';
import hrexecutiveResumeExample from '../resumeTemplates/business/hr/hr-executive-resume-example.js';


import digitalmarketingResumeExample from '../resumeTemplates/business/marketing/digital-marketing-resume-example.js';
import marketingmanagerResumeExample from '../resumeTemplates/business/marketing/marketing-manager-resume-example.js';
import marketingResumeExample from '../resumeTemplates/business/marketing/marketing-resume-example.js';


const TemplateURLS = {
     // "/executive-resume-example" : executiveResumeExample(),
      //"/cfo-resume-example": cfoResumeExample(),
      "/accountant-resume-example": accountantResumeExample(),
      "/administration-resume-example": administrationResumeExample()
}

export default (router)=>{

//   router.get('/executive-resume-example', (req, res)=>{
//            res.send(TemplateURLS[req.url]);
//   });

//   router.get('/cfo-resume-example', (req, res)=>{
//            res.send(cfoResumeExample());
//   });

    router.get('/accountant-resume-example', (req, res)=>{
       res.send(accountantResumeExample());
    });
    router.get('/administration-resume-example', (req, res)=>{
       res.send(administrationResumeExample());
    });
    
    router.get('/banking-resume-example', (req, res)=>{
       res.send(bankingResumeExample());
    });

    router.get('/finance-professional-resume-example', (req, res)=>{
       res.send(financeprofessionalResumeExample());
    });

    router.get('/investment-banking-resume-example', (req, res)=>{
       res.send(investmentbankingResumeExample());
    });

    router.get('/business-analyst-resume-example', (req, res)=>{
       res.send(businessanalystResumeExample());
    });

    router.get('/director-of-sales-resume-example', (req, res)=>{
       res.send(directorOfSalesResumeExample());
    });
   
    router.get('/sales-associate-resume-example', (req, res)=>{
       res.send(salesassociateResumeExample());
    });

    router.get('/sales-resume-example', (req, res)=>{
       res.send(salesResumeExample());
    });

    router.get('/administration-resume-example', (req, res)=>{
       res.send(administrationHrResumeExample());
    });

    router.get('/human-resources-resume-example', (req, res)=>{
       res.send(humanresourcesHrResumeExample());
    });

    router.get('/hr-department-manager', (req, res)=>{
       res.send(hrdepartmentmanagerResumeExample());
    });

    router.get('/hr-executive-resume-example', (req, res)=>{
       res.send(hrexecutiveResumeExample());
    });
    
    router.get('/digital-marketing-resume-example', (req, res)=>{
       res.send(digitalmarketingResumeExample());
    });

    router.get('/marketing-manager-resume-example', (req, res)=>{
       res.send(marketingmanagerResumeExample());
    });

    router.get('/marketing-resume-example', (req, res)=>{
       res.send(marketingResumeExample());
    });
    return router;
}
