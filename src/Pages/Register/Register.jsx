import React from "react";
import { Link } from "react-router";

const Register = () => {
  return (
    <div className="h-[96vh] flex items-center justify-center bg-gray-900 text-gray-200">
      <div className="max-w-md w-full bg-gray-800 text-base-200 p-8 rounded shadow">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Register Your Account
        </h2>

        <form className="space-y-4">
          {/* name */}
          <div>
            <label className="block text-sm font-medium ">Full Name</label>
            <input
              type="text"
              className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your Name"
            />
          </div>
          {/* email */}
          <div>
            <label className="block text-sm font-medium ">Photo URL</label>
            <input
              type="url"
              className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Photo Url"
            />
          </div>
          {/* email */}
          <div>
            <label className="block text-sm font-medium ">Email</label>
            <input
              type="email"
              className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>
          {/* password */}
          <div>
            <label className="block text-sm font-medium ">Password</label>
            <input
              type="password"
              className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="••••••••"
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input type="checkbox" className="h-4 w-4 text-blue-600" />
              <span className="ml-2 text-sm">Accept Terms & Condition</span>
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition cursor-pointer"
          >
            Register
          </button>

          <button
            type="button"
            className="w-full flex items-center justify-center border py-2 rounded-md transition cursor-pointer"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-5 h-5 mr-2"
            />
            Sign in with Google
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
