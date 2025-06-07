import React, { useEffect, useRef } from "react";
import quiz from "../../assets/quiz.png";
import weather from "../../assets/weather.png";
import drumkit from "../../assets/drumkit.png";
import shoe from "../../assets/shoe.png";
import quizWithApi from "../../assets/quizWithApi.png";
import library from "../../assets/libery.png";
import covidDashboard from "../../assets/covidDashboard.png";
import "./MyWork.css";

const projects = [
  {
    title: "Quiz Page",
    img: quiz,
    url: "https://gopikashankh.github.io/Quiz/",
    description: "Basic HTML/CSS/JS Quiz App",
    tags: ["HTML", "CSS", "JS"],
    repo: "https://github.com/GopikaShankh/Quiz"
  },
  {
    title: "Covid Dashboard",
    img: covidDashboard,
    url: "https://covid-dashboard1-orpin.vercel.app/",
    description: "Real-time COVID data using API",
    tags: ["React", "API", "CSS"],
    repo: "https://github.com/GopikaShankh/covid-dashboard"
  },
  {
    title: "Weather App",
    img: weather,
    url: "https://gopikashankh.github.io/weather_app/",
    description: "Shows current weather and forecast",
    tags: ["JS", "API", "Responsive"],
    repo: "https://github.com/GopikaShankh/weather_app"
  },
  {
    title: "Drum Kit",
    img: drumkit,
    url: "https://gopikashankh.github.io/Drum_kit/",
    description: "Interactive musical drum kit",
    tags: ["HTML", "CSS", "JS"],
    repo: "https://github.com/GopikaShankh/Drum_kit"
  },
  {
    title: "Shoes Page",
    img: shoe,
    url: "https://nivya.netlify.app/",
    description: "E-commerce shoes landing page",
    tags: ["HTML", "CSS", "Responsive"],
    repo: "https://github.com/GopikaShankh/shoe-page"
  },
  {
    title: "Quiz with API",
    img: quizWithApi,
    url: "https://gopikashankh.github.io/QuizPage/",
    description: "Quiz app using Open Trivia API",
    tags: ["JS", "API", "Quiz"],
    repo: "https://github.com/GopikaShankh/QuizPage"
  },
  {
    title: "Library Management",
    img: library,
    url: "https://gopikashankh.github.io/library_management/",
    description: "Library project using HTML, CSS & JS",
    tags: ["HTML", "CSS", "JS"],
    repo: "https://github.com/GopikaShankh/library_management"
  }
];

const MyWorkData = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    const scrollSpeed = 1;
    let isPaused = false;

    const autoScroll = () => {
      if (!isPaused && scrollContainer) {
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

    scrollContainer.addEventListener("mouseenter", () => isPaused = true);
    scrollContainer.addEventListener("mouseleave", () => isPaused = false);

    return () => {
      clearInterval(intervalId);
      scrollContainer.removeEventListener("mouseenter", () => {});
      scrollContainer.removeEventListener("mouseleave", () => {});
    };
  }, []);

  return (
    <section className="portfolio" id="portfolio">
      <h2 id="h2" className="heading">My Projects</h2>

      <div className="portfolio-container scrollable no-scrollbar" ref={scrollRef}>
        {projects.map((project, index) => (
          <div className="portfolio-box" key={index}>
            <img src={project.img} alt={project.title} />
            <div className="portfolio-layer">
              <h4>
                <a href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.title}`}>
                  {project.title}
                </a>
              </h4>
              <p>{project.description}</p>
              <div className="tags">
                {project.tags.map((tag, idx) => (
                  <span key={idx}>{tag}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.url} target="_blank" rel="noopener noreferrer">Live Demo</a>
                <a href={project.repo} target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MyWorkData;
