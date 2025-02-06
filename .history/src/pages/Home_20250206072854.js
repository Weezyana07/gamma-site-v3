import React from "react";
import { NavLink } from "react-router-dom";
import Industries from "../components/Industries";
import Services from "../components/Services";
import Projects from "../components/Projects";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import "./Home.css";

const Home = () => {
  return (
    <div className="container">
      <header className="home-header">
        <div className="top-image"></div>
        <div className="mid-text">
          <p>
            At <span>GAMMA SPECTRE</span>, we specialize in providing
            comprehensive consultancy, information technology, and general
            solutions tailored to meet the diverse needs of our clients. With a
            deep understanding of industry trends and technological
            advancements, our team of experts collaborates closely with
            businesses to unlock their full potential and drive sustainable
            growth.
          </p>
        </div>
        <div className="bottom-image"></div>
        <div className="wrapper">
          <div className="nav-wrapper">
            <div className="logo">
              <a href="#">
                <img src="images/logo-home.png" alt="Manage" />
              </a>
            </div>
            <button
              className="mobile-nav-toggle"
              aria-controls="primary-navigation"
              aria-expanded="false"
            >
              <img
                className="icon-hamburger"
                src="images/icon-hamburger.png"
                alt="menu"
              />
              <span className="visually-hidden">Menu</span>
            </button>
            <nav className="primary-navigation">
              <ul role="list" className="nav-list" id="primary-navigation">
                <li>
                  <NavLink
                    exact
                    to="/"
                    className={({ isActive }) =>
                      isActive ? "nav-link active-link" : "nav-link"
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      isActive ? "nav-link active-link" : "nav-link"
                    }
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/services"
                    className={({ isActive }) =>
                      isActive ? "nav-link active-link" : "nav-link"
                    }
                  >
                    Services
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                      isActive ? "nav-link active-link" : "nav-link"
                    }
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="welcome">
          <h1 id="h1">Unlocking Potential:</h1>
          <h2 id="h2">Transforming Businesses with Technology and Insight.</h2>
        </div>
      </header>
      <Services />
      <Industries />
      <Projects />
      <Testimonials />
      <Contact />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
