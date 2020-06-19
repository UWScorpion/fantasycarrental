import React, { Component } from 'react';
import {FaPhoneAlt, FaCheck, FaStickyNote, FaKey} from 'react-icons/fa';
import Title from './Title';
export default class extends Component {
    state={
        services:[
            {
                icon:<FaPhoneAlt/>,
                title:"Free",
                info:'Roadside Assistance'
            },
            {
                icon:<FaCheck/>,
                title:"Ganrantee",
                info:'Car Quality'
            },
            {
                icon:<FaStickyNote/>,
                title:"Best",
                info:'Insurance Policy'
            },
            {
                icon:<FaKey/>,
                title:"Hassle-free",
                info:'Return'
            },
        ]
    }
    render() {
        return (
            <section className="services"> 
                <Title title='services' />
                <div className="services-center">
                    {this.state.services.map((item, index) => {
                        return <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}
                </div>
            </section>
        )
    }
}
