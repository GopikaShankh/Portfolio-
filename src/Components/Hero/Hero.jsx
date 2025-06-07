import React, { useState, useEffect, useRef } from "react";
import "./Hero.css";
import profile_img from "../../assets/Gopika.png";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksRef = useRef(null);

  const toggleLinks = () => {
    setShowLinks((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (linksRef.current && !linksRef.current.contains(event.target)) {
        setShowLinks(false);
      }
    };

    if (showLinks) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showLinks]);

  return (
    <div className="hero">
      <img
        id="img1"
        className="profile_img fade-in"
        src={profile_img}
        alt="Gopika Shankh smiling"
      />
      <h1 id="h1" className="fade-in">
        <span>Hi, I’m Gopika Shankh,</span>{" "}
        <span style={{ color: "#00bfff", fontWeight: "bold" }}>
          <Typewriter
            words={["Frontend Developer", "React Enthusiast", "Creative Coder"]}
            loop={true}
            cursor
            cursorStyle="_"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </span>
      </h1>

      <p className="tagline fade-in">
        Turning ideas into beautiful and responsive web interfaces ✨
      </p>

      <div id="btns" className="hero-action fade-in">
        <button
          className="hero-connect-btn"
          onClick={toggleLinks}
          aria-expanded={showLinks}
          aria-controls="social-links"
          aria-label="Toggle social media links"
        >
          Connect With Me
        </button>

        {showLinks && (
          <div
            id="social-links"
            ref={linksRef}
            className="hero-social-links fade-in"
            role="region"
            aria-live="polite"
          >
            <a
              href="https://www.linkedin.com/in/gopika-shankh-18526630a/"
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={showLinks ? 0 : -1}
            >
              <FaLinkedin className="icon" /> LinkedIn
            </a>
            <a
              href="https://github.com/gopikashankh"
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={showLinks ? 0 : -1}
            >
              <FaGithub className="icon" /> GitHub
            </a>
            <a href="mailto:gopika7@gmail.com" tabIndex={showLinks ? 0 : -1}>
              <FaEnvelope className="icon" /> Email Me
            </a>
          </div>
        )}

        <div className="hero-resume">
          <a href="/Gopika_Shankh_Resume.pdf" download className="resume-download-btn">
            📄 Download My Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
