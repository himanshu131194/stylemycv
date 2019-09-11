import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as actions from '../../actions'
import axios from 'axios'

class ListCvs extends Component{
   state = {
	  loading : 0
   }
   onSelectResume=(e)=>{
   	    let id = e.target.dataset.id,
   	        selectedResumeList = this.props.listResumes;
   	    this.props.setLoading(1, ()=>{})
   	    this.props.choosedResume(id, selectedResumeList, ()=>{
               console.log(this.props)
   	    });
   }
   downloadResume = async (e)=>{
		let {id, template, url, bucket} = e.target.dataset;
		let loadingId = id;
		this.setState({[loadingId]: 1});
		const {data} = await axios.get(`/api/download-resume?bucketURL=${bucket}&pdfURL=${url}`,{
			responseType: 'arraybuffer'	
		}); 
		const blob = new Blob([data], {type: 'application/pdf'})
		let a = document.createElement('a');
		a.href = window.URL.createObjectURL(blob);
		a.download = `${template}.pdf`
		a.click();
		this.setState({[loadingId]: 0});
   }
   render(){
	 let domain = "http://localhost:8000/template"
   	 return(
       <div className="app-main__outer sidebar__fixed">
                     <div className="app-main__inner">
                       <div className="row">
                               {this.props.listResumes && this.props.listResumes.length>0 && 
                                this.props.listResumes.map((result)=>{
									return (
									    <div className="col-md-12 col-lg-6 col-xl-4">
											<div className="card-shadow-primary card-border mb-3 card">
											   <div className="card-body p-0 cursor-pointer"  onClick={this.onSelectResume} data-toggle="modal" data-target=".bd-example-modal-lg">
											   	   <img className="image-fit" src={`${result.s3URL}/${result.resumeImage.thumbnail.url}`}  data-id={result._id}/>
											   </div>
											   <div className="flex justify-content-between card-footer">
											      <a href={`${domain}/${result.templateName}`} target="_blank" className="color-fff btn-shadow-primary btn btn-primary btn-lg">View Resume</a>
												  {this.state[result._id] && this.state[result._id]==1
												   ? <div class="ball-beat pl-3 pr-3">
												         <div></div>
												         <div></div>
												         <div></div>
													 </div> 
											       :<button href="#" onClick={this.downloadResume}  data-bucket={result.s3URL} data-url={result.pdfURL} data-id={result._id} data-template={result.templateName} className="btn-shadow-success btn-success btn btn-primary btn-lg">Download Resume</button>
												  }
												 </div>
											</div>
									   </div>  
									)
                                })
                               }
                       </div>
                     </div>
       </div> 
   	 )
   }
}

export default connect(state=>state, actions)(ListCvs);