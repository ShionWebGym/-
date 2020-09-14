import React from 'react';
import './App.css';
import Roulette from './Roulette';


var noScroll = require('no-scroll');
noScroll.on();

function App() {
  return (
    <div className="App">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <header className="header">
        <h1 className="h1">ロケーションルーレット！</h1>
        <p className="p">風景SSを撮りたいけどロケーションが決まらない<br/>そんなあなたにピッタリのサイトです！</p>
      </header>
      <main className="main">
      <Roulette/>
      </main>
      <footer className="footer"><p><small>Copyright (C) SQUARE ENIX CO., LTD. All Rights Reserved.</small></p></footer>
    </div>
  );
}

export default App;
