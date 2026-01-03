// import React, { use, useState } from "react";
// import { Link, Navigate, useNavigate } from "react-router";
// import { AuthContext } from "../../Provider/AuthContex";

// import { updateProfile } from "firebase/auth";
// import toast from "react-hot-toast";
// import Loading from "../Loading/Loading";

// const Register = () => {
//   // getting data from context
//   const { createUser, signInWithGoogle, loading } = use(AuthContext);
//   const [loginLoading, setLoginLoading] = useState(false);
//   const [goggleLoading, setGoggleLoading] = useState(false);

//   const [err, setErr] = useState();
//   const navigate = useNavigate();

//   // handle user creating account
//   const handleUserCreateAccount = (e) => {
//     e.preventDefault();
//     setLoginLoading(true);
//     setErr("");

//     const form = e.target;
//     const displayName = form.name.value.trim();
//     const photoURL = form.photoURL.value.trim();
//     const email = form.email.value.trim();
//     const password = form.password.value;
//     const terms = form.terms.checked;

//     // password pattern regex
//     const passwordPattern = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;

//     // password length check
//     if (password.length < 6) {
//       const msg = "Password must be at least 6 characters long.";
//       toast.error(msg);
//       setErr(msg);
//       setLoginLoading(false);
//       return;
//     }

//     // password uppercase & lowercase check
//     if (!passwordPattern.test(password)) {
//       const msg =
//         "Password must contain at least 1 uppercase and 1 lowercase letter.";
//       toast.error(msg);
//       setErr(msg);
//       setLoginLoading(false);
//       return;
//     }

//     // terms & condition check
//     if (!terms) {
//       const msg = "Please accept the Terms & Conditions.";
//       toast.error(msg);
//       setErr(msg);
//       setLoginLoading(false);
//       return;
//     }

//     // create account
//     createUser(email, password)
//       .then((credential) => {
//         // update profile
//         updateProfile(credential.user, {
//           displayName,
//           photoURL,
//         })
//           .then(() => {
//             toast.success("Account created successfully!");
//             navigate("/");
//             setLoginLoading(false);
//           })
//           .catch(() => {
//             toast.error("Failed to update profile. Please try again.");
//             setErr("Failed to update profile. Please try again.");
//           });
//       })
//       .catch((error) => {
//         let customMessage = "";

//         switch (error.code) {
//           case "auth/email-already-in-use":
//             customMessage = "This email is already registered.";
//             break;

//           case "auth/invalid-email":
//             customMessage = "Please enter a valid email address.";
//             break;

//           case "auth/weak-password":
//             customMessage = "Your password is too weak. Try a stronger one.";
//             break;

//           case "auth/operation-not-allowed":
//             customMessage = "Email/password sign-up is not enabled.";
//             break;

//           default:
//             customMessage = "Something went wrong. Please try again.";
//         }

//         toast.error(customMessage);
//         setErr(customMessage);
//         setLoginLoading(false);
//       });
//   };

//   if (loading) {
//     return <Loading />;
//   }

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
//       <div className="max-w-md w-full bg-surface border border-border p-8 rounded shadow-md mx-4">
//         <h2 className="text-2xl font-bold mb-6 text-center">
//           Register Your Account
//         </h2>
//         {/* error message */}
//         <p className="text-red-500 text-center">{err}</p>

//         <form onSubmit={handleUserCreateAccount} className="space-y-4">
//           {/* name */}
//           <div>
//             <label className="block text-sm font-medium ">Full Name</label>
//             <input
//               type="text"
//               className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="Enter your Name"
//               name="name"
//               required
//             />
//           </div>
//           {/* photo Url */}
//           <div>
//             <label className="block text-sm font-medium ">Photo URL</label>
//             <input
//               type="url"
//               className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="Photo Url"
//               name="photoURL"
//               required
//             />
//           </div>
//           {/* email */}
//           <div>
//             <label className="block text-sm font-medium ">Email</label>
//             <input
//               type="email"
//               className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="Enter your email"
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
//               <input
//                 type="checkbox"
//                 name="terms"
//                 className="h-4 w-4 text-blue-600"
//               />
//               <span className="ml-2 text-sm">Accept Terms & Condition</span>
//             </label>
//           </div>

