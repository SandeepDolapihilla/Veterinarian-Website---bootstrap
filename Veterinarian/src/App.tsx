import React, { useState } from "react";
import "./App.css"; // External CSS for custom styles
import boxImg1 from "./assets/img-8.png";
import boxImg2 from "./assets/img-7.png";

function CanineCompanion() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    
    <div className="container-fluid">
      {/* Navigation */}
      <nav className="navbar navbar-expand-lg bg-info fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="/testing/img/logo.jpg" alt="Logo" width="50" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto text-center">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Schedule
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Products
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Header Section */}
      <section className="header-section text-center">
        <div className="container">
          <img src="/testing/img/foot.jpg" alt="Happy Pet" />
          <h1 className="mt-4">Pets Grooming</h1>
          <p className="lead">
            Treat your pet to a luxurious grooming experience!
          </p>
          <button className="btn btn-primary mt-3">Book Your Appointment</button>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section text-center">
        <div className="container">
          <h2>All Pet Care Services</h2>
          <div className="row">
            <div className="col-md-4 service-item">
              <img src={boxImg1} alt="Training" className="img-fluid" />
              <h4>Training</h4>
            </div>
            <div className="col-md-4 service-item">
              <img src={boxImg2} alt="Sitting" className="img-fluid" />
              <h4>Sitting</h4>
            </div>
            <div className="col-md-4 service-item">
              <img src={boxImg1} alt="Walking" className="img-fluid" />
              <h4>Walking</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Veterinarian Section */}
      <section className="veterinarian-section text-center">
        <div className="container">
          <h2>Veterinarians</h2>
          <div className="row">
            <div className="col-md-6">
              <img src={boxImg2} alt="Veterinarian" className="img-fluid" />
            </div>
            <div className="col-md-6 d-flex align-items-center">
              <div>
                <p>
                  Meet our caring team of expert veterinarians! We provide
                  excellent clinical care for your beloved pets, ensuring they
                  receive the best treatments.
                </p>
                <button className="btn btn-primary">Book Your Appointment</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accessories Section */}
      <section className="accessories-section text-center">
        <div className="container">
          <h2>Pet Accessories</h2>
          <div className="row">
            <div className="col-md-6 d-flex align-items-center">
              <div>
                <p>
                  Discover a world of stylish pet accessories! From toys to
                  grooming tools, we've got everything your pet needs to look
                  and feel great.
                </p>
                <button className="btn btn-primary">Shop Now</button>
              </div>
            </div>
            <div className="col-md-6">
              <img src={boxImg2} alt="Accessories" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>

      {/* Client Reviews Section */}
      <section className="reviews-section text-center">
        <div className="container">
          <h2>Client Reviews</h2>
          <div className="row">
            <div className="col-md-4 review-item">
              <div className="card">
                <div className="card-body">
                  <p>"The best pet care service I've experienced!"</p>
                  <h5>Benjamin Stevens</h5>
                  <p>⭐⭐⭐⭐⭐</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 review-item">
              <div className="card">
                <div className="card-body">
                  <p>"Highly recommended for all pet owners!"</p>
                  <h5>Natalie Foster</h5>
                  <p>⭐⭐⭐⭐⭐</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 review-item">
              <div className="card">
                <div className="card-body">
                  <p>"My pet loves their grooming sessions here!"</p>
                  <h5>Christopher Lee</h5>
                  <p>⭐⭐⭐⭐⭐</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer-section text-center">
        <div className="container">
          <p>Contact Us | About Us | Privacy Policy</p>
          <div>
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <CanineCompanion />
    </div>
  );
}
