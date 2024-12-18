import { useState } from 'react';
import '../../style/App.css';
import '../../style/components/ContentMain/Contact.css';
import { PropTypeContentMainContact } from '../../type/PropTypeContentMainContact';
import ContactCanvas from './ContactCanvas';

const Contact = (props: PropTypeContentMainContact) => {
    const { reachContactPage } = props;
    const fadeinText = reachContactPage

    const [copyTextEmail, setCopyTextEmail] = useState<string>("copy");
    const [copyTextLinkedin, setCopyTextLinkedin] = useState<string>("copy");

    // const email = "a.bmg3168@icloud";
    const email = "aaaaaaaaaaaaaaaaaa.com";
    const linkedin = "https://www.aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";

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

    const propContactCanvas = {
        reachContactPage: reachContactPage
    }
    
    return (
        <div>
            <h1>Contact</h1>
            <div className={ fadeinText ? "active contact-content" : "contact-content" }>
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
                            <button type="button" className="btn-copy" id="copy-email" value={email} onClick={handleCopyToClipboard}>
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
                            <button type="button" className="btn-copy" id="copy-linkedin" value={linkedin} onClick={handleCopyToClipboard}>
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
            {/* <ContactCanvas {...propContactCanvas}/> */}
            <ContactCanvas />
        </div>
    );
}

export default Contact;