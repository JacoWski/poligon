import './App.css';
import React from 'react';
import Header from './components/Header';
import Article from './pages/Articles';
import Content from './components/Content';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Content>
        <Article/>
      </Content>      
      <Footer/>
    </div>
  );
}

export default App;
