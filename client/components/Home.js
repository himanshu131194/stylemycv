import React, {Component, Fragment} from 'react';
import ChooseTempalte from './Landing'
import CvLists from './CvLists'
import MainFooter from './partials/MainFooter'
import MainHeader from './partials/MainHeader'
import '../assets/main.css'

class Home extends Component{
      render(){
          return (
                    <div className="app-container app-theme-white body-tabs-shadow fixed-header fixed-sidebar fixed-footer">
                       <MainHeader/>
                       <div className="app-main">
                              <ChooseTempalte/>
                       </div>
                    </div>
          )
      }
}

export default Home;
