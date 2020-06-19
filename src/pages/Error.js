import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import Footer from '../components/Footer';
const Error = () => {
    return (
        <>
        <Hero>
            <Banner title="404" subtitle="Page not found">
                <Link to="/" className="btn-primary">
                    Return
                </Link>
            </Banner>
        </Hero>
        <Footer/>
        </>
    )
}

export default Error
