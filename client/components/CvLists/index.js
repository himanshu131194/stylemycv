import React, {Component, Fragment, lazy, Suspense} from 'react';
import SideBar from './sideBar'
// import ListCvs from './listCvs'
const ListCvs = lazy(()=>import('./listCVs'))
// import '../../assets/js/main';

class Cvlists extends Component{
      render(){
          return (
                <Fragment>
                    <SideBar/>
                    <Suspense fallback={<div>Loading...</div>}>
                     <ListCvs/>
                    </Suspense>
                </Fragment>
          )
      }
}

export default Cvlists;
