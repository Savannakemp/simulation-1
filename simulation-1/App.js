import React, { Component } from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import Header from './components/Header/'
import Shelfies from './components/Inventory'

class App extends Component {
    render() {
      return (
        
        <div>
          <Header></Header> 
          <Switch>
            <Route exact path="./components/inventory" component={inventoryList}/>
            <Route path="./components/inventory" component={inventoryList}/>
          </Switch>
        </div>
      );
    }
  }
  
  export default App;
  