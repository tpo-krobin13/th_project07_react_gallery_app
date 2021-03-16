import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import ImageManager from './components/ImageManager';
import PageNotFound from './components/PageNotFound';
import Home from './components/Home';
import config from './config';
import { Consumer } from './components/context/AppContext';


export default class App extends Component {  
  render() {

   return (
    <Consumer>
      { ({actions}) => {
        return (
          <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/search/:searchTerm" render={(value) => <ImageManager urlHistory={value.history} matchElem={value.match} loadImages={actions.searchPhotos} />} />
            <Route component={PageNotFound} />
          </Switch>
        </BrowserRouter>
          )
      }}
      </Consumer>
   )
  }
}
