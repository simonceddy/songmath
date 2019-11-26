import React from 'react';
import { Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Frequencies from './containers/Frequencies';
// import Settings from './containers/Settings';
import BpmBeatCalculator from './containers/BpmBeatCalculator';

function App() {
  return (
    <Layout>
      <Route path="/" exact>
        <Frequencies />
      </Route>
      <Route path="/bpm" exact>
        <BpmBeatCalculator />
      </Route>
    </Layout>
  );
}

export default App;
