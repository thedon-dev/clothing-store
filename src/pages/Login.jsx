import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ScatteredText from "../components/ScatteredText";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fakeLogin(email, password);
      console.log(response);
      alert("Login successful!");
      navigate("/");
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const fakeLogin = (email, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email === "user@example.com" && password === "password123") {
          resolve("Login Successful");
        } else {
          reject("Invalid email or password");
        }
      }, 1500);
    });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-black">
      <ScatteredText />
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md z-50">
        <h2 className="text-2xl font-bold text-center">
          Login to Your Account
        </h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleLogin} className="mt-6">
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
          <div className="mb-4">
            <label className="block text-sm font-medium mt-5">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none"
              required
            />
          </div>
          <div className="flex justify-between text-sm">
            <Link to="/forgot-password" className="text-blue-500">
              Forgot Password?
            </Link>
            <Link to="/signup" className="text-blue-500">
              Create Account
            </Link>
          </div>
          <button
            onClick={handleLogin}
            type="submit"
            className="mt-6 w-full bg-black text-white py-2 rounded-md hover:bg-gray-950 transition"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
