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
                {/* <div className="about-left">
                    <img id = "img" src={profile_img} alt="" />
                </div> */}
                <div className="about-right">
                    <div className="about-para">
                        <p>Hi, I’m Gopika Shankh, a passionate web developer with a solid foundation in HTML, CSS, and JavaScript. I’m currently exploring React and backend technologies like Node.js and MongoDB to become a skilled full-stack developer. I love creating responsive, user-friendly interfaces and solving real-world problems through clean code.

<br /><br />I thrive in collaborative environments and value teamwork, effective communication, and continuous self-improvement. With a strong desire to grow in the tech field, I actively build projects and expand my skill set. Outside of coding, I’m a state-level rugby player who enjoys music and indoor games that challenge the mind.

</p>
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