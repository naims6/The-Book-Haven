import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../Provider/AuthContex";
import toast from "react-hot-toast";

const Login = () => {
  const { signInUser, signInWithGoogle } = use(AuthContext);
  const [loading, setLoading] = useState(false);
  const [goggleLoading, setGoggleLoading] = useState(false);
  const [err, setErr] = useState();
  const navigate = useNavigate();
  const location = useLocation("");

  // login user with email and password
  const handleUserLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    setErr("");

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password)
      .then(() => {
        toast.success("Logged in successfully!");
        navigate(location.state ? location.state : "/");
        setLoading(false);
      })
      .catch((error) => {
        let errorMessage = "";

        switch (error.code) {
          case "auth/invalid-credential":
          case "auth/wrong-password":
            errorMessage = "Incorrect email or password.";
            break;

          case "auth/user-not-found":
            errorMessage = "No account found with this email.";
            break;

          case "auth/too-many-requests":
            errorMessage = "Too many failed attempts. Please try again later.";
            break;

          case "auth/invalid-email":
            errorMessage = "Invalid email format.";
            break;

          default:
            errorMessage = "Something went wrong. Please try again.";
        }
        setErr(errorMessage);
        toast.error(errorMessage);
        setLoading(false);
      });
  };

  // handle user google login
  const handleGoogleSignIn = () => {
    setGoggleLoading(true);
    signInWithGoogle().then(() => {
      toast.success("Succesfully Loged in with Google");
      navigate(`${location.state ? location.state : "/"}`);
      setGoggleLoading(false);
    });
  };

  return (
    <div className="mt-16 h-[92vh] flex items-center justify-center bg-gray-900 text-gray-200">
      <div className="max-w-md w-full bg-gray-800 text-base-200 p-8 rounded shadow mx-4">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Login to Your Account
        </h2>
        {/* error message */}
        <p className="text-red-500 text-center">{err}</p>

        <form onSubmit={handleUserLogin} className="space-y-4">
          {/* email */}
          <div>
            <label className="block text-sm font-medium ">Email</label>
            <input
              type="email"
              className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your Email"
              name="email"
              required
            />
          </div>
          {/* password */}

          <div>
            <label className="block text-sm font-medium ">Password</label>
            <input
              type="password"
              className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="••••••••"
              name="password"
              required
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input type="checkbox" className="h-4 w-4 text-blue-600" />
              <span className="ml-2 text-sm">Remember me</span>
            </label>
            <a
              href="/forgot-password"
              className="text-sm text-blue-600 hover:underline"
            >
              Forgot password?
            </a>
          </div>

          <button
            disabled={loading}
            type="submit"
            className={`${
              loading ? "bg-blue-600/60" : "bg-blue-600 hover:bg-blue-700"
            } w-full  text-white py-2 rounded-md transition cursor-pointer`}
          >
            {loading ? "Logging in..." : "Login"}
          </button>

          <button
            onClick={handleGoogleSignIn}
            type="button"
            disabled={goggleLoading}
            className={`${
              goggleLoading && "opacity-60"
            } w-full flex items-center justify-center border py-2 rounded-md transition cursor-pointer`}
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-5 h-5 mr-2"
            />
            {goggleLoading ? "Logging..." : "Sign in with Google"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-naim">
          Don't have an account?{" "}
          <Link to="/auth/register" className="text-blue-600 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
