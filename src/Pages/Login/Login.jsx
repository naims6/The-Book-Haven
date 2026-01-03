// import React, { use, useState } from "react";
// import { Link, Navigate, useLocation, useNavigate } from "react-router";
// import { AuthContext } from "../../Provider/AuthContex";
// import toast from "react-hot-toast";

// const Login = () => {
//   const { signInUser, signInWithGoogle } = use(AuthContext);
//   const [loading, setLoading] = useState(false);
//   const [goggleLoading, setGoggleLoading] = useState(false);
//   const [err, setErr] = useState();
//   const navigate = useNavigate();
//   const location = useLocation("");

//   // login user with email and password
//   const handleUserLogin = (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setErr("");

//     const form = e.target;
//     const email = form.email.value;
//     const password = form.password.value;

//     signInUser(email, password)
//       .then(() => {
//         toast.success("Logged in successfully!");
//         navigate(location.state ? location.state : "/");
//         setLoading(false);
//       })
//       .catch((error) => {
//         let errorMessage = "";

//         switch (error.code) {
//           case "auth/invalid-credential":
//           case "auth/wrong-password":
//             errorMessage = "Incorrect email or password.";
//             break;

//           case "auth/user-not-found":
//             errorMessage = "No account found with this email.";
//             break;

//           case "auth/too-many-requests":
//             errorMessage = "Too many failed attempts. Please try again later.";
//             break;

//           case "auth/invalid-email":
//             errorMessage = "Invalid email format.";
//             break;

//           default:
//             errorMessage = "Something went wrong. Please try again.";
//         }
//         setErr(errorMessage);
//         toast.error(errorMessage);
//         setLoading(false);
//       });
//   };

//   // handle user google login
//   const handleGoogleSignIn = () => {
//     setGoggleLoading(true);
//     signInWithGoogle().then(() => {
//       toast.success("Succesfully Loged in with Google");
//       navigate(`${location.state ? location.state : "/"}`);
//       setGoggleLoading(false);
//     });
//   };

//   return (
//     <div className="mt-16 h-[92vh] flex items-center justify-center">
//       <div className="max-w-md w-full bg-surface border border-border  p-8 rounded shadow-md mx-4">
//         <h2 className="text-2xl font-bold mb-6 text-center">
//           Login to Your Account
//         </h2>
//         {/* error message */}
//         <p className="text-red-500 text-center">{err}</p>

//         <form onSubmit={handleUserLogin} className="space-y-4">
//           {/* email */}
//           <div>
//             <label className="block text-sm font-medium ">Email</label>
//             <input
//               type="email"
//               className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="Enter your Email"
//               name="email"
//               required
//             />
//           </div>
//           {/* password */}

//           <div>
//             <label className="block text-sm font-medium ">Password</label>
//             <input
//               type="password"
//               className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="••••••••"
//               name="password"
//               required
//             />
//           </div>

//           <div className="flex items-center justify-between">
//             <label className="flex items-center">
//               <input type="checkbox" className="h-4 w-4 text-blue-600" />
//               <span className="ml-2 text-sm">Remember me</span>
//             </label>
//             <a
//               href="/forgot-password"
//               className="text-sm text-blue-600 hover:underline"
//             >
//               Forgot password?
//             </a>
//           </div>

//           <button
//             disabled={loading}
//             type="submit"
//             className={`${
//               loading ? "bg-blue-600/60" : "bg-blue-600 hover:bg-blue-700"
//             } w-full  text-white py-2 rounded-md transition cursor-pointer`}
//           >
//             {loading ? "Logging in..." : "Login"}
//           </button>

//           <button
//             onClick={handleGoogleSignIn}
//             type="button"
//             disabled={goggleLoading}
//             className={`${
//               goggleLoading && "opacity-60"
//             } w-full flex items-center justify-center border py-2 rounded-md transition cursor-pointer`}
//           >
//             <img
//               src="https://www.svgrepo.com/show/475656/google-color.svg"
//               alt="Google"
//               className="w-5 h-5 mr-2"
//             />
//             {goggleLoading ? "Logging..." : "Sign in with Google"}
//           </button>
//         </form>

//         <p className="mt-6 text-center text-sm text-naim">
//           Don't have an account?{" "}
//           <Link to="/auth/register" className="text-blue-600 hover:underline">
//             Register
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;


import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";

import toast from "react-hot-toast";
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  ArrowRight,
  Sparkles,
  Check
} from "lucide-react";
import { AuthContext } from "../../Provider/AuthContex";

