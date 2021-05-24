import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf/dist/esm/entry.webpack';
import './UploadedFile.css';


function UploadedFile() {
  const [file, setFile] = useState(`./uploads/file.pdf`);
  const [numPages, setNumPages] = useState(null);


  let onFileChange = (e) => {
    setFile(e.target.files[0]);
  }
  let onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  }
  return (
    <div>
      <Document
        options={{
          cMapUrl: `//cdn.jsdelivr.net/npm/pdfjs-dist@${pdfjs.version}/cmaps/`,
          cMapPacked: true,
        }}
        file={file}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        {Array.from(
          new Array(numPages),
          (el, index) => (
          <Page
            key={`page_${index + 1}`}
            pageNumber={index + 1}
          />
        ),
        )}
      </Document>

    </div>
  )
}

export default UploadedFile
