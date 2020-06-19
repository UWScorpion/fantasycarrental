import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import {Link} from 'react-router-dom';
import Services from '../components/Services';
import FeaturedCars from '../components/FeaturedCars';



const Home = () => {
    return (
        <>
        <Hero>
            <Banner title="Fantasy Car Rental" subtitle="Luxury car rental starting at $299 per day">
                <Link to="/cars" className="btn-primary">
                 Search Cars
                </Link>
            </Banner>
        </Hero>
        <FeaturedCars/>
        <Services/>
        <Footer/>
        </>
    )
}

export default Home
