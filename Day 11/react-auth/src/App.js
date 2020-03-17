import React, { Component } from 'react';
import { Route, Switch, withRouter} from "react-router-dom";
import './App.css';
import Home from './components/Home';
import Login from "./components/Login";
import Secret from './components/Secret';
import PrivateRoute from './components/utils/PrivateRoute';

class App extends Component {
  state = {
    userData: {
      email: "imad@code.in",
      password: "123456A"
    },
    isAuthenticated: false,
    currentUserInfo: {
      email: ""
    },
    alert: ""
  }
  authCheck = (data) => {
    if(data.email === this.state.userData.email 
        && 
      data.password === this.state.userData.password){
      this.setState({
        isAuthenticated: true,
        currentUserInfo:{
          email: data.email
        }
      }, ()=>{
        this.props.history.push("/secret")
      })
    }else{
      this.setState({
        alert: "Values Didn't Match."
      })
    }
  }
  render() {
    console.log(this.props)
    return (
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" exact render = {
                        (props)=><Login 
                                  {...props} 
                                  authCheck={this.authCheck}
                                  alert = {this.state.alert} 
                                  />} />
            <PrivateRoute 
                    path="/secret" 
                    exact component={Secret} 
                    isAuthenticated={this.state.isAuthenticated} 
            />
          </Switch>
        </div>
    );
  }
}

export default withRouter(App);
