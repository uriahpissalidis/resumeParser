import "../styles/ParseExcel.css";
import React, { useState } from "react";
import * as XLSX from "xlsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudArrowUp } from "@fortawesome/free-solid-svg-icons";

export const ParseExcel = () => {
  const [fileName, setFileName] = useState(null);

  const handleFile = async (e) => {
    // read file
    const file = e.target.files[0];

    // set file name
    setFileName(file.name);

    // take contents of file and insert it into array buffer
    const data = await file.arrayBuffer();

    // parse through the workbook
    const workbook = XLSX.read(data);

    const worksheet = workbook.Sheets[workbook.SheetNames[0]];
    const jsonData = XLSX.utils.sheet_to_json(worksheet);

    console.log(jsonData);
  };

  return (
    <>
      <div className="body">
        <div className="drag-area">
          <div className="icon">
            <FontAwesomeIcon icon={faCloudArrowUp} />
          </div>
          <header>Upload File</header>
          <label>
            <input type="file" onChange={(e) => handleFile(e)} />
          </label>
        </div>
      </div>
    </>
  );
};
