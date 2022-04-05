import React, { Component } from "react";
import { Consumer } from "../../context";
import { v4 as uuidv4 } from "uuid";
import TextInputGroup from "../layouts/TextInputGroup";

export default class AddContact extends Component {
    state = {
        name: "",
        email: "",
        fb: "",
        phone: "",
        errors: {}
    };

    //Controlled form
    onUpgrade = (e) => this.setState({ [e.target.name]: e.target.value });
    onSubmit = (dispatch, e) => {
        e.preventDefault(); //ngăn cản sự kiện submit làm reload page
        const { name, phone, fb, email} = this.state;
        if (name === '') {
            this.setState({errors: {name: 'bạn chưa nhập!'}});
            return;
        }
        if (email === '') {
            this.setState({errors: {email: 'bạn chưa nhập Email!'}});
            return;
        }
        if (phone === '') {
            this.setState({errors: {phone: 'bạn chưa nhập Phone'}});
            return;
        }
        if (fb === '') {
            this.setState({errors: {fb: 'bạn chưa nhập FB!'}});
            return;
        }
        const newContact = {
            id: uuidv4(),
            name,
            phone,
            email,
            fb,
        };
        console.log("newContact", newContact);
        dispatch({ type: "ADD_CONTACT", payload: newContact });

        //clear state
        this.setState({ //sau khi submit thì thuộc tính khởi tạo sẽ set lại về giá trị rỗng
            name: "",
            email: "",
            fb: "",
            phone: "",
            errors: {}
        })
    };

    //state để thay đổi input thì được gọi là controller components
    render() {
        const { name, email, fb, phone, errors } = this.state;
        return (
            <Consumer>
                {(value) => {
                    const { dispatch } = value;
                    return (
                        <div className="p-4 mx-auto" style={{ width: "800px" }}>
                            <div className="card" style={{ width: "50rem" }}>
                                <div className="text-center card-header" style={headerStyle}>
                                    <i className="fa-solid fa-plus"></i> Thêm địa chỉ...
                                </div>
                                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                                    {/* <div className="form-group">
                                        <label htmlFor="name"> Name </label>
                                        <input
                                            value={name}
                                            name="name"
                                            type="text"
                                            className="form-control form-control-lg"
                                            placeholder="text here: ..."
                                            onChange={this.onUpgrade}
                                        ></input>
                                    </div> */}
                                    <TextInputGroup
                                        value={name}
                                        name="name"
                                        type="text"
                                        placeholder="Nhập vào tên..."
                                        onChange={this.onUpgrade}
                                        label="name"
                                        error={errors.name}
                                    />
                                    <TextInputGroup
                                        value={email}
                                        name="email"
                                        type="email"
                                        placeholder="Mời bạn nhập email: ..."
                                        onChange={this.onUpgrade}
                                        label="email"
                                        error={errors.email}

                                    />
                                    <TextInputGroup
                                        value={phone}
                                        name="phone"
                                        type="text"
                                        placeholder="Nhập vào SĐT: ..."
                                        onChange={this.onUpgrade}
                                        label="phone"
                                        error={errors.phone}
                                    />
                                    <TextInputGroup
                                        value={fb}
                                        name="fb"
                                        type="url"
                                        placeholder="Mời bạn nhập FB: ..."
                                        onChange={this.onUpgrade}
                                        label="fb"
                                        error={errors.fb}
                                    />
                                    <input
                                        type="submit"
                                        value="Submit!"
                                        className="btn btn-primary mt-4 mb-4"
                                    ></input>
                                </form>
                            </div>
                        </div>
                    );
                }}
            </Consumer>
        );
    }
}

const headerStyle = {
    color: "green",
    fontSize: "30px",
};
