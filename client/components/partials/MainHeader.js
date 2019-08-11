import React, {Component} from 'react'
import { Link } from "react-router-dom";
class MainHeader extends Component{
     render(){
         return(
                <div className="app-header header-shadow">
                     <div className="app-header__logo">
                           <a href="/">
                             <div className="logo-src">
                             </div>
                           </a>
                     </div>
                     <div className="app-header__content">
                           <div className="app-header-left"></div>
                           <div className="app-header-right">
                             <a className="mr-4 btn btn-outline-success" href="/lists">CV Templates</a>
                             <button className="mr-4 btn btn-primary">Sign up</button>
                             <button className="btn btn-success">Login</button>
                           </div>
                     </div>
                </div>
          )
     }
}


export default MainHeader;
