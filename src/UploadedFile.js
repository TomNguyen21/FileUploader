import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf/dist/esm/entry.webpack';
import samplePDF from './uploads/file.pdf';

function UploadedFile() {
  const [file, setFile] = useState('http://localhost:3001/uploads/file.pdf');
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

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
        file={samplePDF}
        onLoadSuccess={onDocumentLoadSuccess}
      >{Array.from(
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
