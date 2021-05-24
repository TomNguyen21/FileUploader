import React from 'react';
import logo from './logo.svg';
import './App.css';
import FileUpload from './FileUpload';
import UploadedFile from './UploadedFile';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img className="weFunder_logo" src="https://upload.wikimedia.org/wikipedia/commons/e/e6/Wefunder_logo.png" alt="WeFunder" />
        <FileUpload />
        <div className="pitch_deck_bg">
        <UploadedFile />
        </div>
      </header>
    </div>
  );
}

export default App;
