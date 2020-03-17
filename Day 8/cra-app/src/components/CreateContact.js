import React, { Component } from 'react';
import PropTypes from "prop-types";

class CreateContact extends Component {
    state = {
        name: "",
        email: "",
        mobile: "",
        alert: ""
    }
    componentDidMount(){
        //api calls
        console.log("Component Did Mount From Create Contact");
    }
    componentDidUpdate(prevState, newState){
        console.log()
        console.log("Component Did Update from Create Contact");
    }
    componentWillUnmount(){
        console.log("Component Will Unmount from create contact")
    }
    onSubmit = (e) => {
        e.preventDefault()
        if (this.state.name === "") {
            return this.setState({
                alert: "Name Cannot Be Empty"
            })
        }
        if (this.state.email === "") {
            return this.setState({
                alert: "Email Cannot Be Empty"
            })
        }
        if (this.state.mobile === "") {
            return this.setState({
                alert: "Mobile Cannot Be Empty"
            })
        }
        const newContact = {
            name: this.state.name,
            email: this.state.email,
            mobile: this.state.mobile
        }
        //api
        this.props.addContact(newContact)
    }
    onInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    buttonMethod = (e) => {
        e.preventDefault();
        console.log("button clicked!")
    }
    render() {
        const { name, email, mobile, alert } = this.state;
        console.log("Render Method from create contact");
        return (
            <div>
                <h1>Create Contact</h1>
                {alert.length !== 0 ? <p style={{color: "red"}}>{alert}</p> : null}
                <form onSubmit={this.onSubmit}>
                    <input type="text"  name="name" onChange={this.onInputChange} value={name} placeholder="Enter Name" /><br />
                    <input type="email" name="email" onChange={this.onInputChange} value={email} placeholder="Enter Email" /><br />
                    <input type="tel" name="mobile" onChange={this.onInputChange} value={mobile} placeholder="Enter Mobile" /><br />
                    <button>Submit</button>
                    <button onClick={(e) => this.buttonMethod(e)}>Do something</button>
                </form>
            </div>
        )
    }
}

CreateContact.propType = {
    addContact: PropTypes.func
}

export default CreateContact