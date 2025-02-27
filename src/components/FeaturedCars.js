import React, { Component } from 'react'
import { CarContext } from "../context";
import Loading from './Loading';
import Car from './Car';
import Title from './Title';
export default class extends Component {
    static contextType = CarContext
    render() {
        let { loading, featuredCars: cars} = this.context;
        cars = cars.map(car =>{
            return <Car key={car.id} car={car}/>
        })
        
        return (
            <section className="featured-cars">
                <Title title="Monthly featured"/>
                <div className="featured-cars-center">
                    {loading?<Loading/>:cars}
                </div>
            </section>
        )
    }
}
