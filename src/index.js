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

import * as serviceWorker from './serviceWorker';

const GetChildren = props => props.children;

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

serviceWorker.unregister();
