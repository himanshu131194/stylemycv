import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux'
import * as actions from '../../actions'
import Footer from '../partials/Footer'

class SideBar extends Component{
      componentDidMount(){
          this.props.listCategories(()=>{
              console.log(this.props)
          })
      }
      selectResumeTemplates = (e)=>{
          const dataset = e.target.dataset,
                category = dataset.category || null,
                subCategory = dataset.subcategory || null;
          
          this.props.typesResumes(category, subCategory,()=>{
                        console.log(this.props)
                        document.getElementById('cvlists_toggle').click();
                } 
           );
      }
      viewSubCategories = (viewSub, category)=>{
              let k = viewSub.map((subCat)=>{
                  let subCatMain = subCat.toLowerCase().replace(/[\s\/]/g, '');
                  return (
                        <li>
                            <a href="#" data-category={category} data-subCategory={subCatMain} onClick={this.selectResumeTemplates}>
                                <i className="metismenu-icon">
                                </i>{subCat}
                            </a>
                        </li>
                  )
              })
              return k;
      }
      render(){
          return (
                <Fragment>
                <div className="app-sidebar sidebar-shadow">
                 <div className="scrollbar-sidebar">
                    <div className="app-sidebar__inner">
                        <ul className="vertical-nav-menu">
                            <li className="app-sidebar__heading">resume categories</li>
                            {this.props.categoriesList.length>0 && 
                             this.props.categoriesList.map((result)=>{
                                 return (
                                        <li key={result._id}>
                                            <a href="#" data-category={result.category} data-subCategory="">
                                                <i className="metismenu-icon pe-7s-folder"></i>
                                                {result.categoryView}
                                                <i className="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                                            </a>
                                            <ul>
                                               {result.subCategory.length>0 && this.viewSubCategories(result.subCategoryView, result.category)}
                                            </ul>
                                        </li>
                                 )
                             })
                            }
                        </ul>
                    </div>
                </div>
            </div>
       </Fragment>
          )
      }
}

export default connect(state=>state, actions)(SideBar);
