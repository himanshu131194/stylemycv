import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as actions from '../../actions'

class ListCvs extends Component{
   render(){
   	 return(
       <div className="app-main__outer sidebar__fixed">
                     <div className="app-main__inner">
                       <div className="row">
                               {this.props.listResumes && this.props.listResumes.length>0 && 
                                this.props.listResumes.map((result)=>{
									return (
									    <div className="col-md-12 col-lg-6 col-xl-4">
											<div className="card-shadow-primary card-border mb-3 card">
											   <div className="card-body">
											   	   <img className="image-fit" src={`${result.s3URL}/${result.resumeImage.thumbnail.url}`}/>
											   </div>
											   <div className="flex justify-content-between card-footer">
											      <button className="btn-shadow-primary btn btn-primary btn-lg">View Resume</button>
											      <button className="btn-shadow-success btn-success btn btn-primary btn-lg">Download Resume</button>
											   </div>
											</div>
									   </div>  
									)
                                })
                               }
                              
                               <div className="col-md-12 col-lg-6 col-xl-4">
									<div className="card-shadow-primary card-border mb-3 card">
									   <div className="card-body">
									   	   <img className="image-fit" src="https://stylemycv.s3.ap-south-1.amazonaws.com/creative/photography/98f95e47-5448-4692-ac42-d6e113decd21_thumbnail.png"/>
									   </div>
									   <div className="flex justify-content-between card-footer">
									      <button className="btn-shadow-primary btn btn-primary btn-lg">View Resume</button>
									      <button className="btn-shadow-success btn-success btn btn-primary btn-lg">Download Resume</button>
									   </div>
									</div>
                               </div>                              
                               <div className="col-md-12 col-lg-6 col-xl-4">
									<div className="card-shadow-primary card-border mb-3 card">
									   <div className="card-body">
									   	   <img className="image-fit" src="https://stylemycv.s3.ap-south-1.amazonaws.com/creative/photography/98f95e47-5448-4692-ac42-d6e113decd21_thumbnail.png"/>
									   </div>
									   <div className="flex justify-content-between card-footer">
									      <button className="btn-shadow-primary btn btn-primary btn-lg">View Resume</button>
									      <button className="btn-shadow-success btn-success btn btn-primary btn-lg">Download Resume</button>
									   </div>
									</div>
                               </div>   
                                                             
                               <div className="col-md-12 col-lg-6 col-xl-4">
									<div className="card-shadow-primary card-border mb-3 card">
									   <div className="card-body">
									   	   <img className="image-fit" src="https://stylemycv.s3.ap-south-1.amazonaws.com/creative/photography/98f95e47-5448-4692-ac42-d6e113decd21_thumbnail.png"/>
									   </div>
									   <div className="flex justify-content-between card-footer">
									      <button className="btn-shadow-primary btn btn-primary btn-lg">View Resume</button>
									      <button className="btn-shadow-success btn-success btn btn-primary btn-lg">Download Resume</button>
									   </div>
									</div>
                               </div>

                               <div className="col-md-12 col-lg-6 col-xl-4">
									<div className="card-shadow-primary card-border mb-3 card">
									   <div className="card-body">
									   	   <img className="image-fit" src="https://stylemycv.s3.ap-south-1.amazonaws.com/creative/photography/98f95e47-5448-4692-ac42-d6e113decd21_thumbnail.png"/>
									   </div>
									   <div className="flex justify-content-between card-footer">
									      <button className="btn-shadow-primary btn btn-primary btn-lg">View Resume</button>
									      <button className="btn-shadow-success btn-success btn btn-primary btn-lg">Download Resume</button>
									   </div>
									</div>
                               </div>
                               <div className="col-md-12 col-lg-6 col-xl-4">
									<div className="card-shadow-primary card-border mb-3 card">
									   <div className="card-body">
									   	   <img className="image-fit" src="https://stylemycv.s3.ap-south-1.amazonaws.com/creative/photography/98f95e47-5448-4692-ac42-d6e113decd21_thumbnail.png"/>
									   </div>
									   <div className="flex justify-content-between card-footer">
									      <button className="btn-shadow-primary btn btn-primary btn-lg">View Resume</button>
									      <button className="btn-shadow-success btn-success btn btn-primary btn-lg">Download Resume</button>
									   </div>
									</div>
                               </div>
                       </div>
                     </div>
       </div> 
   	 )
   }
}

export default connect(state=>state, actions)(ListCvs);