import resumeTypes from '../models/resumeTypes_model'
import resumeTrack from '../models/resumeTrack_model'

// import resumeTrack from '../models/resumeTrack_model'
// import CONFIG from '../../config';
// import fs from 'fs';
// import uuid from 'uuid/v4';
// import AWS from 'aws-sdk'
// import request from 'request'
// import rp from 'request-promise'


   let resumeSamples = {
     Business: {
       Accountant:{
            url : [
                "https://images.ctfassets.net/ii3k8n6p1keg/asYpKcn1e0ukO6qgucIeS/24733d9cde6a84a1f3efa5861bda3d08/Screen_Shot_2017-06-27_at_3.01.37_PM.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80"
            ],
            pdf: [
                "https://www.visualcv.com/accountant-resume-example/pdf"
            ]
              
       },
       Administration:{
         url : [
            "https://images.ctfassets.net/ii3k8n6p1keg/2KtYpjcJlYKeKwmew4ogMa/329cd7ca7158caec0c40ed12cc8a6df0/Screen_Shot_2016-09-23_at_10.17.51_AM.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80"
         ],
         pdf:[
            "https://www.visualcv.com/administration-resume-example/pdf"
         ]
       },
       Banking:{
         url : [
            "https://images.ctfassets.net/ii3k8n6p1keg/1FKDfb2p6km2g0okuewy0e/ccbc83f53586b5bf85a3fef819801d94/Screen_Shot_2017-01-20_at_2.25.56_PM.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80",
            "https://images.ctfassets.net/ii3k8n6p1keg/SFtzqZZu6IgcAM40iMQq0/fc040196c1ad9fb27e45fb98b655e03c/Screen_Shot_2016-09-22_at_3.05.47_PM.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80",
            "https://images.ctfassets.net/ii3k8n6p1keg/5fzSwYn8GQ8o6gAUoeC8Yq/536f4c5a404c4dee53a4af1a0a660a73/finance-professional.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80",
            "https://images.ctfassets.net/ii3k8n6p1keg/5fzSwYn8GQ8o6gAUoeC8Yq/536f4c5a404c4dee53a4af1a0a660a73/finance-professional.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80"
         ]
       },
       BusinessDevelopment:{
         url : [
             "https://images.ctfassets.net/ii3k8n6p1keg/39EhNGrZG0gKggoAIKoscU/9481ebb41636d917f68b580c8790118c/Screen_Shot_2016-09-23_at_2.48.39_PM.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80",
             "https://images.ctfassets.net/ii3k8n6p1keg/4aqT1PNLVeYEI4IMEEacSM/3bda629b7983eca374eaa864cc2d55ed/financial_sales_and_something_officer.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80",
             "https://images.ctfassets.net/ii3k8n6p1keg/1uEO5nuAgACOu6SwmsSGEc/41cfd8f22f88cb027c210abc27633ad1/information-technology-professional.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80"
         ]
       },
       Executive:{
         url : [
            "https://images.ctfassets.net/ii3k8n6p1keg/5kvCubLIwEg8qQWSWgqmEc/c3927fa0ce59a9d28935ece8ad705823/Screen_Shot_2017-01-20_at_2.24.05_PM.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80",
            "https://images.ctfassets.net/ii3k8n6p1keg/2CqGotWp2UM8GeiY2aQE2S/c37686eb6d0047a0eeac64fedb84e249/Screen_Shot_2016-11-22_at_4.25.22_PM.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80"
         ],
         pdf:[
            "https://www.visualcv.com/executive-resume-example/pdf/",
            "https://www.visualcv.com/cfo-resume-example/pdf"
         ],
         template: [
            "executive-resume-example",
            "cfo-resume-example"
         ]
       },
       hr:{
         url : [
            "https://images.ctfassets.net/ii3k8n6p1keg/64AZt2qht6OuOSkQQ8qWQE/a4fd7d4166a10ee84e2987cfe1edc475/Screen_Shot_2016-09-23_at_11.42.22_AM.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80",
            "https://images.ctfassets.net/ii3k8n6p1keg/2KtYpjcJlYKeKwmew4ogMa/329cd7ca7158caec0c40ed12cc8a6df0/Screen_Shot_2016-09-23_at_10.17.51_AM.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80",
            "https://images.ctfassets.net/ii3k8n6p1keg/4TCP7QEEbeOeEAG4AaSMQS/99cf865d4b465bb5433e81080f88a634/senior-hr-professional.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80",
            "https://images.ctfassets.net/ii3k8n6p1keg/6EOJNBKBocCIAu0i0As2yg/a12be0d90e8321120db592de9ec95209/hr-professional.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80"
         ]
       },
       InvestmentBanking:{
         url : [
            "https://images.ctfassets.net/ii3k8n6p1keg/SFtzqZZu6IgcAM40iMQq0/fc040196c1ad9fb27e45fb98b655e03c/Screen_Shot_2016-09-22_at_3.05.47_PM.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80",
            "https://images.ctfassets.net/ii3k8n6p1keg/5fzSwYn8GQ8o6gAUoeC8Yq/536f4c5a404c4dee53a4af1a0a660a73/finance-professional.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80"
         ]
       },
       Management:{
         url : [
           "https://images.ctfassets.net/ii3k8n6p1keg/5pl1BQuVVKkyEIKG8y4GI4/ef8a4c0748c250854b1094712f29fa7c/Screen_Shot_2017-01-20_at_2.33.25_PM.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80",
           "https://images.ctfassets.net/ii3k8n6p1keg/4SOe84qpDyemgumQw8SO6Q/7f474e0c782653ec982cd82d79527321/Screen_Shot_2017-01-20_at_2.31.42_PM.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80",
           "https://images.ctfassets.net/ii3k8n6p1keg/27hnqat9oU6Oqg4KC2QeQK/b1d8d8d52427cd4608105124037b0d49/Screen_Shot_2017-01-20_at_3.22.19_PM.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80",
           "https://images.ctfassets.net/ii3k8n6p1keg/6NtbAt7IcMMSkU4UsWCg6Q/e8c2ea94c08d064adfbffb934cd906f8/Screen_Shot_2017-01-20_at_2.52.02_PM.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80"
         ]
       },
       Marketing:{
         url : [
            "https://images.ctfassets.net/ii3k8n6p1keg/3vpfRZvdZ6SSkI28qSGu4C/106577378def6ab6cb639a252ac28c25/Screen_Shot_2017-01-20_at_3.30.13_PM.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80",
            "https://images.ctfassets.net/ii3k8n6p1keg/5qZONqUGHK0G8mikCWGsgI/81028dc3828aad230e0527d7cc4bf02f/Screen_Shot_2016-09-23_at_4.05.07_PM.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80",
            "https://images.ctfassets.net/ii3k8n6p1keg/6tWPoMEHjGucgSogiims2C/18fd7a3482aa6a555510473aeddf687f/Screen_Shot_2016-09-23_at_11.36.53_AM.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80"
         ]
       },
       Sales:{
         url : [
            "https://images.ctfassets.net/ii3k8n6p1keg/nnnkpRX3gWGqu6aEsquEm/fef596948c6d0c072e4bb6f5ef1c6677/Screen_Shot_2017-01-20_at_3.09.50_PM.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80",
            "https://images.ctfassets.net/ii3k8n6p1keg/3pACVCskzKIEqqmwoYWW6e/d9c8df1be045f63a2bc9304470ca65a6/Screen_Shot_2017-01-20_at_3.02.00_PM.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80",
            "https://images.ctfassets.net/ii3k8n6p1keg/1oMEAh9NxKO0ksc0q8Awc2/a8c5ffaade475ee1302052f37492a373/Screen_Shot_2016-09-23_at_2.07.57_PM.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80"
         ]
       },
       Secretary :{
          url:[
             "https://images.ctfassets.net/ii3k8n6p1keg/7mXEJo1yFyueiwq8MowWyk/2f1dbb18dfb58533f8d795e929b96956/Screen_Shot_2017-11-09_at_4.10.10_PM.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80"
          ]
       }
     },

     Creative:{
       Artist:{
          url:[
            "https://images.ctfassets.net/ii3k8n6p1keg/2XEGjEqhRKM0segMGOuSWi/c0f6a6ff0704949eec426e4424f65ef8/Screen_Shot_2017-06-28_at_2.55.04_PM.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80",
            "https://images.ctfassets.net/ii3k8n6p1keg/5pEbK7N7H2m0SyYY2asSqQ/c1ea27c291a9959333210c7c92ef772d/Screen_Shot_2017-06-28_at_1.40.58_PM.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80",
            "https://images.ctfassets.net/ii3k8n6p1keg/4wdjOUnd8cKUmQSwwqI6cY/fd41514a6d9cfcb1fc64873b4f8b94df/Screen_Shot_2017-01-20_at_2.57.44_PM.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80"
          ]
       },
       Creative:{
          url:[
             "https://images.ctfassets.net/ii3k8n6p1keg/5pEbK7N7H2m0SyYY2asSqQ/c1ea27c291a9959333210c7c92ef772d/Screen_Shot_2017-06-28_at_1.40.58_PM.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80",
             "https://images.ctfassets.net/ii3k8n6p1keg/4wdjOUnd8cKUmQSwwqI6cY/fd41514a6d9cfcb1fc64873b4f8b94df/Screen_Shot_2017-01-20_at_2.57.44_PM.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80",
             "https://images.ctfassets.net/ii3k8n6p1keg/30RLkQ05xe2kK8GogmKWoG/6751af1bfad059da98f61fc797a51aa8/Screen_Shot_2017-01-20_at_2.43.55_PM.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80"
          ]
       },
       GraphicDesign:{
          url:[
             "https://images.ctfassets.net/ii3k8n6p1keg/5pEbK7N7H2m0SyYY2asSqQ/c1ea27c291a9959333210c7c92ef772d/Screen_Shot_2017-06-28_at_1.40.58_PM.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80"
          ]
       },
       InteriorDesign:{
          url:[
            "https://images.ctfassets.net/ii3k8n6p1keg/4wdjOUnd8cKUmQSwwqI6cY/fd41514a6d9cfcb1fc64873b4f8b94df/Screen_Shot_2017-01-20_at_2.57.44_PM.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80"
          ]
       },
       Photography:{
          url:[
            "https://images.ctfassets.net/ii3k8n6p1keg/6aKu4FtflCMewaikqU6a4W/e421e28cbb03f3646310289f683cc007/Screen_Shot_2017-11-08_at_3.06.57_PM.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80"
          ]
       },
       Writer:{
          url:[
            "https://images.ctfassets.net/ii3k8n6p1keg/30RLkQ05xe2kK8GogmKWoG/6751af1bfad059da98f61fc797a51aa8/Screen_Shot_2017-01-20_at_2.43.55_PM.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80"
          ]
       }
     },
     ServiceHospitality:{
       CallCenter:{
           url: [
               "https://images.ctfassets.net/ii3k8n6p1keg/2dMSZdcUPaE6QMoaW0OUGw/a5a1a7fc91a8fc12bf7b726403993d12/Screen_Shot_2017-01-20_at_3.28.07_PM.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80"
           ]
       },
       CustomerService:{
           url: [
                "https://images.ctfassets.net/ii3k8n6p1keg/6upnyAtcqI0u6I6UaIa8Q2/c961a99855421198389910cbdc5c6ef1/Screen_Shot_2016-09-23_at_4.07.57_PM.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80",
                "https://images.ctfassets.net/ii3k8n6p1keg/2LB1r4RUdiwCM6so6SKAs2/e8c8d731bd2f76987f3c25a485bafc7c/Screen_Shot_2016-09-23_at_3.37.26_PM.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80",
                "https://images.ctfassets.net/ii3k8n6p1keg/1QmUg1koe8WQeUSAwIm2c2/606978de597c43d77e4477180a708886/Screen_Shot_2017-01-20_at_3.00.21_PM.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80",
                "https://images.ctfassets.net/ii3k8n6p1keg/1Sj1kzUCLykaYowIw80KM0/d0a99df156e4a2a2ecfbbbcadd02177e/Screen_Shot_2017-01-20_at_2.58.58_PM.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80",
                "https://images.ctfassets.net/ii3k8n6p1keg/4MfwxtCHHG4Aew0Ya8SAO4/a5190ff96ea5ab3ff44ee9249fe0228d/Screen_Shot_2016-11-22_at_9.34.28_PM.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80"
           ]
       },
       Housekeeping:{
           url: [
               "https://images.ctfassets.net/ii3k8n6p1keg/6LKWXh4aIMgcC4Ygawqcmo/37ce92e8b6b68c6fb041ff397a0075c1/Screen_Shot_2017-01-20_at_2.48.07_PM.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80"
           ]
       },
       Retail:{
           url: [
              "https://images.ctfassets.net/ii3k8n6p1keg/1r2gES8S7CsqCi4IocooUI/bb2caed34f9b31e4fd9d33bc43b4af22/Screen_Shot_2017-01-20_at_2.53.41_PM.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80"
           ]
       },
       WaiterWaitress :{
           url: [
              "https://images.ctfassets.net/ii3k8n6p1keg/5EnwM80ItqIUEGg6QcYeYQ/baa9dd7752a8aaa7e3324e0eb3d15be5/Screen_Shot_2017-01-20_at_3.11.26_PM.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80"
           ]
       }
     },

     Engineering:{
       CivilEngineer:{
           url:[
              "https://images.ctfassets.net/ii3k8n6p1keg/50bdGcgfFKMg68Y0MSi220/71d1a9c82c6548f75c57702848892f29/Screen_Shot_2016-11-22_at_9.07.49_PM.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80"
           ]
       },
       ElectricalEngineer:{
           url:[
              "https://images.ctfassets.net/ii3k8n6p1keg/3kCwQESREAKaAuoUEOMA4q/1a96d9997720f929332c96538c0121f5/Screen_Shot_2017-06-29_at_2.48.57_PM.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80"
           ]
       },
       MechanicalEngineer:{
           url:[
              "https://images.ctfassets.net/ii3k8n6p1keg/E6iehaX9G8UyE08u6WKas/b274cb570c493890bd2480a1538704eb/Screen_Shot_2017-06-27_at_4.01.05_PM.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80"
           ]
       }
     },

     Construction:{
       ConstructionWorker:{
          url:[
              "https://images.ctfassets.net/ii3k8n6p1keg/1qfk562qZWMemea6QYwaW2/a46bb3205640639cb41ef1727666bbd2/Screen_Shot_2017-01-20_at_2.37.58_PM.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80"
          ]
       },
       QuantitySurveyor:{
          url:[
             "https://images.ctfassets.net/ii3k8n6p1keg/1keb7308cSsIuMyEKqCmeM/90f45f487e236fe04d2e379acede53c2/Screen_Shot_2017-06-29_at_3.40.35_PM.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80"
          ]
       },
       SiteManager:{
          url:[
             "https://images.ctfassets.net/ii3k8n6p1keg/1qfk562qZWMemea6QYwaW2/a46bb3205640639cb41ef1727666bbd2/Screen_Shot_2017-01-20_at_2.37.58_PM.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80"
          ]
       },
     },

     HealthCare:{
       DirectCare:{
          url:[
              "https://images.ctfassets.net/ii3k8n6p1keg/621ZKYz3YA6eceMSUEEuCS/f1d6f222a2b013d6756f00ff23a6509b/Screen_Shot_2017-01-20_at_3.03.19_PM.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80"
          ]
       },
       Medical:{
          url:[
              "https://images.ctfassets.net/ii3k8n6p1keg/15KHoJCsOEEiCcgYsOKugQ/67346d6b6cbfe00296f3ae506e8ccac9/Screen_Shot_2016-09-23_at_3.34.22_PM.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80",
              "https://images.ctfassets.net/ii3k8n6p1keg/G7nHY5nDQQq4kM2oKs8Q8/f487311a26ce13913f5c3e19efaafb31/Screen_Shot_2017-01-20_at_2.39.42_PM.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80",
              "https://images.ctfassets.net/ii3k8n6p1keg/1OicmtSSlWgSqeKuwIiC8Y/e587c7bdb181dfac22a7663a1fe78cf6/Screen_Shot_2016-09-23_at_2.11.05_PM.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80",
              "https://images.ctfassets.net/ii3k8n6p1keg/4vwzjpJbsc8cKieWi06044/9a22f0d910cfd0dbb5edc8554e227b8d/Screen_Shot_2016-09-23_at_3.53.38_PM.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80"
          ]
       },
       Nursing:{
          url:[
              "https://images.ctfassets.net/ii3k8n6p1keg/G7nHY5nDQQq4kM2oKs8Q8/f487311a26ce13913f5c3e19efaafb31/Screen_Shot_2017-01-20_at_2.39.42_PM.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80",
              "https://images.ctfassets.net/ii3k8n6p1keg/1OicmtSSlWgSqeKuwIiC8Y/e587c7bdb181dfac22a7663a1fe78cf6/Screen_Shot_2016-09-23_at_2.11.05_PM.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80",
              "https://images.ctfassets.net/ii3k8n6p1keg/15KHoJCsOEEiCcgYsOKugQ/67346d6b6cbfe00296f3ae506e8ccac9/Screen_Shot_2016-09-23_at_3.34.22_PM.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80"
          ]
       },
       Pharmacist:{
          url:[
             "https://images.ctfassets.net/ii3k8n6p1keg/5JlzCKeWxquuG4UQqauyau/687021062dd1eaa371ece7e0a7bfd9e7/Screen_Shot_2017-06-28_at_12.42.16_PM.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80"
          ]
       },
       Physician:{
          url:[
             "https://images.ctfassets.net/ii3k8n6p1keg/4nPUj5uY12qM0Kk2quaucI/809d4853c7def5e4cf01bee4a4ad66f5/physician-cv-example.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80"
          ]
       },
       SocialWork:{
          url:[
             "https://images.ctfassets.net/ii3k8n6p1keg/2N16TM4J4IIOoSOAeQ2UY8/36745d91f9e2590e7bc2b4ad3b72453b/Screen_Shot_2017-11-08_at_4.36.04_PM.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80"
          ]
       }
     },


     ITSoftware:{
       it:{
          url:[
            "https://images.ctfassets.net/ii3k8n6p1keg/6u0obPKGmA8IMiUOcye0su/ffc6feb6e8d9394c936a1f0b9f59a946/Screen_Shot_2017-01-20_at_3.26.18_PM.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80"
          ]
       },
       ProjectManager:{
          url:[
            "https://images.ctfassets.net/ii3k8n6p1keg/27hnqat9oU6Oqg4KC2QeQK/b1d8d8d52427cd4608105124037b0d49/Screen_Shot_2017-01-20_at_3.22.19_PM.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80",
            "https://images.ctfassets.net/ii3k8n6p1keg/5pl1BQuVVKkyEIKG8y4GI4/ef8a4c0748c250854b1094712f29fa7c/Screen_Shot_2017-01-20_at_2.33.25_PM.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80",
            "https://images.ctfassets.net/ii3k8n6p1keg/4SOe84qpDyemgumQw8SO6Q/7f474e0c782653ec982cd82d79527321/Screen_Shot_2017-01-20_at_2.31.42_PM.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80"
          ]
       },
       SoftwareEngineer:{
          url:[
             "https://images.ctfassets.net/ii3k8n6p1keg/3bMSiZ1CcgEQEmy4EAiAA6/550b51712cd463b9819b807b51dadd40/Screen_Shot_2017-01-20_at_3.05.40_PM.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80",
             "https://images.ctfassets.net/ii3k8n6p1keg/4wFohUf1WwEUugmSoGe4cw/1669ffe504b4474c1487148a7c133193/Screen_Shot_2017-01-20_at_2.22.00_PM.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80"
          ]
       },
       TechnicalSupport:{
          url:[
            "https://images.ctfassets.net/ii3k8n6p1keg/4wFohUf1WwEUugmSoGe4cw/1669ffe504b4474c1487148a7c133193/Screen_Shot_2017-01-20_at_2.22.00_PM.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80",
            "https://images.ctfassets.net/ii3k8n6p1keg/6u0obPKGmA8IMiUOcye0su/ffc6feb6e8d9394c936a1f0b9f59a946/Screen_Shot_2017-01-20_at_3.26.18_PM.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80"
          ]
       }
     },


     Education:{
       Professor:{
          url:[
               "https://images.ctfassets.net/ii3k8n6p1keg/4A0m8N28u4eWGUogEs0EsS/c5546b17f592807ebf3544439242e191/Screen_Shot_2017-06-30_at_3.26.02_PM.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80"
          ]
       },
       Psychologist:{
          url:[
             "https://images.ctfassets.net/ii3k8n6p1keg/5FUUaZxjnaCQmEsu2aIkgC/efac08668069d2e3cd4b6ed6a75c72cc/Screen_Shot_2017-01-20_at_3.08.11_PM.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80"
          ]
       },
       Research:{
          url:[
             "https://images.ctfassets.net/ii3k8n6p1keg/4lM800VzTyOcK8UsgSO4As/2a6cb7e6424be374a98b7b0c37cbb418/Screen_Shot_2017-11-09_at_3.19.26_PM.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80"
          ]
       },
       Teacher:{
          url:[
            "https://images.ctfassets.net/ii3k8n6p1keg/2Sp97RTYOIqiYe24maQm0u/6831f0dba4346a6dd54ef3b565384f41/Screen_Shot_2016-11-22_at_10.03.34_PM.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80",
            "https://images.ctfassets.net/ii3k8n6p1keg/6bkSY0c4SWW0cI4COwaICo/90ffdad7e6c4ad042b46b4c1a03abf07/Screen_Shot_2017-06-29_at_4.48.45_PM.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80"
          ]
       },
       TeacherAssistant:{
          url:[
            "https://images.ctfassets.net/ii3k8n6p1keg/eK7Cb9l2cEEUcG0GOGee0/ec9c5fa64eb627ee87524a9132b0b723/Screen_Shot_2017-06-29_at_4.15.09_PM.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80"
          ]
       }
     },

     Other:{
       Consulting:{
          url:[
             "https://images.ctfassets.net/ii3k8n6p1keg/1qmNsJy3z2g6kSgMM2qOKo/6b37af9cfe6377fabbad1b8987e3b67b/Screen_Shot_2017-01-20_at_2.56.42_PM.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80",
             "https://images.ctfassets.net/ii3k8n6p1keg/iWIwZSkPJeYuI0CIGmmQ4/fe63bd3d0788d2feaa04e7c8ab8b452f/Screen_Shot_2016-09-23_at_2.37.57_PM.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80"
          ]
       },
       Logistics:{
          url:[
             "https://images.ctfassets.net/ii3k8n6p1keg/6NtbAt7IcMMSkU4UsWCg6Q/e8c2ea94c08d064adfbffb934cd906f8/Screen_Shot_2017-01-20_at_2.52.02_PM.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80",
             "https://images.ctfassets.net/ii3k8n6p1keg/6EHvDxB5ioIIeQyG4aAW0O/c6a10f10f8c15cbbf6175e6660f99784/Screen_Shot_2016-11-22_at_9.50.21_PM.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80"
          ]
       },
       Military:{
          url:[
             "https://images.ctfassets.net/ii3k8n6p1keg/42seWP1680COMYA4U2SKeQ/f1aa4190a08720044463f4e9a0760438/Screen_Shot_2016-09-23_at_10.26.08_AM.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80"
          ]
       },
       Paralegal:{
          url:[
             "https://images.ctfassets.net/ii3k8n6p1keg/3mckjBpFeEQiWm8QA0c2iA/c4dff78491507f716c9c2d4492ffec09/Screen_Shot_2017-01-20_at_2.30.20_PM.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80",
             "https://images.ctfassets.net/ii3k8n6p1keg/1BpcoZ1SYgO8oOyKo6Gkew/331dba6b382a9155578322fc0e8a480e/professional.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80"
          ]
       },
       Pilot:{
          url:[
             "https://images.ctfassets.net/ii3k8n6p1keg/XkaHCMRIIeGiqgqqSSc/9c6163e0490de7206449bbde463b91ac/Screen_Shot_2017-11-21_at_4.28.07_PM.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80"
          ]
       },
       PublicRelations:{
          url:[
             "https://images.ctfassets.net/ii3k8n6p1keg/4vwzjpJbsc8cKieWi06044/9a22f0d910cfd0dbb5edc8554e227b8d/Screen_Shot_2016-09-23_at_3.53.38_PM.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80"
          ]
       },
       RealEstate:{
          url:[
            "https://images.ctfassets.net/ii3k8n6p1keg/2NaCHIiYp2AuQgQ6iMwyKW/df90d464702457dc3a4d2846e578161b/Screen_Shot_2017-01-20_at_3.06.47_PM.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80"
          ]
       },
       Warehouse:{
          url:[
            "https://images.ctfassets.net/ii3k8n6p1keg/4HTOLdFTDWy6q4Cq6qGykk/f6df2b8cd6f817892ead73b47bdbe6f4/Screen_Shot_2017-01-20_at_2.35.56_PM.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80"
          ]
       }
     }
   }


   
