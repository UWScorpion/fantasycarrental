import React from 'react'
import Hero from '../components/Hero';
import Banner from '../components/Banner';
// import {Link} from 'react-router-dom';
import Footer from '../components/Footer';
import CarsContainer from '../components/CarsContainer';


const Cars = () => {
    return (
        <>
        <Hero hero="carsHero">
                <Banner title="Search cars">
                        {/* <Link to='/' className= "btn-primary">
                            Return
                        </Link> */}
                </Banner>
        </Hero>
        <CarsContainer/>
        <Footer/>
        </>
    )
}

export default Cars
