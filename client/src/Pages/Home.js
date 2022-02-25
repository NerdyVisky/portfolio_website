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
          <a target="_blank" href="https://doc-0k-90-docs.googleusercontent.com/docs/securesc/6b40ck1oqtud3qbvb4afa5dphj31e4pm/bf5se032qkh63vfjdmj481nprqvo5pqg/1645807575000/13604834509161394008/13604834509161394008/1fK6any7_FPBtB_qusDdUSBdrYztJ_Cab?ax=ACxEAsbou0yuVyeFJmSwObvHFpbLnY9BuwwJpPKIJERpMb3vpX0hwCF1dXEFkzKZNx6onvuemLrtNhq69SMWCpvW7PCv_VamHYCnZTQxIyGa45EEWuaEDtQGr6YxPY2GPpwzry8OSidKKnP9WkQ_hKSFqRM7-jaICHJaviaCsg1QfkAuWxOzFo-gKkVRQNP2qChDFOoq_dcmBXKFDg12QlMF9MH7dahN9IqCImMa7M704k1-kFYq5i8eYmSHRp_UyXlm-JWbimAMRLmk4FU8Xb9WBNevaVVtrf3Hp3gLcd0y2becYrBPOAi15NUfupRgkM335e7xeOnz6jxsYfnZiYj18isrWXXRcRQjZj5V6yDTCmavC7AWweQENL68DyIuO6nR1etAl5u_ywL2wgNoSp_JLDx8q87VOu95d014oQlEj3FM7dskPbjAvGoKLYinx6YYFXmbT8kUuBUK_zjsLJnE0mVzGssbdjc9XG3TcOpJvXmGdGydZapx5Lju7Lqw5PXruSwyABOxsPIFR5V-MdFLIjeSG3iw0pn7-G7tTnIZ4xUOIyCoA0pcQGemPBdguc0t_7r7Zo7CYmFeb69fEVsKwbsOQfpc8gsRgNYVId20vHZlWax8ehTONRdaq4WxuM-rGEI1sP9rDtKHz2KaoyOUn7qFbZ4aHol98b4mhoo&authuser=0&nonce=voc4lk0ar37ng&user=13604834509161394008&hash=9t4alv532mp0mc0bi9jf0344a2bhju4e">
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
