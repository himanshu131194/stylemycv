import React, {Component, Fragment} from 'react'

class Models extends Component{
    render(){
    	 return(
           <Fragment>           	
	           <div className="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
				    <div className="modal-dialog modal-lg">
				        <div className="modal-content">
				            <div className="modal-body">
				               <img className="image-fit" src="https://stylemycv.s3.ap-south-1.amazonaws.com/servicehospitality/housekeeping/1212eb01-ef5d-48b8-be74-7c3906205316_original.png"/>
				            </div>
				            <div className="modal-footer">
				                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
				                <button type="button" className="btn btn-primary">Save changes</button>
				            </div>
				        </div>
				    </div>
				</div>
           </Fragment>
    	 )
    }
}

export default Models;