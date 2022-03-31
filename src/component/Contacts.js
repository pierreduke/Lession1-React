import React, { Component } from "react";
import Contact from "./Contact";

export default class Contacts extends Component {
  constructor(props) {
    super(props);
    //initial state của Contacts
    this.state = {
      contacts: [
        {
          id: 1,
          name: "Pierre Duke",
          email: "phandoanduc05@gmail.com",
          phone: "0325828585",
          fb: "Phan Doãn Đức",
          researchGate: "Duc Phan Doan",
        },
        {
          id: 2,
          name: "Jacoub Hai",
          email: "jacoubhai@gmail.com",
          phone: "01225555443",
          fb: "يعقوب",
          researchGate: "Jacoub Mahmoub",
        },
        {
          id: 3,
          name: "test3",
          email: "test3@gmail.com",
          phone: "+8432455555",
          fb: "Joseph Le",
          researchGate: "Joseph Boutros",
        },
      ],
    };
  }
  deleteContact = (id) => {
    console.log('id', id);

    console.log("this is father, delete contact");
    const { contacts } = this.state;
    const newContacts = contacts.filter((contact) => contact.id !== id);
    this.setState({
      contacts: newContacts,
    });
  };
  render() {
    const { contacts } = this.state; //setup component có những thuộc tính giống nhau
    return (
      <div>
        {contacts.map((contact) => (
          <Contact
            contact={contact}
            key={contact.id}
            deleteClickHandler={this.deleteContact}
          />
        ))}
      </div>
    );
  }
}
