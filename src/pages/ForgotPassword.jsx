import { useState } from "react";
import { Link } from "react-router-dom";
import ScatteredText from "../components/ScatteredText";
import { toast, ToastContainer } from "react-toast";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const wave = () =>
    toast(
      "If an account with that email exists, you will receive a password reset link.",
      { backgroundColor: "gray", color: "black" }
    );

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await fakePasswordReset(email);
      wave();
    } catch (err) {
      setError("Failed to send reset link. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  const fakePasswordReset = (email) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email) {
          resolve();
        } else {
          reject("Failed");
        }
      }, 1000);
    });
  };

  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-black">
      <ToastContainer />
      <ScatteredText />
      <h1 className="text-6xl font-extrabold text-white">Shop.Co</h1>
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md z-50 mt-20">
        <h2 className="text-2xl font-bold text-center">Forgot Password</h2>
        <p className="text-sm text-gray-600 text-center mt-2">
          Enter your email to receive a password reset link.
        </p>
        {error && <p className="text-red-500 text-center mt-4">{error}</p>}
        <form onSubmit={handleResetPassword} className="mt-6">
          <div className="mb-4">
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none"
              required
            />
          </div>
          <button
            type="submit"
            className="mt-6 w-full bg-black text-white py-2 rounded-md hover:bg-gray-950 transition"
          >
            {loading ? "Sending..." : "Send Reset Link"}
          </button>
        </form>
        <div className="flex justify-between text-sm mt-6">
          <Link to="/login" className="text-blue-500">
            Back to Login
          </Link>
          <Link to="/signup" className="text-blue-500">
            Create Account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
