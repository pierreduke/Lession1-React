import React, { Component } from "react";
import PropTypes from "prop-types";

export const Header = class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-3">
          <div className="container">
            <div className="navbar-brand">{this.props.branding}</div>
            <div>
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <a href="/" className="nav-link"> HOME </a>
                  {/* href='/' là về trang chủ */}
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
};
export default class Content extends Component {
  render() {
    return (
      <div>
        {" "}
        <h1>This is Content</h1>
      </div>
    );
  }
}

export const HeaderTwo = (props) => {
  return <div>{props.branding}</div>;
};

export const HeaderThree = function HeaderThree(props) {
  return (
    <div>
      {" "}
      <h2 style={{ color: "red", fontSize: "45px" }}> {props.branding} </h2>
    </div>
  );
};

HeaderTwo.defaultProps = {
  branding: "Hello",
};

HeaderTwo.propTypes = {
  branding: PropTypes.string.isRequired,
};
