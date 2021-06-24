import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";
import Home from "./Component/Home";
import Stuff from "./Component/Stuff";
import Contact from "./Component/Contact";
import SignUp from "./SignUp";
import ChiTiet from "./Component/ChiTiet";
import a from './Component/a'
class Main extends Component {
    constructor(props) {
      super(props);
      
    }
    
    render() {

        
      return (
        <HashRouter>
          <div>
            <h1>Simple SPA</h1>
            <ul className="header">
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/stuff">Stuff</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
              <li><NavLink to="/signup">SignUp</NavLink></li>
            </ul>
            <div className="content">
              <Route exact path="/" component={Home}/>
              <Route path="/stuff" component={Stuff}/>
              <Route path="/contact" component={Contact}/>
              <Route path="/signup" component={SignUp}/>

              <Route path="/tintuc/:slug.:id.html" component={a}/>
            </div>
          </div>
        </HashRouter>
      );
    }
  }
 
export default Main;