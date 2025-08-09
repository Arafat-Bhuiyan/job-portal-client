import Lottie from "lottie-react";
import registerLottieData from ".././../assets/lottie/register.json";
import { toast } from "react-toastify";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext/AuthContext";
import SocialLogin from "../shared/socialLogin";
import { useLocation, useNavigate } from "react-router-dom";

export const SignIn = () => {
  const location = useLocation();
  const navigate = useNavigate();
  console.log("in signin ", location);
  const from = location.state || "/";
  
  const { signInUser } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Email validation
    if (!emailRegex.test(email)) {
      return toast.error("Please enter a valid email address.");
    }

    signInUser(email, password)
      .then((result) => {
        const user = result.user;
        navigate(from);
        console.log(user);
      })
      .catch((error) => {
        console.log(error.message);
      });

    // If valid, proceed
    console.log("Email:", email);
    console.log("Password:", password);
    toast.success("Validation passed! Proceeding to login...");
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left w-96">
          <Lottie animationData={registerLottieData}></Lottie>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-5xl font-bold ml-8 mt-4">Login now!</h1>
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text mb-1">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                name="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text mb-1">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-info">Login</button>
            </div>
          </form>
          <SocialLogin />
        </div>
      </div>
    </div>
  );
};
