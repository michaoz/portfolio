import '../../style/App.css';
import '../../style/components/ContentMain/About.css';

const About = () => {
    
    return (
        <div>
            <h1>About Me</h1>
            <div className="about-content">
                <div className="about-my-photo">
                    <img src={require("../../images/my-photo.jpg")} alt="Photo of Me"/>
                </div>
                <div className="about-text">
                    <p>
                        I am Michiko Aozasa 
                        <br/>
                        or you could simply call me Mia.
                        <br/>
                        <br/>
                        I am ...
                    </p>
                    <ul className="i-am-list">
                        <li>a full-stack developer.</li>
                        <li>passionate about creating great digital experiences.</li>
                        <li>able to soak up unfamiliar or new information quickly like a sponge.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default About;