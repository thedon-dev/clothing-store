import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Header from "./components/Home/Header";
import Footer from "./components/Footer";
import LoginPage from "./pages/Login";
import SignUp from "./pages/SignUp";
import NavigationPointer from "./components/NavigationPointer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </>
  );
}

function Layout() {
  const location = useLocation();

  const hideLayout = ["/login", "/signup", "/forgot-password"].includes(
    location.pathname
  );
  return (
    <>
      {!hideLayout && <Header />}
      {!hideLayout && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>

      {!hideLayout && <Footer />}
    </>
  );
}

export default App;
