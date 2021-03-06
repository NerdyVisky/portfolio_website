import "../css/home.css";
import instagramIconURL from "../assets/img/instagram.svg";
import githubIconURL from "../assets/img/github.svg";
import codepenIconURL from "../assets/img/codepen.svg";
import linkedinIconURL from "../assets/img/linkedin.svg";
import viewResumeURL from "../assets/img/view_resume.png";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    window.scroll(0, 0);
    document.title = "Home | Vishvesh Trivedi";
  }, []);
  return (
    <div id="home">
      <div className="home-left">
        <div className="text-content">
          <h3 className="name-title">
            <span className="secondary-accent">
              Hey there! My name is Vishvesh
            </span>
            <span> a.k.a. NerdyVisky</span>
          </h3>
          <div className="dynamic-texts">
            <h1 className="work-title">I make websites.</h1>
            <h1 className="work-title">I write articles.</h1>
            <h1 className="work-title">I design interfaces.</h1>
          </div>
          <h5 className="desc-home">
            I am a nineteen year old Computer Science undergrad at NIT Surat
            with a strong eye for innovative design and interactive
            user-interfaces.
          </h5>
        </div>
        <div className="resume-button">
          <a target="_blank" href="https://drive.google.com/file/d/1fK6any7_FPBtB_qusDdUSBdrYztJ_Cab/view?usp=sharing">
            <img width="45px" src={viewResumeURL} alt="" />
            <span>resume.pdf</span>
          </a>
        </div>
      </div>
      <div className="home-right">
        <div className="icons-wrapper">
          <a target="_blank" href="https://www.instagram.com/viskyyy.___/">
            <img src={instagramIconURL} alt="" />
          </a>
          <a target="_blank" href="https://github.com/NerdyVisky">
            <img src={githubIconURL} alt="" />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/vishvesh-trivedi-783116214/"
          >
            <img src={linkedinIconURL} alt="" />
          </a>
          <a target="_blank" href="https://codepen.io/nerdyvisky">
            <img src={codepenIconURL} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
