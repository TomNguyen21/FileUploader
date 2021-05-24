import React from 'react';
import './App.css';
import FileUpload from './FileUpload';
import UploadedFile from './UploadedFile';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img className="weFunder_logo" src="https://upload.wikimedia.org/wikipedia/commons/e/e6/Wefunder_logo.png" alt="WeFunder" />
        <FileUpload />
        <div className="pitch_deck">
        <UploadedFile />
        </div>
      </header>
    </div>
  );
}

export default App;
