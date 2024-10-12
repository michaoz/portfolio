import '../../style/App.css';
import '../../style/components/ContentMain/Contact.css';

const Contact = () => {

    const email = "a.bmg3168@icloud";
    const linkedin = "https://www.linkedin.com/in/michiko-aozasa-07b374271";

    const handleCopyToClipboard = async(e: React.MouseEvent<HTMLButtonElement>) => {
        const targetText = e.currentTarget.value;
        try {
            await window.navigator.clipboard.writeText(targetText);
            console.log("Copied the text.", targetText);
        } catch(error) {
            console.error("Unable to copy the text.", error);
            alert("Failed to copy the text to clipboard. Please try again or copy manually.")
        }
    }
    
    return (
        <div>
            <h1>Contact</h1>
            <div className="contact-content">
                <div className="contact-text">
                    <p>
                        Feel free to reach out if you have any questions, project opportunities, or if you would just like to connect.
                        <br/>
                        I would always be open and happy to discuss any opportunities with you!
                    </p>
                </div>
                <div className="contact-means">
                    <div className="" id="email">
                        <p className="contact-title">Email</p>
                        <p>{email}</p>
                        <button id="copy-email" value={email} onClick={handleCopyToClipboard}>copy</button>
                        <div></div>
                    </div>
                    <div className="" id="linkedin">
                        <p className="contact-title">Linkedin</p>
                        <p>{linkedin}</p>
                        <button id="copy-linkedin" value={linkedin} onClick={handleCopyToClipboard}>copy</button>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;