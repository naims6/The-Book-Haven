import React, { use, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router";
import { AuthContext } from "../../Provider/AuthContex";

import { updateProfile } from "firebase/auth";
import toast from "react-hot-toast";
import Loading from "../Loading/Loading";

const Register = () => {
  // getting data from context
  const { user, createUser, signInWithGoogle, loading } = use(AuthContext);
  const [loginLoading, setLoginLoading] = useState(false);
  const [goggleLoading, setGoggleLoading] = useState(false);

  const [err, setErr] = useState();
  const navigate = useNavigate();

  // handle user creating account
  const handleUserCreateAccount = (e) => {
    e.preventDefault();
    setLoginLoading(true);
    setErr("");

    const form = e.target;
    const displayName = form.name.value.trim();
    const photoURL = form.photoURL.value.trim();
    const email = form.email.value.trim();
    const password = form.password.value;
    const terms = form.terms.checked;

    // password pattern regex
    const passwordPattern = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;

    // password length check
    if (password.length < 6) {
      const msg = "Password must be at least 6 characters long.";
      toast.error(msg);
      setErr(msg);
      setLoginLoading(false);
      return;
    }

    // password uppercase & lowercase check
    if (!passwordPattern.test(password)) {
      const msg =
        "Password must contain at least 1 uppercase and 1 lowercase letter.";
      toast.error(msg);
      setErr(msg);
      setLoginLoading(false);
      return;
    }

    // terms & condition check
    if (!terms) {
      const msg = "Please accept the Terms & Conditions.";
      toast.error(msg);
      setErr(msg);
      setLoginLoading(false);
      return;
    }

    // create account
    createUser(email, password)
      .then((credential) => {
        // update profile
        updateProfile(credential.user, {
          displayName,
          photoURL,
        })
          .then(() => {
            toast.success("Account created successfully!");
            navigate("/");
            setLoginLoading(false);
          })
          .catch(() => {
            toast.error("Failed to update profile. Please try again.");
            setErr("Failed to update profile. Please try again.");
          });
      })
      .catch((error) => {
        let customMessage = "";

        switch (error.code) {
          case "auth/email-already-in-use":
            customMessage = "This email is already registered.";
            break;

          case "auth/invalid-email":
            customMessage = "Please enter a valid email address.";
            break;

          case "auth/weak-password":
            customMessage = "Your password is too weak. Try a stronger one.";
            break;

          case "auth/operation-not-allowed":
            customMessage = "Email/password sign-up is not enabled.";
            break;

          default:
            customMessage = "Something went wrong. Please try again.";
        }

        toast.error(customMessage);
        setErr(customMessage);
        setLoginLoading(false);
      });
  };

  if (loading) {
    return <Loading />;
  }

  if (user) {
    return <Navigate to="/"></Navigate>;
  }

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
          Register Your Account
        </h2>
        {/* error message */}
        <p className="text-red-500 text-center">{err}</p>

        <form onSubmit={handleUserCreateAccount} className="space-y-4">
          {/* name */}
          <div>
            <label className="block text-sm font-medium ">Full Name</label>
            <input
              type="text"
              className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your Name"
              name="name"
              required
            />
          </div>
          {/* photo Url */}
          <div>
            <label className="block text-sm font-medium ">Photo URL</label>
            <input
              type="url"
              className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Photo Url"
              name="photoURL"
              required
            />
          </div>
          {/* email */}
          <div>
            <label className="block text-sm font-medium ">Email</label>
            <input
              type="email"
              className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
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
              <input
                type="checkbox"
                name="terms"
                className="h-4 w-4 text-blue-600"
              />
              <span className="ml-2 text-sm">Accept Terms & Condition</span>
            </label>
          </div>

          <button
            disabled={loginLoading}
            type="submit"
            className={`${
              loginLoading ? "bg-blue-600/60" : "bg-blue-600 hover:bg-blue-700"
            } w-full  text-white py-2 rounded-md transition cursor-pointer`}
          >
            {loginLoading ? "Registering..." : "Register"}
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
          Already have an account?{" "}
          <Link to="/auth/login" className="text-blue-600 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