const Login = () => {
  const { signInUser, signInWithGoogle } = use(AuthContext);
  const [loading, setLoading] = useState(false);
  const [goggleLoading, setGoggleLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [err, setErr] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Demo credentials
  const demoCredentials = {
    email: "naim@gmail.com",
    password: "Naim@123"
  };

  const fillDemoCredentials = () => {
    const form = document.forms[0];
    if (form) {
      form.email.value = demoCredentials.email;
      form.password.value = demoCredentials.password;
      setRememberMe(true);
    }
  };

  // Login user with email and password
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
        navigate(location.state ? location.state : "/", { replace: true });
      })
      .catch((error) => {
        let errorMessage = "";

        switch (error.code) {
          case "auth/invalid-credential":
          case "auth/wrong-password":
            errorMessage = "Incorrect email or password";
            break;
          case "auth/user-not-found":
            errorMessage = "No account found with this email";
            break;
          case "auth/too-many-requests":
            errorMessage = "Too many failed attempts. Try again later";
            break;
          case "auth/invalid-email":
            errorMessage = "Invalid email format";
            break;
          default:
            errorMessage = "Something went wrong. Please try again";
        }
        setErr(errorMessage);
        toast.error(errorMessage);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // Handle user google login
  const handleGoogleSignIn = () => {
    setGoggleLoading(true);
    signInWithGoogle()
      .then(() => {
        toast.success("Successfully logged in with Google");
        navigate(location.state ? location.state : "/", { replace: true });
      })
      .catch((error) => {
        console.error("Google sign-in error:", error);
        toast.error("Google sign-in failed");
      })
      .finally(() => {
        setGoggleLoading(false);
      });
  };

  return (
    <div className="mt-16 flex items-center justify-center p-4 pb-12"
      style={{ backgroundColor: 'var(--color-bg)' }}
    >
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2" style={{ color: 'var(--color-text-primary)' }}>
            Welcome Back
          </h1>
          <p style={{ color: 'var(--color-text-secondary)' }}>
            Sign in to your Book Haven account
          </p>
        </div>

        {/* Main Form Card */}
        <div className="p-8 rounded-2xl"
          style={{ 
            backgroundColor: 'var(--color-surface)',
            border: '1px solid var(--color-border)',
            boxShadow: '0 10px 40px rgba(0,0,0,0.1)'
          }}
        >
          {/* Demo Button */}
          <button
            onClick={fillDemoCredentials}
            className="w-full mb-6 p-4 rounded-xl flex items-center justify-center gap-3 transition-all hover:scale-[1.02]"
            style={{ 
              backgroundColor: 'var(--color-bg-muted)',
              border: '2px dashed var(--color-border)'
            }}
          >
            <div className="w-8 h-8 rounded-full flex items-center justify-center"
              style={{ 
                backgroundColor: 'var(--color-primary)',
                color: 'white'
              }}
            >
              <Sparkles className="w-4 h-4" />
            </div>
            <span className="font-medium" style={{ color: 'var(--color-text-primary)' }}>
              Use Demo Account
            </span>
          </button>

          {/* Error Message */}
          {err && (
            <div className="mb-6 p-3 rounded-lg text-center"
              style={{ 
                backgroundColor: 'rgba(239, 68, 68, 0.1)',
                border: '1px solid #f87171',
                color: '#ef4444'
              }}
            >
              {err}
            </div>
          )}

          <form onSubmit={handleUserLogin} className="space-y-5">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium mb-2"
                style={{ color: 'var(--color-text-primary)' }}
              >
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4"
                  style={{ color: 'var(--color-text-muted)' }}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  required
                  className="w-full pl-10 pr-4 py-3 rounded-lg focus:outline-none focus:ring-2"
                  style={{ 
                    backgroundColor: 'var(--color-bg)',
                    border: '1px solid var(--color-border)',
                    color: 'var(--color-text-primary)'
                  }}
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium mb-2"
                style={{ color: 'var(--color-text-primary)' }}
              >
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4"
                  style={{ color: 'var(--color-text-muted)' }}
                />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="••••••••"
                  required
                  className="w-full pl-10 pr-12 py-3 rounded-lg focus:outline-none focus:ring-2"
                  style={{ 
                    backgroundColor: 'var(--color-bg)',
                    border: '1px solid var(--color-border)',
                    color: 'var(--color-text-primary)'
                  }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2"
                  style={{ color: 'var(--color-text-muted)' }}
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <button
                type="button"
                onClick={() => setRememberMe(!rememberMe)}
                className="flex items-center gap-2"
              >
                <div className={`w-5 h-5 rounded flex items-center justify-center shrink-0 transition-all ${rememberMe ? 'scale-110' : ''}`}
                  style={{ 
                    backgroundColor: rememberMe ? 'var(--color-primary)' : 'var(--color-bg)',
                    border: `2px solid ${rememberMe ? 'var(--color-primary)' : 'var(--color-border)'}`,
                    color: 'white'
                  }}
                >
                  {rememberMe && <Check className="w-3 h-3" />}
                </div>
                <span className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                  Remember me
                </span>
              </button>
              <Link
                to="/forgot-password"
                className="text-sm font-medium hover:underline"
                style={{ color: 'var(--color-primary)' }}
              >
                Forgot password?
              </Link>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed"
              style={{ 
                backgroundColor: 'var(--color-primary)',
                color: 'white'
              }}
              onMouseOver={(e) => !loading && (e.currentTarget.style.backgroundColor = 'var(--color-secondary)')}
              onMouseOut={(e) => !loading && (e.currentTarget.style.backgroundColor = 'var(--color-primary)')}
            >
              {loading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Signing in...
                </>
              ) : (
                <>
                  Sign In
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t" style={{ borderColor: 'var(--color-border)' }}></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-3" style={{ backgroundColor: 'var(--color-surface)', color: 'var(--color-text-muted)' }}>
                  Or
                </span>
              </div>
            </div>

            {/* Google Sign In */}
            <button
              type="button"
              onClick={handleGoogleSignIn}
              disabled={goggleLoading}
              className="w-full py-3 rounded-lg font-medium flex items-center justify-center gap-3 transition-all hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed"
              style={{ 
                backgroundColor: 'var(--color-bg)',
                border: '1px solid var(--color-border)',
                color: 'var(--color-text-primary)'
              }}
            >
              {goggleLoading ? (
                <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <>
                  <img
                    src="https://www.svgrepo.com/show/475656/google-color.svg"
                    alt="Google"
                    className="w-5 h-5"
                  />
                  Continue with Google
                </>
              )}
            </button>
          </form>

          {/* Register Link */}
          <div className="text-center mt-6 pt-6 border-t" style={{ borderColor: 'var(--color-border)' }}>
            <p style={{ color: 'var(--color-text-secondary)' }}>
              Don't have an account?{" "}
              <Link 
                to="/auth/register" 
                className="font-medium hover:underline"
                style={{ color: 'var(--color-primary)' }}
              >
                Create account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;