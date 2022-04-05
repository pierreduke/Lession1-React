import "./App.css";
import React, { Component } from "react";
import { Header, HeaderTwo, HeaderThree } from "./component/layouts/Header"; //không thể imprort {Header1}
// đây là cú pháp khi export const
import Content from "./component/layouts/Header"; //là cú pháp import default
// import HeaderThree from "./component/Header.js";
import Contacts from "./component/contacts/Contacts";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "./context";
import AddContact from "./component/contacts/AddContact";
// import AddContactUncontroller from "./component/contacts/AddContactUncontroller";

class App extends Component {
  //class component
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Provider>  {/* sử dụng thẻ Provider để bọc App để áp dụng ContextApi */}
        <div className="App">
          <a href="#">Learn React</a>
          <Header branding="بطرس" />
          <AddContact />
          <Contacts />
        </div>
      </Provider>
    );
  }
}

export default App;
