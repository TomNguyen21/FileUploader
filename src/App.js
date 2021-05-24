import React from 'react';
import './App.css';
import FileUpload from './FileUpload';
import UploadedFile from './UploadedFile';
import logo from './Wefunder_logo.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img className="weFunder_logo" src={logo} alt="WeFunder" />
        <FileUpload />
        <div className="pitch_deck">
        <UploadedFile />
        </div>
      </header>
    </div>
  );
}

export default App;
