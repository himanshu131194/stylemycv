import React, {Component, Fragment} from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import reduxThunk from 'redux-thunk'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import reducers from './reducers'



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
             <Provider store={applyMiddleware(reduxThunk)(createStore)(reducers)}>
	            <div className="app-container app-theme-white body-tabs-shadow fixed-header fixed-sidebar">
	               <MainHeader/>
	               <div className="app-main">
	                  <Route exact path="/" component={Landing} />
                      <Route path="/lists" component={CvLists} />
	               </div>
	            </div>
              </Provider>
	          </BrowserRouter>
            </body>
         )
      }
}


export default App;


