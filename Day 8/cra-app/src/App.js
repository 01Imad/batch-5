import React, {Component} from 'react';
import './App.css';

// import ChildernComp from "./components/ChildernComp";
import Contacts from "./components/Contacts";
import CreateContact from "./components/CreateContact";

class App extends Component {
  state = {
    contacts: [
      {
        name: "Imad",
        email: "i@imad.com",
        mobile: "9966996699"
      },
      {
        name: "Raj",
        email: "raj@gmail.com",
        mobile: "9963256321"
      },
      {
        name: "John",
        email: "john@j.com",
        mobile: "99666545"
      },
      {
        name: "Doe",
        email: "doe@d.com",
        mobile: "9966996699"
      }
    ],
    showCreateContact: false,
    showContacts: true
  } 

  deleteContact = (c) => {
    const newContacts = this.state.contacts
                      .filter((cont) => 
                        {
                          return c.email !== cont.email
                        })
    this.setState({
      contacts : newContacts
    })
  }

  showCreateContactForm = () => {
    this.setState({
      showCreateContact: true,
      showContacts: false
    })
  }

  createNewContact = (contact) => {
    this.setState({
      contacts: [...this.state.contacts, contact]
    })
    console.log(this.state)
  }

  showContactsFunc = () => {
    this.setState({
      showCreateContact: false,
      showContacts: true
    })
  }

  render() {
    const {createNewContact, deleteContact, showCreateContactForm, showContactsFunc} = this
    return (
      <div className="App">
        <h1>From Our React App</h1>
        <button 
            onClick={showCreateContactForm}
        >Create Contact</button>
        <button 
            onClick={showContactsFunc}
        >Show Contact</button>
        {/* <ChildernComp>
        <h1>To Children From App</h1>
        </ChildernComp> */}
        {this.state.showCreateContact ? <CreateContact addContact = {createNewContact}/> : null}
        {this.state.showContacts ? 
                  <Contacts 
                      data = {this.state.contacts} 
                      deleteContactFunc = {deleteContact}
                      someProp = "Hello"
                  /> 
                  : null}
        
      </div>
    );
  }
}

export default App;
