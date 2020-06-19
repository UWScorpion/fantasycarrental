import React from 'react';
import './App.css';
import Home from './pages/Home';
import Cars from './pages/Cars';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import SingleCar from './pages/SingleCar';
import Error from './pages/Error';
import {Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar';


function App() {
  return (
    <div>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/cars" component={Cars}/>
        <Route exact path="/testimonials" component={Testimonials}/>
        <Route exact path="/contact" component={Contact}/>
        <Route exact path="/cars/:slug" component={SingleCar}/>
        <Route component={Error}/>
      </Switch>
    </div>
  );
}

export default App;
