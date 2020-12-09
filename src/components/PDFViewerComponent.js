import React from "react";
import PDFViewer, { propTypes } from "pdf-viewer-reactjs";
import { baseUrl } from "../shared/baseUrl";
import { PDFReader } from "reactjs-pdf-reader";

const PdfViewer = () => {
  return (
    <div>
      <div className="container" style={{ overflow: "scroll", height: 600 }}>
        {/* <PDFReader url="../shared/sample.pdf" scale="2" data="atob" /> */}
      </div>
    </div>
  );
};

export default PdfViewer;
