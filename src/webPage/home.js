import { render } from '@testing-library/react';
import Nav from './nav.js';
import Connect from './connect.js';
import Feature from './features.js';
import Contact from './contact.js';
import Footer from './footer.js';
import React from 'react';
class Home extends React.Component{
    render(){
        return(
        <div>
            <Nav/>
            <Connect/>
            <Feature/>
            <Contact/>
            <Footer/>
        </div>
        )
    }
}
export default Home