export default (router)=>{
    
    
//     router.get('/upload-resumes', async (req, res)=>{

//       const s3 = new AWS.S3({
//             accessKeyId: CONFIG.S3.ACCESS,
//             secretAccessKey: CONFIG.S3.SECRET
//             // region: 'ap-south-1'
//       });

//       //const container = 'resumes';
//       const s3URL = 'https://stylemycv.s3.ap-south-1.amazonaws.com';
//       let dataArray = [];

//       for(let parentFolder in resumeSamples){
         
//          let category = parentFolder.toLowerCase();
//          //fs.mkdirSync(`./${container}/${category}`);
//          //let parent1 = `./${container}/${category}`;


//          let professionals = resumeSamples[parentFolder];
//          for(let y in professionals){
//              let subCategory = y.toLowerCase();
//              //fs.mkdirSync(`${parent1}/${subCategory}`);
//              //let parent2 = `${parent1}/${subCategory}`;
//              let resumeArrays = professionals[y].url;


//              for(let z of resumeArrays){

//                  let dataObj = {};
                 
//                  dataObj['resumeImage'] ={} ;dataObj['resumeImage']['thumbnail'] = {};
//                  dataObj['resumeImage']['original'] = {};

//                  let slugId = uuid();
//                  let a = z;
//                  let imgarray = a.split('?');
//                  let original = imgarray[0];
//                  let ext = original.split('.').pop();
//                  let thumbnail = z;


//                  //dataObj creattion
//                  dataObj['resumeImage']['thumbnail']['name'] = `${slugId}_thumbnail.${ext}`
//                  dataObj['resumeImage']['original']['name'] = `${slugId}_original.${ext}`

//                  dataObj['resumeImage']['thumbnail']['mime'] = `image/${ext}`
//                  dataObj['resumeImage']['original']['mime'] = `image/${ext}`

//                  dataObj['resumeImage']['thumbnail']['url'] = `${category}/${subCategory}/${slugId}_thumbnail.${ext}`
//                  dataObj['resumeImage']['original']['url'] = `${category}/${subCategory}/${slugId}_original.${ext}`
     

//                  dataObj['s3URL']  = s3URL;
//                  dataObj['templateID']  = slugId;
//                  dataObj['category']  = category;
//                  dataObj['subCategory']  = subCategory;
//                  dataObj['s3Bucket'] = CONFIG.S3.BUCKET;
//                  dataObj['templateURL']  = `/${slugId}.html`;

//                  let resImage = await rp({
//                      uri: original,
//                      encoding: null
//                  });
//                  let resImageThumb = await rp({
//                      uri: thumbnail,
//                      encoding: null
//                  });
//                  //fs.writeFileSync(`${parent2}/${slugId}_original.${ext}`, resImage);
//                  //fs.writeFileSync(`${parent2}/${slugId}_thumbnail.${ext}`, resImageThumb);
                
//                  //thumb
//                  const paramsThumb = {
//                    Bucket: CONFIG.S3.BUCKET,
//                    Key: `${category}/${subCategory}/${slugId}_thumbnail.${ext}`,
//                    Body: resImageThumb,
//                    ContentType: `image/${ext}`
//                  }
//                  await s3.putObject(paramsThumb).promise(); 

//                  //original
//                  const params = {
//                    Bucket: CONFIG.S3.BUCKET,
//                    Key: `${category}/${subCategory}/${slugId}_original.${ext}`,
//                    Body: resImage,
//                    ContentType: `image/${ext}`
//                  }
//                  await s3.putObject(params).promise(); 


//                  dataArray.push(dataObj);
             
//              }


//          }

//      }


//     resumeTrack.insertMany(dataArray, function(error, docs) {
//            res.send({
//                docs
//            })
//     });
//            //const dataResult = await resumeTrack.inserMany(dataArray);


//     })


    router.get('/test-admin', (req ,res)=>{
         res.send({
            key: 'working'
         })
    });

        //TEST URL IN INDEX CONTROLLER
    router.get('/test-index', async (req, res)=>{
           // const result = await resumeTrack.aggregate([
           //    { $sort : {category : 1}},
           //    { $group: {
           //       _id: "$category",
           //       subCategory: {
           //          $push: "$subCategory"
           //       }
           //    }}
           // ]);

           // let filtered = result.map((res)=>{
           //      return {
           //          category: res._id,
           //          subCategory: res.subCategory
           //      }
           // });
           // let k = [];
           // for(let x of filtered){
           //     let sub = x.subCategory;
           //         sub = sub.filter(function(item, i, ar){ return ar.indexOf(item) === i; });
           //     k.push({
           //          category: x.category,
           //          subCategory: sub  
           //     })
           // }
           let k = [
                        {
                           "subCategory":[
                              "civilengineer",
                              "electricalengineer",
                              "mechanicalengineer"
                           ],
                           "subCategoryView":[
                              "Civil Engineer",
                              "Electrical Engineer",
                              "Mechanical Engineer"
                           ],
                           "category":"engineering",
                           "categoryView":"Engineering"
                        },
                        {
                           "subCategory":[
                              "publicrelations",
                              "consulting",
                              "paralegal",
                              "logistics",
                              "military",
                              "warehouse",
                              "pilot",
                              "realestate"
                           ],
                           "subCategoryView":[
                              "Publicrelations",
                              "Consulting",
                              "Paralegal",
                              "Logistics",
                              "Military",
                              "Warehouse",
                              "Pilot",
                              "Realestate"
                           ],
                           "category":"other",
                           "CategoryView":"Other"
                        },
                        {
                           "subCategory":[
                              "interiordesign",
                              "writer",
                              "artist",
                              "creative",
                              "graphicdesign",
                              "photography"
                           ],    
                           "subCategoryView":[
                              "Interior Design",
                              "Writer",
                              "Artist",
                              "Creative",
                              "Graphic Design",
                              "Photography"
                           ],
                           "category":"creative",
                           "categoryView":"Creative"
                        },
                        {
                           "subCategory":[
                              "customerservice",
                              "waiterwaitress",
                              "housekeeping",
                              "retail",
                              "callcenter"
                           ],
                           "category":"servicehospitality",     
                           "subCategoryView":[
                              "Customer Service",
                              "Waiter / Waitress",
                              "Housekeeping",
                              "Retail",
                              "Call Center"
                           ],
                           "categoryView":"Service / Hospitality"
                        },
                        {
                           "subCategory":[
                              "psychologist",
                              "professor",
                              "teacherassistant",
                              "research",
                              "teacher"
                           ],
                           "category":"education",   
                           "subCategoryView":[
                              "Psychologist",
                              "Professor",
                              "Teacher Assistant",
                              "Research",
                              "Teacher"
                           ],
                           "categoryView":"Education"
                        },
                        {
                           "subCategory":[
                              "medical",
                              "directcare",
                              "nursing",
                              "physician",
                              "socialwork",
                              "pharmacist"
                           ],
                           "category":"healthcare", 
                           "subCategoryView":[
                              "Medical",
                              "Directcare",
                              "Nursing",
                              "Physician",
                              "Social Work",
                              "Pharmacist"
                           ],
                           "categoryView":"Health Care"
                        },
                        {
                           "subCategory":[
                              "sales",
                              "hr",
                              "marketing",
                              "accountant",
                              "banking",
                              "management",
                              "investmentbanking",
                              "administration",
                              "secretary",
                              "businessdevelopment",
                              "executive"
                           ],
                           "category":"business",      
                           "subCategoryView":[
                              "Sales",
                              "HR",
                              "Marketing",
                              "Accountant",
                              "Banking",
                              "Management",
                              "Investment Banking",
                              "Administration",
                              "Secretary",
                              "Business Development",
                              "Executive"
                           ],
                           "categoryView":"Business"
                        },
                        {
                           "subCategory":[
                              "technicalsupport",
                              "projectmanager",
                              "it",
                              "softwareengineer"
                           ],
                           "category":"itsoftware",
                           "subCategoryView":[
                              "Technical Support",
                              "Project Manager",
                              "IT",
                              "Software Engineer"
                           ],
                           "categoryView":"IT / Software"
                        },
                        {
                           "subCategory":[
                              "quantitysurveyor",
                              "constructionworker",
                              "sitemanager"
                           ],
                           "category":"construction",
                           "subCategoryView":[
                              "Quantity Surveyor",
                              "Construction Worker",
                              "Site Manager"
                           ],
                           "categoryView":"Construction",
                        }
                     ];
           //filtered = filtered.filter(function(item, i, ar){ return ar.indexOf(item) === i; });
           resumeTypes.insertMany(k, function(error, docs) {
             res.send({
               docs
             })
           });
    })

    return router;
}





