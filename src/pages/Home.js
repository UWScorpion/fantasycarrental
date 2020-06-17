import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import Services from '../components/Services';
import FeaturedRooms from '../components/FeaturedRooms';



const Home = () => {
    return (
        <>
        <Hero>
            <Banner title="Fantasy Car Rental" subtitle="Luxury car rental starting at $299 per day">
                <Link to="/rooms" className="btn-primary">
                 Our Cars
                </Link>
            </Banner>
        </Hero>
        <FeaturedRooms/>
        <Services/>
        
        </>
    )
}

export default Home
