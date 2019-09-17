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

import executiveResumeExample from '../resumeTemplates/business/executive/executive-resume-example.js';
import cfoResumeExample from '../resumeTemplates/business/executive/cfo-resume-example.js';

import businessdevelopmentResumeExample from '../resumeTemplates/business/businessdevelopment/business-development-resume-example.js';
import businessdevelopmentcvResumeExample from '../resumeTemplates/business/businessdevelopment/business-development-resume-cv-example.js';
import businessanalystcvResumeExample from '../resumeTemplates/business/businessdevelopment/business-analyst-resume-example.js';

import managementResumeExample from '../resumeTemplates/business/management/management-resume-example.js';
import logisticsmanagerResumeExample from '../resumeTemplates/business/management/logistics-manager-resume-example.js';
import seniorprojectmanagerResumeExample from '../resumeTemplates/business/management/senior-project-manager-resume-example.js';
import projectmanagementResumeExample from '../resumeTemplates/business/management/project-management-resume-example.js';

import secretarycvResumeExample from '../resumeTemplates/business/secretary/secretary-cv-example.js';

// import investmentbankingResumeExample from '../resumeTemplates/business/investmentbanking/investment-banking-resume-example.js';
// import financeprofessionalResumeExample from '../resumeTemplates/business/investmentbanking/finance-professional-resume-example.js';

import constructionResumeExample from '../resumeTemplates/construction/constructionworker/construction-resume-example.js';
import quantitysurveyorResumeExample from '../resumeTemplates/construction/quantitysurveyor/quantity-surveyor-resume-example.js';
import sitemanagerResumeExample from '../resumeTemplates/construction/sitemanager/site-manager-resume-example.js';

import ittechnicalsupportResumeExample from '../resumeTemplates/itsoftware/it/technical-support-resume-example.js';
import itmanagementResumeExample from '../resumeTemplates/itsoftware/projectmanager/management-resume-example.js';
import itprojectmanagementResumeExample from '../resumeTemplates/itsoftware/projectmanager/project-management-resume-example.js';
import itseniorprojectmanagerResumeExample from '../resumeTemplates/itsoftware/projectmanager/senior-project-manager-resume-example.js';

import softwareengineerResumeExample from '../resumeTemplates/itsoftware/softwareengineer/software-engineer-resume-example.js';
import softwareengineeringResumeExample from '../resumeTemplates/itsoftware/softwareengineer/software-engineering-resume-example.js';

import technicalsupportsoftwareengineerResumeExample from '../resumeTemplates/itsoftware/technicalsupport/software-engineer-resume-example.js';
import technicalsupportResumeExample from '../resumeTemplates/itsoftware/technicalsupport/technical-support-resume-example.js';


import psychologistResumeExample from '../resumeTemplates/education/psychologist/psychologist-resume-example.js';
import professorResumeExample from '../resumeTemplates/education/professor/professor-resume-example.js';
import researchcvResumeExample from '../resumeTemplates/education/research/research-cv-example.js';
import teacherassistantResumeExample from '../resumeTemplates/education/teacherassistant/teacher-assistant-resume-example.js';
import principalResumeExample from '../resumeTemplates/education/teacher/principal-resume-example.js';
import teacherResumeExample from '../resumeTemplates/education/teacher/teacher-resume-example.js';



import artistResumeExample from '../resumeTemplates/creative/artist/artist-resume-example.js';
import graphicdesignResumeExample from '../resumeTemplates/creative/artist/graphic-design-resume-example.js';
import interiordesignResumeExample from '../resumeTemplates/creative/artist/interior-designer-resume-example.js';
import journalismResumeExample from '../resumeTemplates/creative/creative/journalism-resume-example.js';
import photographerResumeExample from '../resumeTemplates/creative/photography/photographer-cv-example.js';

import directcareworkingResumeExample from'../resumeTemplates/healthcare/directcare/direct-care-working-resume-example'
import healthcareproviderResumeExample from '../resumeTemplates/healthcare/directcare/health-care-provider-resume-example'
import nurseResumeExample from '../resumeTemplates/healthcare/medical/nurse-resume-example'
import publicrelationsResumeExample from '../resumeTemplates/healthcare/medical/public-relations-resume-example'
import registerednurseResumeExample from '../resumeTemplates/healthcare/medical/registered-nurse-resume-example'
import staffnurseResumeExample from '../resumeTemplates/healthcare/medical/staff-nurse-resume-example'
import pharmacistResumeExample from '../resumeTemplates/healthcare/pharmacist/pharmacist-resume-example'
import physicianResumeExample from '../resumeTemplates/healthcare/physician/physician-cv-example'
import socialworkResumeExample from '../resumeTemplates/healthcare/socialwork/social-work-cv-example'


import civilengineerResumeExample from '../resumeTemplates/engineering/civilengineer/civil-engineer-resume-cv-example'
import electricalengineerResumeExample from '../resumeTemplates/engineering/electricalengineer/electrical-engineer-resume-example'
import mechanicalengineerResumeExample from '../resumeTemplates/engineering/mechanicalengineer/mechanical-engineer-resume-example'

