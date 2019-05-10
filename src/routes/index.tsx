import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from 'App';

export const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/cheatsheets/:cheatsheet" render={props => {
        console.log(props);
        return <App {...props}/>;
      }}/>
    </Switch>
  </BrowserRouter>
);
