"use client";
import React from "react";
import { useCallback, useState } from "react";
import { useResizeObserver } from "@wojtekmaj/react-hooks";

function page() {
  return (
    <div className="">
      <embed
        src="oliver_kwun_morfitt_resume_2024.pdf"
        width="800px"
        height={800}
      />

      {/* <Document
        file={file}
        onLoadSuccess={onDocumentLoadSuccess}
        options={options}
      >
        {Array.from(new Array(numPages), (el, index) => (
          <Page
            key={`page_${index + 1}`}
            pageNumber={index + 1}
            width={
              containerWidth ? Math.min(containerWidth, maxWidth) : maxWidth
            }
          />
        ))}
      </Document> */}
    </div>
  );
}

export default page;
