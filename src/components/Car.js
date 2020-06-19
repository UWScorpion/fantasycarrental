import React from 'react'
import {Link} from 'react-router-dom'
import defaultImg from '../images/car-1.jpeg'
import PropTypes from "prop-types";
import { CarConsumer } from '../context';
export default function car({car}) {
    const {name, slug, images, price} = car;

    return (
        <article className="car">
            <div className="img-container">
                <img src={images[0]||defaultImg} alt="single car"/>
                <div className="price-top">
                    <h6>${price}</h6>
                    <p>per day</p>
                </div>
                <Link to={`/cars/${slug}`} className="btn-primary car-link">Features</Link>
            </div>
    <p className="car-info">{name}</p>
        </article>
    )
}

CarConsumer.PropTypes = {
    car:PropTypes.shape({
        name:PropTypes.string.isRequired,
        slug:PropTypes.string.isRequired,
        images:PropTypes.arrayOf(PropTypes.string).isRequired,
        price:PropTypes.number.isRequired,
    })
}