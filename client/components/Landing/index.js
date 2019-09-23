import React, {Component, Fragment} from 'react';

class Home extends Component{
      render(){
          return (
                <div className="app-main__outer">
                     <div className="app-main__inner">
                              <div className="row mb-6">
                                      <div className="col-lg-6">
                                       justo. Ut leo. Donec venenatis vulputate lorem. Mauris turpis nunc, blandit et, volutpat molestie, porta ut, ligula. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor.
                                      </div>
                                      <div className="col-lg-6">
                                         <div className="demo-image-bg">
                                            <img src="/images/landing-resume.png" />
                                         </div>
                                      </div>
                              </div>
                              <div className="row mb-6">
                                     <div className="col-md-12 text-center mb-5">
                                            <h2 className="text-uppercase font-weight-bolder">how it <span className="text-info">works</span></h2>
                                            <p>Maecenas egestas arcu quis ligula mattis placerat. Vivamus euismod mauris. <br></br>Etiam rhoncus. Donec elit libero, sodales nec, volutpat a, suscipit non, turpis.</p>
                                     </div>
                                     <div className="col-md-6 col-lg-3">
                                       <div className="main-card mb-3 card vh-30">
                                            <div className="card-body"><h5 className="card-title text-success">step 1</h5>
                                              <h4 className="font-weight-bolder">Select Template</h4>
                                              <p>Vestibulum eu odio. Fusce ac felis sit amet ligula pharetra condimentum.</p>
                                                   <div className="text-center">
                                                       <div className="animated lightSpeedIn">
                                                            <svg className="resume-order-icons">
                                                                <use href="/icons/sprites.svg#choose_resume" />
                                                            </svg>
                                                       </div>
                                                   </div>
                                               </div>
                                       </div>
                                     </div>
                                     <div className="col-md-6 col-lg-3">
                                       <div className="main-card mb-3 card vh-30">
                                            <div className="card-body"><h5 className="card-title text-success">step 2</h5>
                                              <h4 className="font-weight-bolder">Add Some Content</h4>
                                              <p>Ut a nisl id ante tempus hendrerit. In auctor lobortis lacus. Pellentesque egestas, neque sit amet convallis pulvinar, justo nulla eleifend augue, ac auctor orci leo non est.</p>
                                                   <div className="text-center">
                                                       <div className="animated lightSpeedIn">
                                                            <svg className="resume-order-icons">
                                                                <use href="/icons/sprites.svg#edit_resume" />
                                                            </svg>
                                                       </div>
                                                   </div>
                                               </div>
                                       </div>
                                     </div>
                                     <div className="col-md-6 col-lg-3">
                                       <div className="main-card mb-3 card vh-30">
                                            <div className="card-body">
                                              <h5 className="card-title text-success">step 3</h5>
                                              <h4 className="font-weight-bolder">Style your CV</h4>
                                              <p>Donec posuere vulputate arcu. Morbi vestibulum volutpat enim.</p>
                                                   <div className="text-center">
                                                       <div className="animated lightSpeedIn">
                                                            <svg className="resume-order-icons">
                                                                <use href="/icons/sprites.svg#style_resume" />
                                                            </svg>
                                                       </div>
                                                   </div>
                                               </div>
                                       </div>
                                     </div>
                                     <div className="col-md-6 col-lg-3">
                                       <div className="main-card mb-3 card vh-30">
                                            <div className="card-body"><h5 className="card-title text-success">step 4</h5>
                                              <h4 className="font-weight-bolder">Download</h4>
                                              <p>Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc. Nullam dictum felis eu pede mollis pretium.</p>
                                                   <div className="text-center">
                                                       <div className="animated lightSpeedIn">
                                                            <svg className="resume-order-icons">
                                                                <use href="/icons/sprites.svg#download_resume" />
                                                            </svg>
                                                       </div>
                                                   </div>
                                               </div>
                                       </div>
                                     </div>
                              </div>
                     </div>
                </div>
          )
      }
}

export default Home;
