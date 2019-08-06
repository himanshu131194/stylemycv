import React , {Component} from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Home from './components/Home'
import CvLists from './components/CvLists'


class Routes extends Component{
    render(){
    	 return(
            <BrowserRouter>
              <Route exact path="/" component={Home} />
              <Route path="/lists" component={CvLists} />
            </BrowserRouter>
    	 )
    }
}

export default Routes;


