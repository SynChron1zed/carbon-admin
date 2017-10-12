import React from 'react';
import { Router, Route } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Layouty from './components/Layouty';
import System from './routes/System';
import Biological from './routes/Biological';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="indexpage" component={IndexPage} />
      <Route path="/" component={Layouty}>
        <Route path="system" component={System} />
        <Route path="biological" component={Biological} />
      </Route>
    </Router>
  );
}

export default RouterConfig;
