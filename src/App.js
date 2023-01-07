// import React, { createRef, useEffect } from 'react';
import React from 'react';
import * as SolidIcons from '@fortawesome/free-solid-svg-icons';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import Article from './pages/Articles';
import Content from './components/Content';
import Footer from './components/Footer';
import { Menu, MenuLink} from 'components/Menu';
import UserReactFormHook from 'pages/UserReactFormHook';
import ExpensesApp from 'pages/ExpensesApp';
import Home from 'pages/Home';
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
      <Router>
      <Header/>
        <Content>
          <Menu>
            <MenuLink to={'/'} icon={SolidIcons.faHome} isActive>Home</MenuLink>
            <MenuLink to={'/expenses'} icon={SolidIcons.faHome} isActive>Wydatki</MenuLink>
            <MenuLink to={'/article'} icon={SolidIcons.faBook} isActive>Article</MenuLink>
            <MenuLink to={'/user'} icon={SolidIcons.faContactCard} isActive>User</MenuLink>
          </Menu>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/article' element={<Article/>}/>
            <Route path='/user' element={<UserReactFormHook/>}/>
            <Route path='/expenses' element={<ExpensesApp/>}/>
          </Routes>
        </Content>
      </Router>
      {/* <RefButton ref={btnRef}/> */}
      <Footer/>
    </div>
  );
}

export default App;
