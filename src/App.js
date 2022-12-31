import React from 'react';
import * as SolidIcons from '@fortawesome/free-solid-svg-icons';

import './App.css';
import Header from './components/Header';
import Article from './pages/Articles';
import Content from './components/Content';
import Footer from './components/Footer';
import { Menu, MenuLink} from 'components/Menu';

function App() {
  return (
    <div className="App">
      <Header/>
      <Menu>
        <MenuLink to={'/'} icon={SolidIcons.faHome}>Home</MenuLink>
        <MenuLink to={'/about'} icon={SolidIcons.faBook}>About</MenuLink>
        <MenuLink to={'/contact'} icon={SolidIcons.faContactCard} isActive>Contact</MenuLink>
        <MenuLink to={'/posts'} icon={SolidIcons.faSignsPost}>Posts</MenuLink>
      </Menu>
      <Content>
        <Article/>
      </Content>
      <Footer/>
    </div>
  );
}

export default App;
