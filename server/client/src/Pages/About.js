import { useEffect } from "react";
import profileImgURL from "../assets/img/profile_img.jpeg";
import "../css/about.css";
const About = () => {
  useEffect(() => {
    window.scroll(0, 0);
    document.title = "About | Vishvesh Trivedi";
  }, []);
  return (
    <div id="about">
      <div className="about-profile-img">
        <img width="100%" src={profileImgURL} alt="" />
      </div>
      <div className="about-graphic"></div>
      <div className="about-content">
        <div className="about-top">
          <div className="about-title">
            <h1>
              <span>Vishvesh Trivedi </span>
              <span>(19, M)</span>
            </h1>
            <h2>
              <span>Web Developer |</span>
              <span> UI/UX Designer |</span> Writer<span></span>
            </h2>
            <h4>Ahmedabad, India.</h4>
          </div>
          <div className="about-para">
            <p>
              I am a full-stack web developer and a UI/UX designer based out of
              Ahmedabad. In parallel to pursuing B.Tech. in Computer Science
              Engineering from NIT Surat, I freelance by making websites,
              designing interfaces, and building SaaS in general. Besides, I
              currently serve as a Junior-Editor at The Official Media and
              Publication House of NIT Surat : Renesa. On the extra-curriuclar
              realm, I have been a former national swimmer representing the NWR
              region on four-ocassions of the All India Junior Swimming
              Nationals.
            </p>
          </div>
        </div>
        <div className="about-projects"></div>
        <div className="about-career-info">
          <div className="career-info-title">
            <h1>Career Info</h1>
            </div>
            <div className="career-wrapper">
              <div className="block1">
                <div className="block-title">
                  <h2>// Top Skills</h2>
                </div>
                <ul className="list">
                  <li>Web Development</li>
                  <li>UI/UX Designing</li>
                  <li>Content Writing</li>
                  <li>Project Management</li>
                  <li>Public Speaking</li>
                </ul>
                <div className="block-title">
                  <h2>// Languages</h2>
                </div>
                <ul className="list">
                  <li>English: Proficient</li>
                  <li>Hindi : Fluent</li>
                  <li>Gujarati : Native</li>
                </ul>
              </div>
              <div className="block2">
                <div className="block-title">
                  <h2>// Education</h2>
                </div>
                <ul className="list">
                  <li>
                    <h4>NIT Surat : B.Tech (CSE)</h4>
                    <h5>2020-2024</h5>
                  </li>
                  <li>
                    <h4>Brown University : Summer School</h4>
                    <h5>June 2018</h5>
                  </li>
                  <li>
                    <h4>S.D.A. school : K-12 schooling</h4>
                    <h5>2006-2020</h5>
                  </li>
                </ul>
                <div className="block-title">
                  <h2>// Experience</h2>
                </div>
                <h4><span>Renesa |</span><span> Stellars School |</span> ACM<span></span></h4>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default About;
