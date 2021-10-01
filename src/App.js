import { Component } from 'react';
import './App.css';
import Navbar from './Navbar';
import Color from './color.js';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
class App extends Component {
  render(){
    return (
      <Router>
        <Switch>
          <Route exact path="/navbar" component={Navbar}/>
          <Route exact path="/" component={Color}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
