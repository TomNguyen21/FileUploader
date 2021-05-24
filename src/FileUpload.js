import React, { useState } from 'react';
import axios from 'axios';
import './FileUpload.css';

function FileUpload() {
  const [fileData, setFileData] = useState("");
  const [fileName, setFileName] = useState("");

  const getFile = (e) => {
    console.log(e.target.files[0])
    setFileData(e.target.files[0]);
  };

  const getFileName = (e) => {
    setFileName(e.target.files[0].name)
  }
  const uploadFile = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("file", fileData);
    axios({
      method: "POST",
      url: "http://localhost:5000/upload",
      data: data,
    }).then((res) => {
      alert(res.data.message);
    })
  }
  return (
    <form onSubmit={uploadFile}>
      <div className="file_inputs">
      <label className="file_input">
        <input type="file" name="file" onChange={(e) => {
          getFile(e);
          getFileName(e);
        }} required />
        Choose File
      </label>
      {fileName ? fileName : ""}
      <label className="file_input">
        <input type="submit" name= "upload" value= "Upload" />
        Upload
      </label>
      </div>
    </form>
  )
}

export default FileUpload
