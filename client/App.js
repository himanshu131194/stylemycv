import React, {Component, Fragment} from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import reduxThunk from 'redux-thunk'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import reducers from './reducers'



import './assets/main.css'
import MainHeader from './components/partials/MainHeader'
import MainFooter from './components/partials/MainFooter'

import Landing from './components/Landing'
import CvLists from './components/CvLists'
import CvListsModels from './components/CvLists/Models'

//FOOTER LINKS 
import About from './components/FooterLinks/About'
import Contacts from './components/FooterLinks/Contact'
import GetBetter from './components/FooterLinks/GetBetterJob'
import ResumeGuide from './components/FooterLinks/ResumeGuide'

//import Routers from './Routers'

class App extends Component{
      render(){
         return(
         	  <BrowserRouter>
               <Provider store={applyMiddleware(reduxThunk)(createStore)(reducers)}>
                  <div className="app-container app-theme-white body-tabs-shadow fixed-header fixed-sidebar">
                     <MainHeader/>
                     <div className="app-main">
                        <Route exact path="/" component={Landing} />
                        <Route path="/example-resume-templates" component={CvLists} />
                        <Route path="/about" component={About} />
                        <Route path="/contact" component={Contacts} />
                        <Route path="/get-a-better-job" component={GetBetter} />
                        <Route path="/resume-guide" component={ResumeGuide} />
                     </div>
                     <MainFooter/>
                  </div>
               <CvListsModels/>
               </Provider>
	          </BrowserRouter>
         )
      }
}


export default App;


