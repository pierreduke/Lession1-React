import React, { Component } from "react";
import Contact from "./Contact";
import { Consumer } from "../../context";

export default class Contacts extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { contacts } = value;
          return (
            <React.Fragment> {/* thẻ này giảm dung lượng hơn thẻ div truyền thống*/}
              {contacts.map((contact) => (
                <Contact
                  contact={contact} // name = {contact.name} ...
                  key={contact.id}
                />
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}
