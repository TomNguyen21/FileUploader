import React from 'react';
import logo from './logo.svg';
import './App.css';
import FileUpload from './FileUpload';
import UploadedFile from './UploadedFile';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <FileUpload />
        <UploadedFile />
      </header>
    </div>
  );
}

export default App;
