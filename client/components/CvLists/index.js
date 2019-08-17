import React, {Component, Fragment} from 'react';
import Footer from '../partials/Footer'
import SideBar from './sideBar'
import ListCvs from './listCvs'
// import '../../assets/js/main';

class Cvlists extends Component{
      render(){
          return (
                <Fragment>
                    <SideBar/>
                    <ListCvs/>
                </Fragment>
          )
      }
}

export default Cvlists;
