import React, { useEffect } from 'react';
import '../style/App.css';
import '../style/components/MobileHeaderMenu.css';
import { PropTypeMobileHeaderMenu } from '../type/PropTypeMobileHeaderMenu';

const MobileHeaderMenu = (props: PropTypeMobileHeaderMenu) => {
    const { visibleMobileHeaderMenu, headerMenuRefs } = props;
    
    const handleHeaderMenuButton = (e: React.MouseEvent<HTMLButtonElement>) => {
        const eventId = e.currentTarget.id;
        // Scroll the screen smoothly.
        for (var ref of headerMenuRefs) {
            const top = ref.current?.offsetTop;
            if (eventId === ref?.current?.id) {
                ref.current?.scrollIntoView({
                    block: "start",
                    inline: "start",
                    behavior: "smooth"
                });
                console.log("offsetTop", top);
                // window.scrollTo({
                //     left: 0,
                //     top: top,
                //     behavior: "smooth"
                // });
                break;
            }
        }        
    };

    return (
        <nav className={visibleMobileHeaderMenu ? 'mobile-header-menu visible' : 'mobile-header-menu'}>
            <ul>
                <li className="list-items">
                    <button className="header-menu-btn" id="about" type="button" onClick={handleHeaderMenuButton}>
                        <i className="menu-icon about"></i>
                        <span>About</span>
                    </button>
                </li>
                <li className="list-items">
                    <button className="header-menu-btn" id="projects" type="button" onClick={handleHeaderMenuButton}>
                        <i className="menu-icon projects"><span></span></i>
                        <span>Projects</span>
                    </button>
                </li>
                <li className="list-items">
                    <button className="header-menu-btn" id="skills" type="button" onClick={handleHeaderMenuButton}>
                        <i className="menu-icon skills"></i>
                        <span>Skills</span>
                    </button>
                </li>
                <li className="list-items">
                    <button className="header-menu-btn" id="contact" type="button" onClick={handleHeaderMenuButton}>
                        <i className="menu-icon contact"></i>
                        <span>Contact</span>
                    </button>
                </li>
                {/* <li className="list-items">
                    <button className="header-menu-btn" id="languages" type="button" onClick={handleHeaderMenuButton}>
                        <i className="menu-icon languages">
                            <span>・・・</span>
                            <span className="menu-icon speech-bubble-bottom" />
                        </i>
                        <span>Languages</span>
                    </button>
                </li> */}
            </ul>
        </nav>
      );
}

export default MobileHeaderMenu;
