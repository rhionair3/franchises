import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import './index.css';
import BrambangLayout from './Mains/Layout';
import Beranda from './Modules/Beranda/index';
import Franchise from './Modules/Franchise/Screens/Index';
import Gerobak from './Modules/Gerobak/Screens/Index';
import MasterGerobak from './Modules/Gerobak/Screens/Master';
import DataKoki from './Modules/Koki/Screens/Index';
import DataTraining from './Modules/Training/Screens/Index';
import Login from "./Modules/Otentikasi/Screens/Index.js";
import * as serviceWorker from './serviceWorker';

const GetChildren = props => props.children;
let isAuthenticated = sessionStorage.getItem("isAuthenticated");
console.log(sessionStorage.getItem("currentToken"));
if(!sessionStorage.getItem("currentToken") || sessionStorage.getItem("currentToken") === null) {
  isAuthenticated = false;
}
if (isAuthenticated) {
const BrambangApp = () => (
    <BrowserRouter>
        <GetChildren>
            <BrambangLayout>
                <Route exact path="/" component={Beranda} />
                <Route exact path="/franchise" component={Franchise} />
                <Route exact path="/gerobak" component={Gerobak} />
                <Route exact path="/koki" component={DataKoki} />
                <Route exact path="/training" component={DataTraining} />
                <Route exact path="/master-gerobak" component={MasterGerobak} />
            </BrambangLayout>
        </GetChildren>
    </BrowserRouter>
);

render( <BrambangApp /> , document.getElementById('root'));
} else {
  const BrambangApp = () => (
      <BrowserRouter>
          <Route exact path="/" component={Login} />
      </BrowserRouter>
  );

  render( <BrambangApp /> , document.getElementById('root'));
 }


serviceWorker.unregister();
