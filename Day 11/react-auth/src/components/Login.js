import React, { Component } from 'react';

class Login extends Component {
    state = {
        email: "",
        password: ""
    }
    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    onSubmit = (e) => {
        e.preventDefault();
        const userData = {
            email: this.state.email,
            password: this.state.password
        }
        this.props.authCheck(userData);
    }
    render() {
        const { email, password } = this.state;
        const { alert } = this.props
        console.log(this.props)
        return (
            <div>
                <h1>Login</h1>
                {alert.length === 0 ? null 
                    : <span style={{ color: "red" }}>
                        {alert}
                    </span>}
                <form onSubmit={this.onSubmit}>
                    <label>Email</label><br />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={email}
                        onChange={this.onChange}
                    /><br />
                    <label>Password</label><br />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={password}
                        onChange={this.onChange}
                    /><br />
                    <button>Login</button>
                </form>
            </div>)
    }

}

export default Login;