import callcenteragentResumeExample from '../resumeTemplates/servicehospitality/callcenter/call-center-agent-resume-example'
import customerserviceResumeExample from '../resumeTemplates/servicehospitality/customerservice/customer-service-resume-example'
import customerservicesalesResumeExample from '../resumeTemplates/servicehospitality/customerservice/customer-service-sales-resume-example'
import entrylevelcustomerserviceResumeExample from '../resumeTemplates/servicehospitality/customerservice/entry-level-customer-service-resume-example'
import judywatsonResumeExample from '../resumeTemplates/servicehospitality/customerservice/judy-watson'
import juliejohnsonResumeExample from '../resumeTemplates/servicehospitality/customerservice/julie-johnson'
import housekeepingResumeExample from '../resumeTemplates/servicehospitality/housekeeping/house-keeping-resume-example'
import retailResumeExample from '../resumeTemplates/servicehospitality/retail/retail-resume-example'
import restaurantResumeExample from '../resumeTemplates/servicehospitality/waiterwaitress/restaurant-resume-example'

import consultingResumeExample from  '../resumeTemplates/other/consulting/consulting-resume-example'
import healthcareconsultingResumeExample from '../resumeTemplates/other/consulting/healthcare-consulting-resume-example'
// import logisticsmanagerResumeExample from '../resumeTemplates/other/logistics/logistics-manager-resume-example'
import logisticsResumeExample from '../resumeTemplates/other/logistics/logistics-resume-example'
import paralegalcvResumeExample from '../resumeTemplates/other/paralegal/paralegal-resume-cv-example'
import paralegalResumeExample from '../resumeTemplates/other/paralegal/paralegal-resume-example'
import pilotResumeExample from '../resumeTemplates/other/pilot/pilot-cv-example'
//import publicrelationsResumeExample from '../resumeTemplates/other/publicrelations/public-relations-resume-example'
import realestateResumeExample from '../resumeTemplates/other/realestate/real-estate-resume-example'
import warehouseResumeExample from '../resumeTemplates/other/warehouse/warehouse-resume-example'


