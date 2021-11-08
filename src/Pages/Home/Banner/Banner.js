import React from 'react';
import img from '../../../images/banner.png'

const Banner = () => {
    return (
        <div className="bg-color">
            <div className="container">
                <div className="d-flex justify-content-center align-items-center">
                    <div className="col-lg-6 col-12 text-start">
                        <h1 className="fw-bold w-75">BEAUTY SALON FOR EVERY WOMEN</h1>
                        <p className="w-75">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur corporis aspernatur natus obcaecati alias distinctio eius delectus veritatis tenetur rerum.</p>
                        <button className="btn theme-btn px-5 text-light">Get an Appointment</button>
                    </div>
                    <div className="col-lg-6 col-12">
                        <img src={img} className="img-fluid w-75" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;