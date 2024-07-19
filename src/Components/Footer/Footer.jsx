import "./Footer.css";
import { TbMail } from "react-icons/tb";
import { FaGithubAlt } from "react-icons/fa";
import { AiOutlineDiscord } from "react-icons/ai";
import { useContext } from "react";
import ScrollContext from "../../utils/ScrollContext";

function Footer() {

  const sectionRefs = useContext(ScrollContext)

  return (
    <div ref={sectionRefs.section4} className="footer">
        <div className="social">
            <div className="social-icon"><FaGithubAlt /><span className="social-icon-tooltip">Github</span></div>
            <div className="social-icon"><TbMail/><span className="social-icon-tooltip">Mail</span></div>
            <div className="social-icon"><AiOutlineDiscord /><span className="social-icon-tooltip">Discord</span></div>

        </div>
        <div className="footer-text"> 
            Made with <span className="heart">❤️</span> from <span className="name">@0x12md10<span className="name-tooltip">by Abishek</span></span>, Thank you!
        </div>
    </div>
  )
}

export default Footer