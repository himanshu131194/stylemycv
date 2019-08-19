import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux'
import * as actions from '../../actions'
import Footer from '../partials/Footer'

class SideBar extends Component{
      selectResumeTemplates = (e)=>{
          const dataset = e.target.dataset,
                category = dataset.category || null,
                subCategory = dataset.subcategory || null;
          
          this.props.typesResumes(category, subCategory,()=>{
                        console.log(this.props)
                } 
           );
      }
      render(){
          return (
                <Fragment>
                <div className="app-sidebar sidebar-shadow">
                 <div className="scrollbar-sidebar">
                    <div className="app-sidebar__inner">
                        <ul className="vertical-nav-menu">
                            <li className="app-sidebar__heading">resume categories</li>
                            <li>
                                <a href="#" data-category="business" onClick={this.selectResumeTemplates}>
                                    <i className="metismenu-icon pe-7s-browser"></i>
                                    Business
                                    <i className="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                                </a>
                                <ul>
                                    <li>
                                        <a href="#" data-category="business" data-subcategory="analytics" onClick={this.selectResumeTemplates}>
                                            <i className="metismenu-icon">
                                            </i>Analytics
                                        </a>
                                    </li>
                                    <li>
                                        <a href="dashboards-commerce.html">
                                            <i className="metismenu-icon">
                                            </i>Commerce
                                        </a>
                                    </li>
                                    <li>
                                        <a href="dashboards-sales.html">
                                            <i className="metismenu-icon">
                                            </i>Sales
                                        </a>
                                    </li>
                                    <li
                                        
                                        
                                    >
                                        <a href="components-carousel.html#">
                                            <i className="metismenu-icon"></i>
                                            Minimal
                                            <i className="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                                        </a>
                                        <ul
                                            
                                            
                                        >
                                            <li>
                                                <a href="dashboards-minimal-1.html">
                                                    <i className="metismenu-icon">
                                                    </i>Variation 1
                                                </a>
                                            </li>
                                            <li>
                                                <a href="dashboards-minimal-2.html">
                                                    <i className="metismenu-icon">
                                                    </i>Variation 2
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="dashboards-crm.html">
                                            <i className="metismenu-icon"></i>
                                            CRM
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="metismenu-icon pe-7s-joy"></i>
                                    Creative
                                    <i className="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                                </a>
                                <ul>
                                    <li>
                                        <a href="index.html">
                                            <i className="metismenu-icon">
                                            </i>Analytics
                                        </a>
                                    </li>
                                    <li>
                                        <a href="dashboards-commerce.html">
                                            <i className="metismenu-icon">
                                            </i>Commerce
                                        </a>
                                    </li>
                                    <li>
                                        <a href="dashboards-sales.html">
                                            <i className="metismenu-icon">
                                            </i>Sales
                                        </a>
                                    </li>
                                </ul>
                            </li>

                            <li>
                                <a href="#">
                                    <i className="metismenu-icon pe-7s-plugin"></i>
                                    Engineering
                                    <i className="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                                </a>
                                <ul>
                                    <li>
                                        <a href="index.html">
                                            <i className="metismenu-icon">
                                            </i>Analytics
                                        </a>
                                    </li>
                                    <li>
                                        <a href="dashboards-commerce.html">
                                            <i className="metismenu-icon">
                                            </i>Commerce
                                        </a>
                                    </li>
                                    <li>
                                        <a href="dashboards-sales.html">
                                            <i className="metismenu-icon">
                                            </i>Sales
                                        </a>
                                    </li>
                                </ul>
                            </li>

                            <li>
                                <a href="#">
                                    <i className="metismenu-icon pe-7s-diamond"></i>
                                    ITSoftware
                                    <i className="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                                </a>
                                <ul>
                                    <li>
                                        <a href="index.html">
                                            <i className="metismenu-icon">
                                            </i>Analytics
                                        </a>
                                    </li>
                                    <li>
                                        <a href="dashboards-commerce.html">
                                            <i className="metismenu-icon">
                                            </i>Commerce
                                        </a>
                                    </li>
                                    <li>
                                        <a href="dashboards-sales.html">
                                            <i className="metismenu-icon">
                                            </i>Sales
                                        </a>
                                    </li>
                                </ul>
                            </li>

                            <li>
                                <a href="#">
                                    <i className="metismenu-icon pe-7s-car"></i>
                                    ServiceHospitality
                                    <i className="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                                </a>
                                <ul>
                                    <li>
                                        <a href="index.html">
                                            <i className="metismenu-icon">
                                            </i>Analytics
                                        </a>
                                    </li>
                                    <li>
                                        <a href="dashboards-commerce.html">
                                            <i className="metismenu-icon">
                                            </i>Commerce
                                        </a>
                                    </li>
                                    <li>
                                        <a href="dashboards-sales.html">
                                            <i className="metismenu-icon">
                                            </i>Sales
                                        </a>
                                    </li>
                                </ul>
                            </li>

                            <li>
                                <a href="#">
                                    <i className="metismenu-icon pe-7s-display2"></i>
                                    Construction
                                    <i className="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                                </a>
                                <ul>
                                    <li>
                                        <a href="index.html">
                                            <i className="metismenu-icon">
                                            </i>Analytics
                                        </a>
                                    </li>
                                    <li>
                                        <a href="dashboards-commerce.html">
                                            <i className="metismenu-icon">
                                            </i>Commerce
                                        </a>
                                    </li>
                                    <li>
                                        <a href="dashboards-sales.html">
                                            <i className="metismenu-icon">
                                            </i>Sales
                                        </a>
                                    </li>
                                </ul>
                            </li>


                            <li>
                                <a href="#">
                                    <i className="metismenu-icon pe-7s-graph"></i>
                                    Education
                                    <i className="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                                </a>
                                <ul>
                                    <li>
                                        <a href="index.html">
                                            <i className="metismenu-icon">
                                            </i>Analytics
                                        </a>
                                    </li>
                                    <li>
                                        <a href="dashboards-commerce.html">
                                            <i className="metismenu-icon">
                                            </i>Commerce
                                        </a>
                                    </li>
                                    <li>
                                        <a href="dashboards-sales.html">
                                            <i className="metismenu-icon">
                                            </i>Sales
                                        </a>
                                    </li>
                                </ul>
                            </li>

                            <li>
                                <a href="#">
                                    <i className="metismenu-icon pe-7s-graph2"></i>
                                    HealthCare
                                    <i className="metismenu-state-icon pe-7s-angle-down caret-way"></i>
                                </a>
                                <ul>
                                    <li>
                                        <a href="index.html">
                                            <i className="metismenu-icon">
                                            </i>Analytics
                                        </a>
                                    </li>
                                    <li>
                                        <a href="dashboards-commerce.html">
                                            <i className="metismenu-icon">
                                            </i>Commerce
                                        </a>
                                    </li>
                                    <li>
                                        <a href="dashboards-sales.html">
                                            <i className="metismenu-icon">
                                            </i>Sales
                                        </a>
                                    </li>
                                </ul>
                            </li>

                            <li>
                                <a href="#">
                                    <i className="metismenu-icon pe-7s-graph1"></i>
                                    Other
                                    <i className="metismenu-state-icon pe-7s-angle-down caret-light"></i>
                                </a>
                                <ul>
                                    <li>
                                        <a href="index.html">
                                            <i className="metismenu-icon">
                                            </i>Analytics
                                        </a>
                                    </li>
                                    <li>
                                        <a href="dashboards-commerce.html">
                                            <i className="metismenu-icon">
                                            </i>Commerce
                                        </a>
                                    </li>
                                    <li>
                                        <a href="dashboards-sales.html">
                                            <i className="metismenu-icon">
                                            </i>Sales
                                        </a>
                                    </li>
                                </ul>
                            </li>
                
                        </ul>
                    </div>
                </div>
            </div>
       </Fragment>
          )
      }
}

export default connect(state=>state, actions)(SideBar);
