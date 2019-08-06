import React, {Component} from 'react'

class MainHeader extends Component{
     render(){
         return(
                <div className="app-header header-shadow">
                     <div className="app-header__logo">
                           <div className="logo-src">
                           </div>
                     </div>
                     <div className="app-header__content">
                           <div className="app-header-left"></div>
                           <div className="app-header-right">
                             <button className="mr-4 btn btn-outline-success">CV Templates</button>
                             <button className="mr-4 btn btn-primary">Sign up</button>
                             <button className="btn btn-success">Login</button>
                           </div>
                     </div>
                </div>
          )
     }
}


export default MainHeader;
