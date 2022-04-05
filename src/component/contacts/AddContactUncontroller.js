import React, { Component } from 'react'

export default class AddContactUncontroller extends Component {
    //Uncontrolled form
    constructor(props) {
        super(props);
        this.nameInput = React.createRef();
        this.emailInput = React.createRef();
        this.phoneInput = React.createRef();
        this.fbInput = React.createRef();
        this.researchGateInput = React.createRef();
    }

    onSubmit = (e) => {
        e.preventDefault(); //ngăn cản sự kiện submit
        console.log('$state', this.state);
        const contact = {
            name: this.nameInput.current.value,
            email: this.emailInput.current.value,
            phone: this.phoneInput.current.value,
            fb: this.fbInput.current.value,
            researchGateInput: this.researchGateInput.current.value,
        }
    };

    static defaultProps = {
        name: "XXX",
        phone: "555-333-444",
        email: "duc.pd172486@sis.hust.edu.vn",
        fb: "Boutros",
        researchGate: "Duc-PD"
    }

    //state để thay đổi input thì được gọi là controller components
    render() {
        const { name, email, fb, phone, researchGate } = this.props;
        return (
            <div className="p-4 mx-auto" style={{ width: "800px" }}>
                <div className="card" style={{ width: "50rem" }}>
                    <div className="text-center card-header" style={headerStyle}>
                        <i className="fa-solid fa-plus"></i> Thêm địa chỉ...
                    </div>
                    <form>
                        <div className="form-group">
                            <label htmlFor="name"> Name </label>
                            <input
                                defaultValue={name}
                                name="name"
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="text here: ..."
                                onChange={this.onUpgrade}
                                ref={this.nameInput}
                            ></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email"> Email </label>
                            <input
                                defaultValue={email}
                                name="email"
                                type="email"
                                className="form-control form-control-lg"
                                placeholder="text email here: ..."
                                onChange={this.onUpgrade}
                                ref={this.emailInput}
                            ></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="fb"> FB </label>
                            <input
                                defaultValue={fb}
                                name="fb"
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="text fb here: ..."
                                onChange={this.onUpgrade}
                                ref={this.fbInput}
                            ></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone"> phone </label>
                            <input
                                defaultValue={phone}
                                name="phone"
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="text phone number here: ..."
                                onChange={this.onUpgrade}
                                ref={this.phoneInput}

                            ></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="researchGate"> RS </label>
                            <input
                                defaultValue={researchGate}
                                name="researchGate"
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="text research here: ..."
                                onChange={this.onUpgrade}
                                ref={this.researchGateInput}
                            ></input>
                        </div>
                        <input
                            type="submit"
                            value="Submit!"
                            className="btn btn-primary mt-4 mb-4"
                            onClick={this.onSubmit}
                        ></input>
                    </form>
                </div>
            </div>
        );
    }
}

const headerStyle = {
    color: "green",
    fontSize: "30px",
};