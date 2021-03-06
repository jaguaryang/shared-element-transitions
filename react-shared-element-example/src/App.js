import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Component1 from './components/Component1'
import Component2 from './components/Component2'

const Index = () => <div style={{textAlign: 'center', margin: '20px 0'}}><a href='component1'>Start</a></div>;

const AppRouter = () => (
  <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Index} />
        <Route path="/component1" component={Component1} />
        <Route path="/component2" component={Component2} />
      </Switch>
  </BrowserRouter>
);


export default AppRouter;
