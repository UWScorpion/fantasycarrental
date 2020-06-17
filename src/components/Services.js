import React, { Component } from 'react';
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa';
import Title from './Title';
export default class extends Component {
    state={
        services:[
            {
                icon:<FaCocktail/>,
                title:"Free",
                info:'Roadside Assistance'
            },
            {
                icon:<FaHiking/>,
                title:"Ganrantee",
                info:'Car Quality'
            },
            {
                icon:<FaShuttleVan/>,
                title:"free cocktails",
                info:'hbihdioshduindfui'
            },
            {
                icon:<FaBeer/>,
                title:"free cocktails",
                info:'hbihdioshduindfui'
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
