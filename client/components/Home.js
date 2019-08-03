import React, {Component, Fragment} from 'react';
import axios from 'axios';
import '../assets/main.css'

class EZT extends Component{
      render(){
          return (
                 <body>
                    <div className="app-container app-theme-white body-tabs-shadow fixed-header fixed-sidebar fixed-footer">
                       <div className="app-header header-shadow">
                             <div className="app-header__logo">
                                   <div className="logo-src"></div>
                             </div>
                             <div className="app-header__content">
                                   <div className="app-header-left"></div>
                                   <div className="app-header-right">
                                     <button class="mr-4 btn btn-outline-success">CV Templates</button>
                                     <button class="mr-4 btn btn-primary">Sign up</button>
                                     <button className="btn btn-success">Login</button>
                                   </div>
                             </div>
                       </div>
                       <div className="app-main">
                            <div className="app-main__outer">
                                 <div className="app-main__inner">
                                          <div className="row">
                                                  <div className="col-lg-6">
                                                   justo. Ut leo. Donec venenatis vulputate lorem. Mauris turpis nunc, blandit et, volutpat molestie, porta ut, ligula. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor.
                                                  </div>
                                                  <div className="col-lg-6">
                                                     <div className="demo-image-bg"></div>
                                                  </div>
                                          </div>
                                          <div className="row">
                                                 <div className="col-md-12 text-center mb-5">
                                                        <h1 className="text-uppercase font-weight-bolder">how it <span className="text-info">works</span></h1>
                                                        <p>Maecenas egestas arcu quis ligula mattis placerat. Vivamus euismod mauris. <br></br>Etiam rhoncus. Donec elit libero, sodales nec, volutpat a, suscipit non, turpis.</p>
                                                 </div>
                                                 <div className="col-md-6 col-lg-3">
                                                   <div class="main-card mb-3 card vh-30">
                                                        <div class="card-body"><h5 class="card-title text-success">step 1</h5>
                                                          <h4 className="font-weight-bolder">Select Template</h4>
                                                          <p>Vestibulum eu odio. Fusce ac felis sit amet ligula pharetra condimentum.</p>
                                                               <div class="text-center">
                                                                   <div class="animated lightSpeedIn">
                                                                       <div class="swatch-holder swatch-holder-lg bg-success"></div>
                                                                   </div>
                                                               </div>
                                                           </div>
                                                   </div>
                                                 </div>
                                                 <div className="col-md-6 col-lg-3">
                                                   <div class="main-card mb-3 card vh-30">
                                                        <div class="card-body"><h5 class="card-title text-success">step 2</h5>
                                                          <h4 className="font-weight-bolder">Add Some Content</h4>
                                                          <p>Ut a nisl id ante tempus hendrerit. In auctor lobortis lacus. Pellentesque egestas, neque sit amet convallis pulvinar, justo nulla eleifend augue, ac auctor orci leo non est.</p>
                                                               <div class="text-center">
                                                                   <div class="animated lightSpeedIn">
                                                                       <div class="swatch-holder swatch-holder-lg bg-success"></div>
                                                                   </div>
                                                               </div>
                                                           </div>
                                                   </div>
                                                 </div>
                                                 <div className="col-md-6 col-lg-3">
                                                   <div class="main-card mb-3 card vh-30">
                                                        <div class="card-body">
                                                          <h5 class="card-title text-success">step 3</h5>
                                                          <h4 className="font-weight-bolder">Style your CV</h4>
                                                          <p>Donec posuere vulputate arcu. Morbi vestibulum volutpat enim.</p>
                                                               <div class="text-center">
                                                                   <div class="animated lightSpeedIn">
                                                                       <div class="swatch-holder swatch-holder-lg bg-success"></div>
                                                                   </div>
                                                               </div>
                                                           </div>
                                                   </div>
                                                 </div>
                                                 <div className="col-md-6 col-lg-3">
                                                   <div class="main-card mb-3 card vh-30">
                                                        <div class="card-body"><h5 class="card-title text-success">step 4</h5>
                                                          <h4 className="font-weight-bolder">Download</h4>
                                                          <p>Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc. Nullam dictum felis eu pede mollis pretium.</p>
                                                               <div class="text-center">
                                                                   <div class="animated lightSpeedIn">
                                                                       <div class="swatch-holder swatch-holder-lg bg-success"></div>
                                                                   </div>
                                                               </div>
                                                           </div>
                                                   </div>
                                                 </div>
                                          </div>
                                 </div>
                                 <div className="app-wrapper-footer">

                                 </div>
                            </div>
                       </div>
                    </div>
                 </body>
          )
      }
}

export default EZT;
