import Footer from "./components/Footer.js";
import Header from "./components/Header.js";
import HeroSection from "./components/HomePage.js";
import AllRests from "./components/AllRests.js";
import SecondPage from "./components/SecondPage.js";
import ThirdPage from "./components/ThirdPage.js";
import "./styles/App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReviewForm from "./components/ReviewForm.js";
import Signup from "./components/Signup.js";
import Login from "./components/Login.js";
import ProtectedRoute from "./utils/ProtectedRoute.js";
import { AuthProvider } from "./context/AuthContext.js";
import Reviews from "./components/Reviews.js";

function App() {
  return (
    <AuthProvider>
      <Router className="snap-y snap-mandatory">
        <Header />
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />

          <Route element={<ProtectedRoute />}>
            <Route
              exact
              path="/"
              element={
                <div>
                  <HeroSection />
                  <SecondPage />
                  <ThirdPage />
                </div>
              }
            />
            <Route
              path="/browse_rests"
              element={
                <main className="mt-10">
                  <AllRests />
                </main>
              }
            />
            <Route
              path="/reviews"
              element={
                <main className="snap-start mt-10">
                  <br />
                  <br />
                  <br />
                  <Reviews />
                </main>
              }
            />
            <Route
              path="/restaurants/add-review/:id"
              element={
                <main className="mt-8">
                  <ReviewForm />
                </main>
              }
            />
          </Route>
        </Routes>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
