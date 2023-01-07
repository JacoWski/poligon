// import React, { createRef, useEffect } from 'react';
import React from 'react';
import * as SolidIcons from '@fortawesome/free-solid-svg-icons';

import './App.css';
import Header from './components/Header';
import Article from './pages/Articles';
import Content from './components/Content';
import Footer from './components/Footer';
import { Menu, MenuLink} from 'components/Menu';
// import RefButton from 'components/RefButton';

function App() {
  // const btnRef = createRef();
  // const colorChange = () => {
  //   btnRef.current.style.backgroundColor = 'red';
  //   btnRef.current.style.color = 'white';
  // };
  // useEffect(() => {
  //   const element = btnRef.current;
  //   element.addEventListener("mouseenter", colorChange);
  // });
  return (
    <div className="App">
      <Header/>
      <Content>
        <Menu>
          <MenuLink to={'/'} icon={SolidIcons.faHome}>Home</MenuLink>
          <MenuLink to={'/about'} icon={SolidIcons.faBook}>About</MenuLink>
          <MenuLink to={'/contact'} icon={SolidIcons.faContactCard} isActive>Contact</MenuLink>
          <MenuLink to={'/posts'} icon={SolidIcons.faSignsPost}>Posts</MenuLink>
        </Menu>
        <Article/>
      </Content>
      {/* <RefButton ref={btnRef}/> */}
      <Footer/>
    </div>
  );
}

export default App;