export default (router)=>{

//   router.get('/executive-resume-example', (req, res)=>{
//            res.send(TemplateURLS[req.url]);
//   });

//   router.get('/cfo-resume-example', (req, res)=>{
//            res.send(cfoResumeExample());
//   });


router.get('/consulting-resume-example', (req, res)=>{
   res.send(consultingResumeExample());
}); 
router.get('/healthcare-consulting-resume-example', (req, res)=>{
   res.send(healthcareconsultingResumeExample());
}); 
// router.get('/logistics-manager-resume-example', (req, res)=>{
//    res.send(logisticsmanagerResumeExample());
// }); 
router.get('/logistics-resume-example', (req, res)=>{
   res.send(logisticsResumeExample());
}); 
router.get('/paralegal-resume-cv-example', (req, res)=>{
   res.send(paralegalcvResumeExample());
}); 
router.get('/paralegal-resume-example', (req, res)=>{
   res.send(paralegalResumeExample());
}); 
router.get('/pilot-cv-example', (req, res)=>{
   res.send(pilotResumeExample());
}); 
// router.get('/public-relations-resume-example', (req, res)=>{
//    res.send(publicrelationsResumeExample());
// }); 
router.get('/real-estate-resume-example', (req, res)=>{
   res.send(realestateResumeExample());
}); 
router.get('/warehouse-resume-example', (req, res)=>{
   res.send(warehouseResumeExample());
}); 









router.get('/call-center-agent-resume-example', (req, res)=>{
   res.send(callcenteragentResumeExample());
}); 
router.get('/customer-service-resume-example', (req, res)=>{
   res.send(customerserviceResumeExample());
}); 
router.get('/customer-service-sales-resume-example', (req, res)=>{
   res.send(customerservicesalesResumeExample());
}); 
router.get('/judy-watson', (req, res)=>{
   res.send(judywatsonResumeExample());
}); 
router.get('/julie-johnson', (req, res)=>{
   res.send(juliejohnsonResumeExample());
}); 
router.get('/house-keeping-resume-example', (req, res)=>{
   res.send(housekeepingResumeExample());
}); 
router.get('/entry-level-customer-service-resume-example', (req, res)=>{
   res.send(entrylevelcustomerserviceResumeExample());
}); 
router.get('/retail-resume-example', (req, res)=>{
   res.send(retailResumeExample());
}); 
router.get('/restaurant-resume-example', (req, res)=>{
   res.send(restaurantResumeExample());
}); 


router.get('/civil-engineer-resume-cv-example', (req, res)=>{
   res.send(civilengineerResumeExample());
});    
router.get('/electrical-engineer-resume-example', (req, res)=>{
   res.send(electricalengineerResumeExample());
});    
router.get('/mechanical-engineer-resume-example', (req, res)=>{
   res.send(mechanicalengineerResumeExample());
});  


router.get('/direct-care-working-resume-example', (req, res)=>{
   res.send(directcareworkingResumeExample());
});    
router.get('/health-care-provider-resume-example', (req, res)=>{
   res.send(healthcareproviderResumeExample());
});    
router.get('/nurse-resume-example', (req, res)=>{
   res.send(nurseResumeExample());
});    
router.get('/public-relations-resume-example', (req, res)=>{
   res.send(publicrelationsResumeExample());
}); 
router.get('/registered-nurse-resume-example', (req, res)=>{
   res.send(registerednurseResumeExample());
}); 
router.get('/staff-nurse-resume-example', (req, res)=>{
   res.send(staffnurseResumeExample());
}); 
router.get('/pharmacist-resume-example', (req, res)=>{
   res.send(pharmacistResumeExample());
}); 
router.get('/physician-cv-example', (req, res)=>{
   res.send(physicianResumeExample());
}); 
router.get('/social-work-cv-example', (req, res)=>{
   res.send(socialworkResumeExample());
}); 




router.get('/artist-resume-example', (req, res)=>{
   res.send(artistResumeExample());
});    
router.get('/graphic-design-resume-example', (req, res)=>{
   res.send(graphicdesignResumeExample());
});
router.get('/interior-designer-resume-example', (req, res)=>{
   res.send(interiordesignResumeExample());
});

router.get('/journalism-resume-example', (req, res)=>{
   res.send(journalismResumeExample());
});

router.get('/photographer-cv-example', (req, res)=>{
   res.send(photographerResumeExample());
});





    router.get('/principal-resume-example', (req, res)=>{
       res.send(principalResumeExample());
    });

    router.get('/teacher-resume-example', (req, res)=>{
       res.send(teacherResumeExample());
    });


    router.get('/teacher-assistant-resume-example', (req, res)=>{
       res.send(teacherassistantResumeExample());
    });

    router.get('/research-cv-example', (req, res)=>{
       res.send(researchcvResumeExample());
    });


    router.get('/professor-resume-example', (req, res)=>{
       res.send(professorResumeExample());
    });

    router.get('/psychologist-resume-example', (req, res)=>{
       res.send(psychologistResumeExample());
    });

    router.get('/technical-support-software-engineering-resume-example', (req, res)=>{
       res.send(technicalsupportsoftwareengineerResumeExample());
    });

    router.get('/technical-support-resume-example', (req, res)=>{
       res.send(technicalsupportResumeExample());
    });

    router.get('/software-engineering-resume-example', (req, res)=>{
       res.send(softwareengineeringResumeExample());
    });

    router.get('/software-engineer-resume-example', (req, res)=>{
       res.send(softwareengineerResumeExample());
    });

    router.get('/it-technical-support-resume-example', (req, res)=>{
       res.send(ittechnicalsupportResumeExample());
    });

    router.get('/it-management-resume-example', (req, res)=>{
       res.send(itmanagementResumeExample());
    });

    router.get('/it-project-management-resume-example', (req, res)=>{
       res.send(itprojectmanagementResumeExample());
    });

    router.get('/it-senior-project-manager-resume-example', (req, res)=>{
       res.send(itseniorprojectmanagerResumeExample());
    });


    router.get('/construction-resume-example', (req, res)=>{
       res.send(constructionResumeExample());
    });

    router.get('/quantity-surveyor-resume-example', (req, res)=>{
       res.send(quantitysurveyorResumeExample());
    });

    router.get('/site-manager-resume-example', (req, res)=>{
       res.send(sitemanagerResumeExample());
    });


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

    router.get('/executive-resume-example', (req, res)=>{
       res.send(executiveResumeExample());
    });

    router.get('/cfo-resume-example', (req, res)=>{
       res.send(cfoResumeExample());
    });

    router.get('/business-development-resume-example', (req, res)=>{
       res.send(businessdevelopmentResumeExample());
    });
    
    router.get('/business-development-resume-cv-example', (req, res)=>{
       res.send(businessdevelopmentcvResumeExample());
    });

    router.get('/business-analyst-resume-example', (req, res)=>{
       res.send(businessanalystcvResumeExample());
    });

    router.get('/management-resume-example', (req, res)=>{
       res.send(managementResumeExample());
    });
    
    router.get('/logistics-manager-resume-example', (req, res)=>{
       res.send(logisticsmanagerResumeExample());
    });

    router.get('/senior-project-manager-resume-example', (req, res)=>{
       res.send(seniorprojectmanagerResumeExample());
    });

    router.get('/project-management-resume-example', (req, res)=>{
       res.send(projectmanagementResumeExample());
    });
   
    router.get('/secretary-cv-example', (req, res)=>{
       res.send(secretarycvResumeExample());
    });



    

//     router.get('/investment-banking-resume-example', (req, res)=>{
//        res.send(investmentbankingResumeExample());
//     });

//     router.get('/finance-professional-resume-example', (req, res)=>{
//        res.send(financeprofessionalResumeExample());
//     });
    
    
    return router;
}
