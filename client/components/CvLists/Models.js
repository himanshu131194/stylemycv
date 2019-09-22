import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import * as actions from '../../actions'

class Models extends Component{
	state = {
		 loading : 1
	}
	componentDidMount(){
        this.setState({
        	 loading : 1
        })
	}
	handleImageLoaded = ()=>{
		  //this.props.setLoading(0, ()=>{})
	}
    render(){
    	 return(
           <Fragment>  
              {this.props.selectedData!=='' &&        	
	           <div className="modal fade bd-example-modal-lg" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
				    <div className="modal-dialog modal-lg preview-model">
				        <div className="modal-content">
				            <div className="modal-body flex flex-column align-items-center justify-content-center">
				            {/*this.props.loadingIcon==1 &&  
					            <div className="resume-loader" >
	                                <div className="ball-grid-pulse">
	                                    <div></div>
	                                    <div></div>
	                                    <div></div>
	                                    <div></div>
	                                    <div></div>
	                                    <div></div>
	                                    <div></div>
	                                    <div></div>
	                                    <div></div>
	                                </div>
	                            </div> 
	                        */}
				               <img className="image-fit"
				                    src={`${this.props.selectedData.s3URL}/${this.props.selectedData.resumeImage.original.url}`} 
				                    onLoad={this.handleImageLoaded}
				               />
				            </div>
				            <div className="modal-footer">
				                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
				            </div>
				        </div>
				    </div>
				</div>
			  }
           </Fragment>
    	 )
    }
}

export default connect(state=>state, actions)(Models);