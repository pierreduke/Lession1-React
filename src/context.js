//ContextAPI khắc phục nhược điểm:
//- việc để state ở Components không thể dùng được ở Header
//=> tạo ra một file cùng cấp với App.jsx (tên context.js)
import React, { Component } from "react";

const Context = React.createContext(); //khởi tạo create context

const reducer = (state, action) => {
    //trung chuyển và cập nhật lại những action => trả lại data tương ứng
    switch (action.type) {
        case "DELETE_CONTACT":
            return {
                ...state,
                contacts: state.contacts.filter(
                    (contact) => contact.id !== action.payload
                ),
            };
        case "ADD_CONTACT":
            return {
                ...state,
                contacts: [action.payload, ...state.contacts],
            };
        default:
            return state;
    }
};

export class Provider extends Component {
    //class provider kế thừa Component của React
    state = {
        //state này sẽ dùng được cho tất cả các components
        contacts: [
            {
                id: 1,
                name: "Pierre Duke",
                email: "phandoanduc05@gmail.com",
                phone: "0325828585",
                fb: "Phan Doãn Đức",
            },
            {
                id: 2,
                name: "Jacoub Hai",
                email: "jacoubhai@gmail.com",
                phone: "01225555443",
                fb: "يعقوب",
            },
            {
                id: 3,
                name: "CelebA",
                email: "test3@gmail.com",
                phone: "+8432455555",
                fb: "Le X",
            },
        ],

        dispatch: (action) => {
            this.setState((state) => reducer(state, action));
        },
    };
    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        );
    }
}

export const Consumer = Context.Consumer; //pass data sau khi hoàn thành context và là nơi share data