//           <button
//             disabled={loginLoading}
//             type="submit"
//             className={`${
//               loginLoading ? "bg-blue-600/60" : "bg-blue-600 hover:bg-blue-700"
//             } w-full  text-white py-2 rounded-md transition cursor-pointer`}
//           >
//             {loginLoading ? "Registering..." : "Register"}
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
//           Already have an account?{" "}
//           <Link to="/auth/login" className="text-blue-600 hover:underline">
//             Login
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Register;


import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../Provider/AuthContex";
import { updateProfile } from "firebase/auth";
import toast from "react-hot-toast";
import Loading from "../Loading/Loading";
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  User,
  Image,
  Check,
  ArrowRight,
  Sparkles
} from "lucide-react";

const Register = () => {
const { createUser, signInWithGoogle, loading } = use(AuthContext);
  const [loginLoading, setLoginLoading] = useState(false);
  const [goggleLoading, setGoggleLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [err, setErr] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const navigate = useNavigate();

  // Demo credentials for quick testing
  const demoCredentials = {
    name: "Naim Sorker",
    photoURL: "https://api.dicebear.com/7.x/avataaars/svg?seed=Demo",
    email: "naim3@gmail.com",
    password: "Naim@123"
  };

  const fillDemoCredentials = () => {
    const form = document.forms[0];
    if (form) {
      form.name.value = demoCredentials.name;
      form.photoURL.value = demoCredentials.photoURL;
      form.email.value = demoCredentials.email;
      form.password.value = demoCredentials.password;
      setAcceptedTerms(true);
    }
  };

  const validateForm = (data) => {
    if (!data.name.trim()) return "Full name is required";
    if (data.name.length < 2) return "Name must be at least 2 characters";
    
    if (!data.photoURL.trim()) return "Photo URL is required";
    if (!/^https?:\/\/.+/.test(data.photoURL)) return "Please enter a valid URL";
    
    if (!data.email.trim()) return "Email is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) return "Invalid email address";
    
    if (!data.password) return "Password is required";
    if (data.password.length < 6) return "Password must be at least 6 characters";
    if (!/(?=.*[A-Z])(?=.*[a-z])/.test(data.password)) return "Password must contain uppercase and lowercase letters";
    
    if (!acceptedTerms) return "Please accept the terms and conditions";
    
    return "";
  };

  const handleUserCreateAccount = (e) => {
    e.preventDefault();
    setLoginLoading(true);
    setErr("");

    const form = e.target;
    const formData = {
      name: form.name.value.trim(),
      photoURL: form.photoURL.value.trim(),
      email: form.email.value.trim(),
      password: form.password.value
    };

    // Validate form
    const validationError = validateForm(formData);
    if (validationError) {
      setErr(validationError);
      toast.error(validationError);
      setLoginLoading(false);
      return;
    }

    // Create account
    createUser(formData.email, formData.password)
      .then((credential) => {
        // Update profile
        updateProfile(credential.user, {
          displayName: formData.name,
          photoURL: formData.photoURL,
        })
          .then(() => {
            toast.success("Account created successfully!");
            navigate("/", { replace: true });
          })
          .catch((error) => {
            console.error("Profile update error:", error);
            toast.error("Account created but profile update failed");
          })
          .finally(() => {
            setLoginLoading(false);
          });
      })
      .catch((error) => {
        let customMessage = "";
        switch (error.code) {
          case "auth/email-already-in-use":
            customMessage = "This email is already registered";
            break;
          case "auth/invalid-email":
            customMessage = "Invalid email address";
            break;
          case "auth/weak-password":
            customMessage = "Password is too weak";
            break;
          case "auth/operation-not-allowed":
            customMessage = "Email/password sign-up is not enabled";
            break;
          default:
            customMessage = "Something went wrong. Please try again";
        }
        setErr(customMessage);
        toast.error(customMessage);
        setLoginLoading(false);
      });
  };

  const handleGoogleSignIn = () => {
    setGoggleLoading(true);
    signInWithGoogle()
      .then(() => {
        toast.success("Successfully logged in with Google");
        navigate("/", { replace: true });
      })
      .catch(() => {
        toast.error("Google sign-in failed");
      })
      .finally(() => {
        setGoggleLoading(false);
      });
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="flex items-center justify-center p-4 mt-16 pb-12"
      style={{ backgroundColor: 'var(--color-bg)' }}
    >
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2" style={{ color: 'var(--color-text-primary)' }}>
            Create Account
          </h1>
          <p style={{ color: 'var(--color-text-secondary)' }}>
            Join The Book Haven community
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
              Use Demo Credentials
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

          <form onSubmit={handleUserCreateAccount} className="space-y-5">
            {/* Name Field */}
            <div>
              <label className="block text-sm font-medium mb-2"
                style={{ color: 'var(--color-text-primary)' }}
              >
                Full Name
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4"
                  style={{ color: 'var(--color-text-muted)' }}
                />
                <input
                  type="text"
                  name="name"
                  placeholder="John Doe"
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

            {/* Photo URL */}
            <div>
              <label className="block text-sm font-medium mb-2"
                style={{ color: 'var(--color-text-primary)' }}
              >
                Profile Photo URL
              </label>
              <div className="relative">
                <Image className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4"
                  style={{ color: 'var(--color-text-muted)' }}
                />
                <input
                  type="url"
                  name="photoURL"
                  placeholder="https://example.com/photo.jpg"
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
              <div className="mt-2 text-xs" style={{ color: 'var(--color-text-muted)' }}>
                • At least 6 characters • Uppercase & lowercase
              </div>
            </div>

            {/* Terms Checkbox */}
            <div className="flex items-start gap-3">
              <button
                type="button"
                onClick={() => setAcceptedTerms(!acceptedTerms)}
                className={`w-5 h-5 rounded flex items-center justify-center flex-shrink-0 transition-all ${acceptedTerms ? 'scale-110' : ''}`}
                style={{ 
                  backgroundColor: acceptedTerms ? 'var(--color-primary)' : 'var(--color-bg)',
                  border: `2px solid ${acceptedTerms ? 'var(--color-primary)' : 'var(--color-border)'}`,
                  color: 'white'
                }}
              >
                {acceptedTerms && <Check className="w-3 h-3" />}
              </button>
              <label className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                I agree to the{" "}
                <Link to="/terms" className="font-medium hover:underline" style={{ color: 'var(--color-primary)' }}>
                  Terms
                </Link>{" "}
                and{" "}
                <Link to="/privacy" className="font-medium hover:underline" style={{ color: 'var(--color-primary)' }}>
                  Privacy Policy
                </Link>
              </label>
            </div>

            {/* Register Button */}
            <button
              type="submit"
              disabled={loginLoading}
              className="w-full py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed"
              style={{ 
                backgroundColor: 'var(--color-primary)',
                color: 'white'
              }}
              onMouseOver={(e) => !loginLoading && (e.currentTarget.style.backgroundColor = 'var(--color-secondary)')}
              onMouseOut={(e) => !loginLoading && (e.currentTarget.style.backgroundColor = 'var(--color-primary)')}
            >
              {loginLoading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Creating Account...
                </>
              ) : (
                <>
                  Create Account
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

          {/* Login Link */}
          <div className="text-center mt-6 pt-6 border-t" style={{ borderColor: 'var(--color-border)' }}>
            <p style={{ color: 'var(--color-text-secondary)' }}>
              Already have an account?{" "}
              <Link 
                to="/auth/login" 
                className="font-medium hover:underline"
                style={{ color: 'var(--color-primary)' }}
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;