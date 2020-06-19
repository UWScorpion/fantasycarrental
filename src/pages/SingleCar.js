import React, { Component } from 'react'
import defaultBcg from '../images/car-1.jpeg'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import Footer from '../components/Footer';
import {CarContext} from '../context'
import StyledHero from '../components/StyledHero'

export default class SingleCar extends Component {
    constructor(props){
        super(props)
        this.state={
            slug:this.props.match.params.slug,
            defaultBcg
        }

    }
    static contextType = CarContext;
    render() {
        const {getCar} = this.context;
        const car = getCar(this.state.slug);
        if (!car){
            return <div className = "error">
                <h3>No Such Car</h3>
                <Link to='/cars' className="btn-primary">
                    Back to Cars
                </Link>
            </div>
        }
        const {name, description, capacity, size, price, extras, smoking, pets, images} = car;
        const [mainImg,...defaultImg] = images;
        return (
            <>
            <StyledHero img={mainImg || this.state.defaultBcg}>
                <Banner title={`${name} car`}>
                    <Link to='/cars' className='btn-primary'>
                        Back to Cars
                    </Link>
                </Banner>
            </StyledHero>
                <section className="single-car">
                    <div className="single-car-images">
                        {defaultImg.map((item, index)=>{
                            return <img key={index} src={item} alt={name}/>
                        })}
                    </div>
                    <div className="single-car-info">
                            <article className="desc">
                                    <h3>details</h3>
                                    <p>{description}</p>
                            </article>
                            <article className="info">
                                <h3>info</h3>
                                <h6>price: ${price}/day</h6>
                                {/* <h6>size: ${size}SQFT</h6> */}
                                <h6>
                                    Max capacity:{
                                        capacity > 1 ?`${capacity} people`:`${capacity} person`
                                    }</h6>
                                <h6>{pets?"pets allowed" : "no pets allowed"}</h6>
                                <h6>{smoking && "Smoking Allowed"}</h6>
                            </article>
                    </div>
                </section>
                <section className="car-extras">
                        <h6>extras</h6>
                        <ul className="extras">
                            {extras.map((item, index)=>{
                                return <li key={index}>* {item}</li>
                            })}
                        </ul>
                </section>
                <Footer/>
            </>
        )
    }
}
