import React from 'react'
import {FaInstagram, FaTwitter, FaFacebookSquare} from 'react-icons/fa';

export default function Footer() {
    return (
        <div className="footer">
            <>
            <h6>Connect with us <span className = "footericon"> <FaInstagram/> <FaTwitter/> <FaFacebookSquare/></span></h6>
            <p>© Copyright 2020 Fantasy</p>
            </>
        </div>
    )
}
