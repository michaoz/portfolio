import '../style/App.css';
import '../style/components/Footer.css';
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
    const github = "https://github.com/michaoz/";
    const linkedin = "https://www.linkedin.com/in/michiko-aozasa-07b374271";

    return (
        <footer>
            <div className="footer-content">
                <p className="footer-horizontal-line"></p>
                <div className="icon-container">
                    <a href={github} target="_blank" rel="noopener noreferrer" className="icon">
                        <FaGithub />
                    </a>
                    <a href={linkedin} target="_blank" rel="noopener noreferrer" className="icon">
                        <FaLinkedinIn />
                    </a>
                    <a href="" target="_blank" rel="noopener noreferrer" className="icon">
                        <HiOutlineMail />
                    </a>
                </div>
            </div>
        </footer>
      );
}

export default Footer;
