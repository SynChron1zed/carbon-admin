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
import Noenergy from './routes/DataEntry/Energy/Noenergy';
import GreenhouseGas from './routes/DataEntry/Industry/GreenhouseGas';
import Noindustry from './routes/DataEntry/Industry/Noindustry';
import Rice from './routes/DataEntry/Agriculture/Rice';
import Noagriculture from './routes/DataEntry/Agriculture/Noagriculture';
import Agricultural from './routes/DataEntry/Agriculture/Agricultural';
import AnimalGut from './routes/DataEntry/Agriculture/AnimalGut';
import AnimalWaste from './routes/DataEntry/Agriculture/AnimalWaste';
import Waste from './routes/DataEntry/Waste/Waste';
import Nowaste from './routes/DataEntry/Waste/Nowaste';
import Egwp from './routes/ListingResults/Energy/Egwp';
import EResults from './routes/ListingResults/Energy/EResults';
import Igwp from './routes/ListingResults/Industry/Igwp';
import IResults from './routes/ListingResults/Industry/IResults';
import Lgwp from './routes/ListingResults/Land/Lgwp';
import LResults from './routes/ListingResults/Land/LResults';
import Agwp from './routes/ListingResults/Agriculture/Agwp';
import AResults from './routes/ListingResults/Agriculture/AResults';
import Wgwp from './routes/ListingResults/Waste/Wgwp';
import WResults from './routes/ListingResults/Waste/WResults';
import Thearbor from './routes/DataEntry/Land/Thearbor';
import Scatteredwood from './routes/DataEntry/Land/Scatteredwood';
import Economicforest from './routes/DataEntry/Land/Economicforest';
import Theforest from './routes/DataEntry/Land/Theforest';



import Gasanalysis from './routes/Charts/Gasanalysis';
import Gasoverview from './routes/Charts/Gasoverview';
import Gasother from './routes/Charts/Gasother';



function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="indexpage" component={IndexPage} />
      <Route path="/" component={Layouty}>
        <Route path="system" component={System} />

        <Route path="ar1biological" component={Biological} />
        <Route path="ar2biomass" component={Biomass} />
        <Route path="ar3coalmine" component={Coalmine} />
        <Route path="ar4oilgas" component={Oilgas} />
        <Route path="ar5electric" component={Electric} />
        <Route path="ar6noenergy" component={Noenergy} />
        <Route path="creature" component={Creature} />

        <Route path="ae1greenhousegas" component={GreenhouseGas} />
        <Route path="ae2noindustry" component={Noindustry} />

        <Route path="aw1rice" component={Rice} />
        <Route path="aw2agricultural" component={Agricultural} />
        <Route path="aw3animalgut" component={AnimalGut} />
        <Route path="aw4animalwaste" component={AnimalWaste} />
        <Route path="aw5noagriculture" component={Noagriculture} />

        <Route path="aq1waste" component={Waste} />
        <Route path="aq2nowaste" component={Nowaste} />

        <Route path="at1thearbor" component={Thearbor} />
        <Route path="at2scatteredwood" component={Scatteredwood} />
        <Route path="at3economicforest" component={Economicforest} />
        <Route path="at4theforest" component={Theforest} />

        <Route path="br1egwp" component={Egwp} />
        <Route path="br2eresults" component={EResults} />

        <Route path="be2iresults" component={IResults} />
        <Route path="be1igwp" component={Igwp} />

        <Route path="bp2lresults" component={LResults} />
        <Route path="bp1lgwp" component={Lgwp} />

        <Route path="bw1agwp" component={Agwp} />
        <Route path="bw2aresults" component={AResults} />

        <Route path="bq1wgwp" component={Wgwp} />
        <Route path="bq2wresults" component={WResults} />


        <Route path="gq1gasanalysis" component={Gasanalysis} />
        <Route path="gq2gasoverview" component={Gasoverview} />
        <Route path="gq3gasother" component={Gasother} />

      </Route>
    </Router>
  );
}

export default RouterConfig;
