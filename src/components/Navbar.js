import React, { Component } from 'react';
import logo from '../images/logo.png';
import {BsList} from 'react-icons/bs';
import {Link} from 'react-router-dom';


export default class Navbar extends Component {
    state={
        isOpen:false
    }
    handleToggle = () => {
        this.setState({isOpen: !this.state.isOpen})
    }
    render() {
        return (
            <nav className="navbar">
                <div className="nav-center">
                    <div className="nav-header"> 
                        <Link to="/">
                        <img src={logo} alt="Fantasy Car Rental" />
                        </Link>
                        <button type="button" className="nav-btn" onClick={this.handleToggle}>
                            <BsList className="nav-icon"/>
                        </button>
                    
                    </div>

                    { <ul className={this.state.isOpen?"nav-links show-nav":"nav-links"}>
                        <li>
                            <Link to="/">HOME</Link>
                        </li>
                        <li>
                            <Link to="/cars">CARS</Link>
                        </li>
                        <li>
                            <Link to="/testimonials">TESTIMONIALS</Link>
                        </li>
                        <li>
                            <Link to="/contact">CONTACT</Link>
                        </li>
                    </ul> }
                </div>
            </nav>
        )
    }
}
