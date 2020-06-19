import React from 'react'
import Hero from '../components/Hero';
import Banner from '../components/Banner';
// import {Link} from 'react-router-dom';
import Footer from '../components/Footer';

export default function Testimonials() {
    return (
        
        <>
        <Hero hero="testimonialsHero">
                <Banner title="Testimonials">
                        {/* <Link to='/' className= "btn-primary">
                            Return
                        </Link> */}
                </Banner>
        </Hero>
        <Footer/>
        </>
        
    )
}
