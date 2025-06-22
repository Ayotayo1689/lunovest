import { useApiPost } from "@/hooks/useApi";
import { AlertCircle, CheckCircle, Loader2, Wallet } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthModal = ({ type, onClose }) => {
  const { post } = useApiPost();

  const [activeTab, setActiveTab] = useState(type || "login");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  // Form states
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const [signupForm, setSignupForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  // Update activeTab when type prop changes
  useEffect(() => {
    if (type) {
      setActiveTab(type);
    }
  }, [type]);

  if (!type) return null;

  const handleLoginInputChange = (e) => {
    console.log(e.target.value);

    const { name, value } = e.target;
    setLoginForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSignupInputChange = (e) => {
    const { name, value } = e.target;
    setSignupForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    // Basic validation
    const {
      firstName,
      lastName,
      email,
      phoneNumber,
      password,
      confirmPassword,
    } = signupForm;

    if (
      !firstName ||
      !lastName ||
      !email ||
      !phoneNumber ||
      !password ||
      !confirmPassword
    ) {
      setError("Please fill in all fields");
      setLoading(false);
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters long");
      setLoading(false);
      return;
    }

    // Format phone number
    let formattedPhone = phoneNumber.replace(/\D/g, "");
    if (!formattedPhone.startsWith("1") && formattedPhone.length === 10) {
      formattedPhone = "+1" + formattedPhone;
    } else if (!formattedPhone.startsWith("+")) {
      formattedPhone = "+" + formattedPhone;
    }

    try {
      const response = await post("auth/signup", {
        firstName,
        lastName,
        email,
        phoneNumber: formattedPhone,
        password,
        confirmPassword,
      });
    

      if (response.success === false) {
        setError(response.mesage);
      } else if (response.success === true) {
        setSuccess("Account created successfully! Please login to continue.");

        // Clear signup form
        setSignupForm({
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          password: "",
          confirmPassword: "",
        });

        // Switch to login tab after a short delay
        setTimeout(() => {
          setActiveTab("login");
          setError("");
          setSuccess("");
        }, 1500);
      }
    } catch (err) {
      console.error("Signup error:", err);
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    // Basic validation
    if (!loginForm.email || !loginForm.password) {
      setError("Please fill in all fields");
      setLoading(false);
      return;
    }

    try {
      const response = await post(
        "auth/login",
        {
          email: loginForm.email,
          password: loginForm.password,
        },
        true
      );
      console.log(response);

      if (response.success !== true) {
        if (error.type === "INVALID_CREDENTIALS") {
          setError("Invalid email or password. Please check your credentials.");
        } else {
          setError(response.message || "Login failed. Please try again.");
        }
      } else if (response.success) {
        setSuccess("Login successful! Redirecting to dashboard...");
        localStorage.setItem("userData", JSON.stringify(response.data));
        // Clear form
        setLoginForm({ email: "", password: "" });

        // Close modal and navigate after a short delay
        setTimeout(() => {
          setActiveTab(null);
          navigate("/dashboard");
        }, 1500);
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (activeTab === "login") {
      handleLogin(e);
    } else {
      handleSignup(e);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-md mx-4 bg-gradient-to-br from-slate-900 to-purple-900/50 border border-purple-500/30 backdrop-blur-sm rounded-lg shadow-xl">
        {/* Header */}
        <div className="p-6 pb-4">
          <h2 className="text-white text-center text-2xl flex items-center justify-center gap-2">
            <Wallet className="h-6 w-6 text-purple-400" />
            Welcome to LunoVest
          </h2>
        </div>

        <div className="px-6 pb-6">
          {/* Tab Navigation */}
          <div className="grid grid-cols-2 bg-gray-800/50 rounded-lg p-1 mb-6">
            <button
              type="button"
              onClick={() => setActiveTab("login")}
              className={`py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                activeTab === "login"
                  ? "bg-purple-600 text-white"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              Login
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("signup")}
              className={`py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                activeTab === "signup"
                  ? "bg-purple-600 text-white"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              Sign Up
            </button>
          </div>

          {/* Error/Success Messages */}
          {error && (
            <div className="mb-4 bg-red-900/20 border border-red-500/30 text-red-300 p-3 rounded-lg flex items-center gap-2">
              <AlertCircle className="h-4 w-4" />
              <span className="text-sm">{error}</span>
            </div>
          )}

          {success && (
            <div className="mb-4 bg-green-900/20 border border-green-500/30 text-green-300 p-3 rounded-lg flex items-center gap-2">
              <CheckCircle className="h-4 w-4" />
              <span className="text-sm">{success}</span>
            </div>
          )}

          {/* Login Form */}
          {activeTab === "login" && (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label
                  htmlFor="loginEmail"
                  className="block text-sm font-medium text-gray-300"
                >
                  Email
                </label>
                <input
                  id="loginEmail"
                  name="email"
                  value={loginForm.email}
                  onChange={handleLoginInputChange}
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 bg-gray-800/50 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  required
                  disabled={loading}
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="loginPassword"
                  className="block text-sm font-medium text-gray-300"
                >
                  Password
                </label>
                <input
                  id="loginPassword"
                  name="password"
                  value={loginForm.password}
                  onChange={handleLoginInputChange}
                  type="password"
                  placeholder="Enter your password"
                  className="w-full px-3 py-2 bg-gray-800/50 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  required
                  disabled={loading}
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full py-2 px-4 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-medium rounded-md transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Logging in...
                  </>
                ) : (
                  "Login to Dashboard"
                )}
              </button>
              <p className="text-center text-sm text-gray-400">
                Don't have an account?{" "}
                <button
                  type="button"
                  className="text-purple-400 hover:text-purple-300 transition-colors"
                  onClick={() => setActiveTab("signup")}
                  disabled={loading}
                >
                  Sign up here
                </button>
              </p>
            </form>
          )}

          {/* Signup Form */}
          {activeTab === "signup" && (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-300"
                  >
                    First Name
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    value={signupForm.firstName}
                    onChange={handleSignupInputChange}
                    placeholder="John"
                    className="w-full px-3 py-2 bg-gray-800/50 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    required
                    disabled={loading}
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-300"
                  >
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    value={signupForm.lastName}
                    onChange={handleSignupInputChange}
                    placeholder="Doe"
                    className="w-full px-3 py-2 bg-gray-800/50 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    required
                    disabled={loading}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="signupEmail"
                  className="block text-sm font-medium text-gray-300"
                >
                  Email
                </label>
                <input
                  id="signupEmail"
                  name="email"
                  value={signupForm.email}
                  onChange={handleSignupInputChange}
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 bg-gray-800/50 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  required
                  disabled={loading}
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="phoneNumber"
                  className="block text-sm font-medium text-gray-300"
                >
                  Phone Number
                </label>
                <input
                  id="phoneNumber"
                  name="phoneNumber"
                  value={signupForm.phoneNumber}
                  onChange={handleSignupInputChange}
                  type="tel"
                  placeholder="+1234567890"
                  className="w-full px-3 py-2 bg-gray-800/50 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  required
                  disabled={loading}
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="signupPassword"
                  className="block text-sm font-medium text-gray-300"
                >
                  Password
                </label>
                <input
                  id="signupPassword"
                  name="password"
                  value={signupForm.password}
                  onChange={handleSignupInputChange}
                  type="password"
                  placeholder="Create a strong password"
                  className="w-full px-3 py-2 bg-gray-800/50 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  required
                  disabled={loading}
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium text-gray-300"
                >
                  Confirm Password
                </label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  value={signupForm.confirmPassword}
                  onChange={handleSignupInputChange}
                  type="password"
                  placeholder="Confirm your password"
                  className="w-full px-3 py-2 bg-gray-800/50 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  required
                  disabled={loading}
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full py-2 px-4 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-medium rounded-md transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Creating Account...
                  </>
                ) : (
                  "Create Account & Start Investing"
                )}
              </button>
              <p className="text-center text-sm text-gray-400">
                Already have an account?{" "}
                <button
                  type="button"
                  className="text-purple-400 hover:text-purple-300 transition-colors"
                  onClick={() => setActiveTab("login")}
                  disabled={loading}
                >
                  Login here
                </button>
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
