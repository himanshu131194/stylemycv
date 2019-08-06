import React, {Component, Fragment} from 'react';
import ChooseTempalte from './Landing'
import CvLists from './CvLists'
import Footer from './partials/Footer'
import MainHeader from './partials/MainHeader'
import '../assets/main.css'

class Home extends Component{
      render(){
          return (
                 <body>
                    <div className="app-container app-theme-white body-tabs-shadow fixed-header fixed-sidebar fixed-footer">
                       <MainHeader/>
                       <div className="app-main">
                              <ChooseTempalte/>
                       </div>
                    </div>
                 </body>
          )
      }
}

export default Home;
