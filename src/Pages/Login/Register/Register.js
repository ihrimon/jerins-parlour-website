import React from 'react';
import { Link } from 'react-router-dom';


const Register = () => {
    return (
        <div>
            <div className="w-25 bg-color mx-auto my-5 border-radius custom-shadow">
                <h4 className="theme-color pt-4">Create an Account</h4>
                <p><small>use social account</small></p>
                <div>
                    <button type="submit" className="btn btn-google text-light me-2">Google login</button>
                    <button type="submit" className="btn btn-success text-light ms-2">Github login</button>
                </div>
                <form action=" " className="w-75 mx-auto mt-3">
                    <p><small>or use your email account</small></p>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control border-bottom border-0 bg-transparent" id="floatingInput" placeholder="Your name here" required />
                        <label htmlFor="floatingInput">Name</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="email" className="form-control border-bottom border-0 bg-transparent" id="floatingInput" placeholder="name@example.com" required />
                        <label htmlFor="floatingInput">Email</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="password" className="form-control border-bottom border-0 bg-transparent" id="floatingPassword" placeholder="Password" required />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="password" className="form-control border-bottom border-0 bg-transparent" id="floatingPassword" placeholder="Password" required />
                        <label htmlFor="floatingPassword">Confirm Password</label>
                    </div>

                    <button type="submit" className="btn theme-btn px-5 text-light my-3">Submit</button>
                </form>
                <p className="pb-4">Already have an account? <Link to="/login" className="text-decoration-none theme-color fw-bold">Login</Link></p>
            </div>
        </div>
    );
};

export default Register;