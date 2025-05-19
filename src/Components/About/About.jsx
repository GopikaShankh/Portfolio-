import React from "react";
import './About.css';

import profile_img from '../../assets/Gopika.png';

const About = () => {
    return(
        <div className="about">
            <div className="about-title">
                <h1>About me</h1>
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img id = "img" src={profile_img} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>I am skilled in HTML, CSS, and JavaScript, with a strong foundation in creating responsive and user-friendly websites. I am eager to learn and grow in modern frameworks like React and Angular, while also exploring backend technologies to become a well-rounded developer. I am passionate about solving problems, collaborating with teams, and contributing to dynamic projects that make an impact, while continuously improving my technical and professional skills.</p>
                    </div>
                    <div className="abiyt-skills">
                        <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"70%"}}/></div>
                        <div className="about-skill"><p>React JS</p><hr style={{width:"50%"}}/></div>
                        <div className="about-skill"><p>JavaScript</p><hr style={{width:"60%"}}/></div>
                        <div className="about-skill"><p>MySQL</p><hr style={{width:"50%"}}/></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;