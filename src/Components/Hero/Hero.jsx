import React, { useState, useEffect, useRef } from "react";
import "./Hero.css";
import profile_img from "../../assets/Gopika.png";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

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
        className="profile_img"
        src={profile_img}
        alt="Gopika Shankh smiling"
      />
      <h1 id="h1">
        <span>Hi, I’m Gopika Shankh,</span> a passionate and motivated fresher
        in frontend development.
      </h1>
      <div id="btns" className="hero-action">
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
            <a
              href="mailto:gopika7@gmail.com"
              tabIndex={showLinks ? 0 : -1}
            >
              <FaEnvelope className="icon" /> Email Me
            </a>
          </div>
        )}

        <div className="hero-resume">
          <a href="/Gopika_Shankh_Resume.pdf" download>
            Download My Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
