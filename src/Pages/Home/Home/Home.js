import React from 'react';
import Banner from '../Banner/Banner';
import Hire from '../Hire/Hire';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Testimonial></Testimonial>
            <Hire></Hire>
        </div>
    );
};

export default Home;