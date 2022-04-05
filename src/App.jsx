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
//import router (được config trên trang home)
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./component/pages/About";
import ContactDetail from "./component/contacts/ContactDetail";
import NotFound from "./component/pages/NotFound";

class App extends Component {
    //class component
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Provider>
                {/* sử dụng thẻ Provider để bọc App để áp dụng ContextApi */}
                <Router>
                    <div className="App">
                        <Header branding="بطرس" />
                        <div className="container">
                            <Switch>
                                <Route exact path='/' component={Contacts}/>
                                <Route exact path='/contact/add' component={AddContact}/>
                                <Route exact path='/about' component={About} />
                                <Route exact path='/contact/:id' component={ContactDetail} />
                                <Route path='/' component={NotFound} />
                            </Switch>
                        </div>
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;
