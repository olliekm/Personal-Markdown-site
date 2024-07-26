"use client";
import React from "react";
import { useCallback, useState } from "react";
import { useResizeObserver } from "@wojtekmaj/react-hooks";

function Page() {
  return (
    <div className="min-h-screen w-full pt-20">
      <embed
        src="oliver_kwun_morfitt_resume_2024.pdf"
        className=" w-full h-screen"
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

export default Page;
