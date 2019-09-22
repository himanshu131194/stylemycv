import React, {Component} from 'react'

class Footer extends Component{
     render(){
     	  return (
               <div className="app-wrapper-footer z-10">
                      <div className="app-footer">
                        <div className="app-footer__inner">
                            <div className="app-footer-left">
                              <div className="grid-menu grid-menu-2col">
                                   <div className="no-gutters row">
                                   <div className="">
                                        <ul className="nav">
                                             <li className="nav-item-header nav-item">Popular content</li>
                                             <li className="nav-item"><a className="nav-link" href="/about" target="_blank"><span>About Us</span></a></li>
                                             <li className="nav-item"><a className="nav-link" href="/contact" target="_blank"><span>Contact</span></a></li>
                                             <li className="nav-item"><a className="nav-link" href="/resume-guide" target="_blank"><span>Resume Guide</span></a></li>
                                             <li className="nav-item"><a className="nav-link" href="/get-a-better-job" target="_blank"><span>How to get a better job</span></a></li>
                                        </ul>
                                   </div>
                                   </div>
                              </div>
                            </div>
                            <div className="app-footer-right">
                                  <ul className="header-megamenu nav">
                                       <li className="nav-item">Copyright © StyleMyCV 2019</li>
                                  </ul>
                            </div>
                        </div>
                      </div>
                 </div>
     	  )
     }
}

export default Footer;