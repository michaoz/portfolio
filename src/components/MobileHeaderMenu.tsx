import React, { useEffect } from 'react';
import '../style/App.css';
import '../style/components/MobileHeaderMenu.css';
import { PropTypeMobileHeaderMenu } from '../type/PropTypeMobileHeaderMenu';

const MobileHeaderMenu = (props: PropTypeMobileHeaderMenu) => {
    const { visibleMobileHeaderMenu } = props;

    return (
        // <nav className="mobile-header-menu">
        <nav className={visibleMobileHeaderMenu ? 'mobile-header-menu visible' : 'mobile-header-menu'}>
            <ul>
                <li className="list-items"><i className="menu-icon about"></i><span>About</span></li>
                <li className="list-items"><i className="menu-icon projects"><span></span></i><span>Projects</span></li>
                <li className="list-items"><i className="menu-icon skills"></i><span>Skills</span></li>
                <li className="list-items"><i className="menu-icon contact"></i><span>Contact</span></li>
                <li className="list-items"><i className="menu-icon languages">
                    <span>・・・</span>
                    <span className="menu-icon speech-bubble-bottom" />
                </i><span>Languages</span></li>
            </ul>
        </nav>
      );
}

export default MobileHeaderMenu;
