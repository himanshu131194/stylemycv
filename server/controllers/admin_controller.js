import resumeTrack from '../models/resumeTrack_model'

export default (router)=>{

    router.get('/upload-resumes', (req, res)=>{
           
           res.send({
               key: 'generate-xml'
           })
    })

    return router;
}