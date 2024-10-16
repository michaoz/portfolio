import { useState } from 'react';
import '../../style/App.css';
import '../../style/components/ContentMain/Contact.css';

const Contact = () => {

    // const email = "a.bmg3168@icloud";
    const email = "aaaaaaa";
    const linkedin = "https://www.linkedin.com/in/michiko-aozasa-07b374271";

    const [copyTextEmail, setCopyTextEmail] = useState<string>("copy");
    const [copyTextLinkedin, setCopyTextLinkedin] = useState<string>("copy");

    const handleCopyToClipboard = async(e: React.MouseEvent<HTMLButtonElement>) => {
        const target = e.currentTarget;
        const targetText = target.value;
        try {
            await window.navigator.clipboard.writeText(targetText);
            console.log("Copied the text.", targetText);
        } catch(error) {
            console.error("Unable to copy the text.", error);
            alert("Failed to copy the text to clipboard. Please try again or copy manually.")
        }

        // Change text to "copied" temporarily.
        const textCopied = "copied!";
        const textCopy = "copy";
        const copiedTimeout = 700;
        if (target.parentElement?.parentElement?.id === "email" ) {            
            setCopyTextEmail(textCopied);
            setTimeout(() => {
                setCopyTextEmail(textCopy);
            }, copiedTimeout)
        } else if (target.parentElement?.parentElement?.id === "linkedin" ) {
            setCopyTextLinkedin(textCopied);
            setTimeout(() => {
                setCopyTextLinkedin(textCopy);
            }, copiedTimeout)
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
                        <div>
                            <button className="btn-copy" id="copy-email" value={email} onClick={handleCopyToClipboard}>
                                <p>{copyTextEmail}</p>
                                <i className="icon-copy">
                                    <div id="icon-copy-back" />
                                    <div id="icon-copy-front" />
                                </i>                            
                            </button>
                        </div>
                    </div>
                    <div className="" id="linkedin">
                        <p className="contact-title">Linkedin</p>
                        <p>{linkedin}</p>
                        <div>
                            <button className="btn-copy" id="copy-linkedin" value={linkedin} onClick={handleCopyToClipboard}>
                                <p>{copyTextLinkedin}</p>
                                <i className="icon-copy">
                                    <div id="icon-copy-back" />
                                    <div id="icon-copy-front" />
                                </i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;