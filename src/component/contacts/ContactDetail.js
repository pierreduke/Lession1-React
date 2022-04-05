import React from 'react';
import { Consumer } from "../../context";
import './ContactDetail.css'



export default function ContactDetail(props) {
    const id = props.match.params.id;

    return (
        <Consumer>
            {value => {
                const { contacts } = value;
                const contact = contacts.filter((el) => el.id === id)[0]
                return <div>
                    <h1 className='mt-3'> Thông tin người dùng: </h1>
                    <div className='mx-auto mt-5'>
                        <p className='font-weight-bold'>Họ tên: {contact.name}</p>
                        <p className='font-weight-bold'>Địa chỉ Email: {contact.email}</p>
                        <p className='font-weight-bold'>SĐT: {contact.phone}</p>
                        <p className='font-weight-bold'>Địa chỉ FB: {contact.fb}</p>
                        <img className = 'img-decor' src='https://upload.wikimedia.org/wikipedia/commons/1/1a/About_to_Launch_%2826075320352%29.jpg'></img>
                    </div>
                </div>
            }
            }
        </Consumer>
    )
}
