import React, { MutableRefObject, useState } from 'react';
import './style/App.css';
import MobileHeaderMenu from './components/MobileHeaderMenu';
import ContentMain from './components/ContentMain';
import Header from './components/Header';
import { PropTypeContentMain } from './type/PropTypeContentMain';
import { PropTypeMobileHeaderMenu } from './type/PropTypeMobileHeaderMenu';
import { PropTypeHeaderMenu } from './type/PropTypeHeaderMenu';
import Footer from './components/Footer';

function App() {
  const [visibleMobileHeaderMenu, setVisibleMobileHeaderMenu] = useState<boolean>(false);
  console.log('visibleMobileHeaderMenu', visibleMobileHeaderMenu);
  const [headerMenuRefs, setHeaderMenuRefs] = useState<MutableRefObject<HTMLDivElement | null>[]>([]);

  /* Props */
  const propHeaderMenu: PropTypeHeaderMenu = {
    visibleHeaderMenu: !visibleMobileHeaderMenu,
    headerMenuRefs: headerMenuRefs,
  }
  const propMobileHeaderMenu: PropTypeMobileHeaderMenu = {
    visibleMobileHeaderMenu: visibleMobileHeaderMenu,
    headerMenuRefs: headerMenuRefs,
  }
  const propContentMain: PropTypeContentMain = {
    setVisibleMobileHeaderMenu: setVisibleMobileHeaderMenu,
    setHeaderMenuRefs: setHeaderMenuRefs,
  }
  /* Props end */

  return (
    <div id="app">
        <Header {...propHeaderMenu} />
        <MobileHeaderMenu {...propMobileHeaderMenu} />
        <ContentMain {...propContentMain} />
        <Footer />
    </div>
  );
}

export default App;
