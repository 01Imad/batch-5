import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./components/Home";

import About from "./components/About";

import Login from "./components/Login";

import User from "./components/User";

import Navbar from "./components/Navbar";

import Sidebar from './components/Sidebar';

import OnClick from "./components/OnClick";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <br />
        {/* <About />
        <Login /> */}
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/login" exact component={Login}></Route>
          <Route path="/about" exact component={About}></Route>
          <Route path="/user/:id" exact component={User}></Route>
          <Route path="/sidebar" component={Sidebar}></Route>
          <Route path="/onclick" component={OnClick}></Route>
          <Route path="*/" render={() => <h1>404 Not Found</h1>} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
