import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthPrivider";

const Login = () => {
    const {googleSignUp,signIn}=useContext(AuthContext);
    //google SignIn
    const handleGoogle=()=>{
        googleSignUp()
        .then(result=>{
            console.log(result.user)
        })
        .catch(error=>{
            console.log(error.message)
        })
    }
    //email and password signIn

    const handleSignIn=(e)=>{
        e.preventDefault()
        const email=e.target.email.value;
        const password=e.target.password.value;
        console.log(email,password);
        signIn(email,password)
        .then(result=>{
            console.log(result.user);
        })
        .catch(error=>{
            console.log(error.message);
        })

    }
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
         
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div>
                <p className="text-xl flex justify-center">Login Page</p>
            </div>
            <form onSubmit={handleSignIn} className="card-body">
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
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <div>
                <p>New here? Please register<Link to="/register"><button className="btn btn-link">register</button></Link></p>
            </div>
            <div>
            <button onClick={handleGoogle} className="btn btn-link">Google</button>

            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
