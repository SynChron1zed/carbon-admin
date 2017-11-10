import React from 'react';
import { Router, Route } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Layouty from './components/Layouty';
import System from './routes/System';
import Biological from './routes/DataEntry/Energy/Biological';
import Creature from './routes/DataEntry/Energy/Creature';
import Electric from './routes/DataEntry/Energy/Electric';
import Coalmine from './routes/DataEntry/Energy/Coalmine';
import Biomass from './routes/DataEntry/Energy/Biomass';
import Oilgas from './routes/DataEntry/Energy/Oilgas';
import GreenhouseGas from './routes/DataEntry/Industry/GreenhouseGas';
import Rice from './routes/DataEntry/Agriculture/Rice';
import Agricultural from './routes/DataEntry/Agriculture/Agricultural';
import AnimalGut from './routes/DataEntry/Agriculture/AnimalGut';
import AnimalWaste from './routes/DataEntry/Agriculture/AnimalWaste';
import Waste from './routes/DataEntry/Waste/Waste';
import Egwp from './routes/ListingResults/Energy/Egwp';
import EResults from './routes/ListingResults/Energy/EResults';
import Igwp from './routes/ListingResults/Industry/Igwp';
import IResults from './routes/ListingResults/Industry/IResults';
import Agwp from './routes/ListingResults/Agriculture/Agwp';
import AResults from './routes/ListingResults/Agriculture/AResults';
import Wgwp from './routes/ListingResults/Waste/Wgwp';
import WResults from './routes/ListingResults/Waste/WResults';


function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="indexpage" component={IndexPage} />
      <Route path="/" component={Layouty}>
        <Route path="system" component={System} />
        <Route path="biological" component={Biological} />
        <Route path="creature" component={Creature} />
        <Route path="electric" component={Electric} />
        <Route path="coalmine" component={Coalmine} />
        <Route path="biomass" component={Biomass} />
        <Route path="oilgas" component={Oilgas} />
        <Route path="greenhousegas" component={GreenhouseGas} />
        <Route path="rice" component={Rice} />
        <Route path="agricultural" component={Agricultural} />
        <Route path="animalgut" component={AnimalGut} />
        <Route path="animalwaste" component={AnimalWaste} />
        <Route path="waste" component={Waste} />
        <Route path="egwp" component={Egwp} />
        <Route path="eresults" component={EResults} />
        <Route path="iresults" component={IResults} />
        <Route path="igwp" component={Igwp} />
        <Route path="agwp" component={Agwp} />
        <Route path="aresults" component={AResults} />
        <Route path="wgwp" component={Wgwp} />
        <Route path="wresults" component={WResults} />
      </Route>
    </Router>
  );
}

export default RouterConfig;
