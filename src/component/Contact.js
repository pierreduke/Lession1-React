import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Contact.css";

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //mặc định sẽ ẩn list component
      onShow: false,
    };
    //tạo ràng buộc, khi đó this của function khi được bind
    //sẽ hoạt động như arrow function
  }
  onShowClick = () => {
    //sự kiện click để show/hide list dưới dạng arrow function
    this.setState({
      onShow: !this.state.onShow,
    });
  };

  onShowClickRegular(name, phone, email, fb, researchGate, xxx) {
    console.log("$name", name);
    console.log("$phone", phone);
    console.log("$email", email);
    console.log("$fb", fb);
    console.log("$researchGate", researchGate);
    console.log("$xxx", xxx);
    // console.log("this", this);
    //sự kiện click show/hide dưới dạng regular function
    this.setState({
      onShow: !this.state.onShow,
    });
  } //=> cần gán bind để function hoạt động được

  onDeleteClick = (id) => {
    //callback
    this.props.deleteClickHandler(id);
  };

  render() {
    const { name, email, phone, fb, researchGate, id } = this.props.contact;
    console.log('render', id);
    return (
      <div className="p-4 mx-auto" style={{ width: "350px" }}>
        <div className="card" style={{ width: "20rem" }}>
          <div className="text-center card-header">
            <h4 style={headingStyle}>
              {name + " "}
              {/*vị trí đặt nút click*/}
              <i className="fas fa-sort-down" onClick={this.onShowClick} style={{ cursor: "pointer" }}/>
              <i className="fas fa-times" onClick={this.onDeleteClick.bind(this, id)} style={{ cursor: "pointer", float: "right" }}
              />
            </h4>
          </div>
          {this.state.onShow && ( //thêm vào để kết hợp sự kiện click show/hide
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Email: {email}</li>
              <li className="list-group-item">Phone: {phone}</li>
              <li className="list-group-item">Facebook: {fb}</li>
            </ul>
          )}
        </div>
      </div>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
  deleteClickHandler: PropTypes.func.isRequired,
};

const headingStyle = {
  textTransform: "uppercase",
};
