import React from 'react';
import {Router, Route} from 'dva/router';
import IndexPage from './routes/IndexPage';
import System from './routes/System';


import Layouty from './components/Layouty';//菜单栏
import Biological from './routes/DataEntry/Energy/Biological';//化石燃料燃烧
import Electric from './routes/DataEntry/Energy/Electric';//电力
import Coalmine from './routes/DataEntry/Energy/Coalmine';//煤矿
import Biomass from './routes/DataEntry/Energy/Biomass';//生物质燃烧
import Oilgas from './routes/DataEntry/Energy/Oilgas';//油气逃逸
import Noenergy from './routes/DataEntry/Energy/Noenergy';//能源活动不确定性

import GreenhouseGas from './routes/DataEntry/Industry/GreenhouseGas';//温室气体排放
import Noindustry from './routes/DataEntry/Industry/Noindustry';//工业活动不确定性

import Rice from './routes/DataEntry/Agriculture/Rice';//稻田
import Noagriculture from './routes/DataEntry/Agriculture/Noagriculture';//农业不确定性
import Agricultural from './routes/DataEntry/Agriculture/Agricultural';//农用地
import AnimalGut from './routes/DataEntry/Agriculture/AnimalGut';//动物肠道
import AnimalWaste from './routes/DataEntry/Agriculture/AnimalWaste';//动物粪便

import Waste from './routes/DataEntry/Waste/Waste';//废弃物处理
import Nowaste from './routes/DataEntry/Waste/Nowaste';//废弃物不确定性

import Egwp from './routes/ListingResults/Energy/Egwp';//能源
import EResults from './routes/ListingResults/Energy/EResults';

import Igwp from './routes/ListingResults/Industry/Igwp';//工业
import IResults from './routes/ListingResults/Industry/IResults';

import Lgwp from './routes/ListingResults/Land/Lgwp';//土地
import LResults from './routes/ListingResults/Land/LResults';

import Agwp from './routes/ListingResults/Agriculture/Agwp';//农业
import AResults from './routes/ListingResults/Agriculture/AResults';

import Wgwp from './routes/ListingResults/Waste/Wgwp';//废弃物
import WResults from './routes/ListingResults/Waste/WResults';

import Thearbor from './routes/DataEntry/Land/Thearbor';//林业
import Scatteredwood from './routes/DataEntry/Land/Scatteredwood';
import Economicforest from './routes/DataEntry/Land/Economicforest';
import Theforest from './routes/DataEntry/Land/Theforest';


import Gasanalysis from './routes/Charts/Gasanalysis';//分析
import Gasoverview from './routes/Charts/Gasoverview';//总览
import Gasother from './routes/Charts/Gasother';//其它
import DataUpdate from './routes/Charts/DataUpdate'; //更新


import Login from './routes/Login/Login';//登陆

import Help from './routes/System/Help';//帮助中心


function RouterConfig({history}) {
    return (
        <Router history={history}>
            <Route path="indexpage" component={IndexPage}/>
            <Route path="/login" component={Login}/>
            <Route path="/" component={Layouty}>
                <Route path="system" component={System}/>

                <Route path="ar1biological" component={Biological}/>
                <Route path="ar2biomass" component={Biomass}/>
                <Route path="ar3coalmine" component={Coalmine}/>
                <Route path="ar4oilgas" component={Oilgas}/>
                <Route path="ar5electric" component={Electric}/>
                <Route path="ar6noenergy" component={Noenergy}/>

                <Route path="ae1greenhousegas" component={GreenhouseGas}/>
                <Route path="ae2noindustry" component={Noindustry}/>

                <Route path="aw1rice" component={Rice}/>
                <Route path="aw2agricultural" component={Agricultural}/>
                <Route path="aw3animalgut" component={AnimalGut}/>
                <Route path="aw4animalwaste" component={AnimalWaste}/>
                <Route path="aw5noagriculture" component={Noagriculture}/>

                <Route path="aq1waste" component={Waste}/>
                <Route path="aq2nowaste" component={Nowaste}/>

                <Route path="at1thearbor" component={Thearbor}/>
                <Route path="at2scatteredwood" component={Scatteredwood}/>
                <Route path="at3economicforest" component={Economicforest}/>
                <Route path="at4theforest" component={Theforest}/>

                <Route path="br1egwp" component={Egwp}/>
                <Route path="br2eresults" component={EResults}/>

                <Route path="be2iresults" component={IResults}/>
                <Route path="be1igwp" component={Igwp}/>

                <Route path="bp2lresults" component={LResults}/>
                <Route path="bp1lgwp" component={Lgwp}/>

                <Route path="bw1agwp" component={Agwp}/>
                <Route path="bw2aresults" component={AResults}/>

                <Route path="bq1wgwp" component={Wgwp}/>
                <Route path="bq2wresults" component={WResults}/>


                <Route path="gq1gasanalysis" component={Gasanalysis}/>
                <Route path="gq2gasoverview" component={Gasoverview}/>
                <Route path="gq3gasother" component={Gasother}/>
                <Route path="gq4dataupdater" component={DataUpdate}/>


                <Route path="kq1help" component={Help}/>

            </Route>
        </Router>
    );
}

export default RouterConfig;
