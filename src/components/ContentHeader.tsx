import React from 'react';
import '../style/App.css';
import '../style/components/ContentHeader.css';
import { PropTypeHeaderMenu } from '../type/PropTypeHeaderMenu';

const Header = (props: PropTypeHeaderMenu) => {
    const { visibleHeaderMenu, headerMenuRefs } = props;

    const handleHeaderMenuButton = (e: React.MouseEvent<HTMLButtonElement>) => {
        const eventId = e.currentTarget.id;

        // Scroll the screen smoothly.
        for (var ref of headerMenuRefs) {
            if (eventId === ref?.current?.id) {
                ref.current?.scrollIntoView({
                    behavior: 'smooth'
                });
                break;
            }
        }        
    };

    return (
        <header>
            <nav className={visibleHeaderMenu ? "header-menu visible" : "header-menu"} >
                <ul>
                    <li className="list-items">
                        <button className="header-menu-btn" id="about" type="button" onClick={handleHeaderMenuButton}>
                            About
                        </button>
                    </li>
                    <li className="list-items">
                        <button className="header-menu-btn" id="projects" type="button" onClick={handleHeaderMenuButton}>
                            Projects
                        </button>
                    </li>
                    <li className="list-items">
                        <button className="header-menu-btn" id="skills" type="button" onClick={handleHeaderMenuButton}>
                            Skills
                        </button>
                    </li>
                    <li className="list-items">
                        <button className="header-menu-btn" id="contact" type="button" onClick={handleHeaderMenuButton}>
                            Contact
                        </button>
                    </li>
                    <li className="list-items">
                        <button className="header-menu-btn" id="languages" type="button" onClick={handleHeaderMenuButton}>
                            Languages
                        </button>
                    </li>
                </ul>
            </nav>
            <div className="header-vertical-sector"></div>
            <div className="header-horizontal-sector"></div>
            <div className="header-content">
                <p>Hello. My name is</p>
                <h1>Michiko Aozasa / Mia.</h1>
                <h3>A Full-Stack Developer / Engineer</h3>
            </div>
        </header>
      );
}

export default Header;
