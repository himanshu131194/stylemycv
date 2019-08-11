import React, {Component, Fragment} from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import './assets/main.css'
import MainHeader from './components/partials/MainHeader'
import Landing from './components/Landing'
import CvLists from './components/CvLists'
//import Routers from './Routers'

class App extends Component{
      render(){
         return(
         	<body>
         	  <BrowserRouter>
	            <div className="app-container app-theme-white body-tabs-shadow fixed-header fixed-sidebar">
	               <MainHeader/>
	               <div className="app-main">
	                  <Route exact path="/" component={Landing} />
                      <Route path="/lists" component={CvLists} />
	               </div>
	            </div>
	          </BrowserRouter>
            </body>
         )
      }
}


export default App;


