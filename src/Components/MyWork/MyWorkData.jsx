import React, { useEffect, useRef } from "react";
import quiz from "../../assets/quiz.png";
import weather from "../../assets/weather.png";
import drumkit from "../../assets/drumkit.png";
import shoe from "../../assets/shoe.png";
import quizWithApi from "../../assets/quizWithApi.png";
import library from "../../assets/libery.png";
import covidDashboard from "../../assets/covidDashboard.png";
import "./MyWork.css";

const MyWorkData = () => {
  const scrollRef = useRef(null);

  // Auto Scroll Animation
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    const scrollSpeed = 1; // Adjust scroll speed here

    const autoScroll = () => {
      if (scrollContainer) {
        if (
          scrollContainer.scrollTop + scrollContainer.clientHeight >=
          scrollContainer.scrollHeight
        ) {
          scrollContainer.scrollTop = 0;
        } else {
          scrollContainer.scrollTop += scrollSpeed;
        }
      }
    };

    const intervalId = setInterval(autoScroll, 50);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="portfolio" id="portfolio">
      <h2 id="h2" className="heading">
        MyProjects
      </h2>

      <div className="portfolio-container scrollable no-scrollbar" ref={scrollRef}>
        <div className="portfolio-box">
          <a href="https://gopikashankh.github.io/Quiz/">
            <img src={quiz} alt="Quiz Project" />
          </a>
          <div className="portfolio-layer">
            <h4>
              <a href="https://gopikashankh.github.io/Quiz/">Quiz Page</a>
            </h4>
            <p>Watch this page</p>
          </div>
        </div>

        <div className="portfolio-box">
          <img src={covidDashboard} alt="covid dashboard" />
          <div className="portfolio-layer">
            <h4>
              <a href="https://covid-dashboard1-orpin.vercel.app/">
                Covid Dashboard
              </a>
            </h4>
            <p>Watch this page</p>
          </div>
        </div>

        <div className="portfolio-box">
          <img src={weather} alt="Weather App Project" />
          <div className="portfolio-layer">
            <h4>
              <a href="https://gopikashankh.github.io/weather_app/">
                Weather App
              </a>
            </h4>
            <p>Watch this page</p>
          </div>
        </div>

        <div className="portfolio-box">
          <img src={drumkit} alt="Drum Kit Project" />
          <div className="portfolio-layer">
            <h4>
              <a href="https://gopikashankh.github.io/Drum_kit/">Drum Kit</a>
            </h4>
            <p>Watch this page</p>
          </div>
        </div>

        <div className="portfolio-box">
          <img src={shoe} alt="Shoe Page Project" />
          <div className="portfolio-layer">
            <h4>
              <a href="https://nivya.netlify.app/">Shoes Page</a>
            </h4>
            <p>Watch this page</p>
          </div>
        </div>

        <div className="portfolio-box">
          <img src={quizWithApi} alt="quiz with api" />
          <div className="portfolio-layer">
            <h4>
              <a href="https://gopikashankh.github.io/QuizPage/">Quiz with Api</a>
            </h4>
            <p>Watch this page</p>
          </div>
        </div>

        <div className="portfolio-box">
          <img src={library} alt="Library Management Project" />
          <div className="portfolio-layer">
            <h4>
              <a href="https://gopikashankh.github.io/library_management/">
                Library
              </a>
            </h4>
            <p>Watch this page</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyWorkData;
