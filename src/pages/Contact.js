import React from 'react'
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import Footer from '../components/Footer';

export default function Contact() {
    return (
        <>
        <Hero hero="contactHero">
                <Banner title="Contact">
                        {/* <Link to='/' className= "btn-primary">
                            Return
                        </Link> */}
                </Banner>
        </Hero>
        <Footer/>
        </>
    )
}
