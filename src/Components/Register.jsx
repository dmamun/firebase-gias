import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthPrivider";

const Register = () => {
    const {signUp}=useContext(AuthContext);
    
    const handleSignUp=(e)=>{
        e.preventDefault()
        const email=e.target.email.value;
        const password=e.target.password.value;
        console.log(email,password);
        if(!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)){
            alert("Minimum eight characters, at least one letter and one number:")
        }else{
            signUp(email,password)
            .then(result=>{
                console.log(result.user);
            })

        }

       
           
            
        }
  return (
    <div>
      <div>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <div>
                <p className="text-xl flex justify-center">Register Page</p>
              </div>
              <form onSubmit={handleSignUp} className="card-body">

              <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="name"
                    name="name"
                    className="input input-bordered"
                    required
                  />
                </div>
           
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    name="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    name="password"
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Register</button>
                </div>
              </form>
              <div>
                <p>
                  Already have account?Please 
                  <Link to="/login">
                    <button className="btn btn-link">Login</button>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
