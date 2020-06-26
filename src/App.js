import React from 'react';
import './App.css';
import Roulette from './Roulette';

function App() {
  return (
    <div className="App">
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
