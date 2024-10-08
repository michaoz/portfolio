import React, { useState } from 'react';
import './style/App.css';
import MobileHeaderMenu from './components/MobileHeaderMenu';
import ContentMain from './components/ContentMain';
import ContentHeader from './components/ContentHeader';
import { PropTypeContentMain } from './type/PropTypeContentMain';
import { PropTypeMobileHeaderMenu } from './type/PropTypeMobileHeaderMenu';
import { PropTypeHeaderMenu } from './type/PropTypeHeaderMenu';

function App() {
  const [visibleMobileHeaderMenu, setVisibleMobileHeaderMenu] = useState<boolean>(false);
  console.log('visibleMobileHeaderMenu', visibleMobileHeaderMenu);

  /* Props */
  const propHeaderMenu: PropTypeHeaderMenu = {
    visibleHeaderMenu: !visibleMobileHeaderMenu,
  }
  const propMobileHeaderMenu: PropTypeMobileHeaderMenu = {
    visibleMobileHeaderMenu: visibleMobileHeaderMenu,
  }
  const propContentMain: PropTypeContentMain = {
    setVisibleMobileHeaderMenu: setVisibleMobileHeaderMenu,
  }
  /* Props end */

  return (
    <div id="app">
        <ContentHeader {...propHeaderMenu} />
        <MobileHeaderMenu {...propMobileHeaderMenu} />
        <ContentMain {...propContentMain} />
    </div>
  );
}

export default App;
