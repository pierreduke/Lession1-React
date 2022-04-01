import "./App.css";
import React, { Component } from "react";
import { Header, HeaderTwo, HeaderThree } from "./component/Header"; //không thể imprort {Header1}
                                                                        // đây là cú pháp khi export const
import Content from "./component/Header"; //là cú pháp import default
// import HeaderThree from "./component/Header.js";
import Contacts from "./component/Contacts";
import 'bootstrap/dist/css/bootstrap.min.css'

// function App() {
//// là hook
//   return (
//     <div className="App">
//         <a>
//           Learn React
//         </a>
//     </div>
//   );
// }

class App extends Component {
  //class component
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
        <a href="#">Learn React</a>
        {/* <Header></Header> */}
        {/* <Content></Content> */}
        <Header branding= 'بطرس' />
        <Contacts />
        {/* <Header branding="this is footer" /> */}
        {/* <HeaderTwo /> */}
        {/* <HeaderThree branding="this is footer 3" /> */}
        
      </div>
    );
  }
}

export default App;
