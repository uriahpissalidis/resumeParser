import React, { useState } from "react";
import * as XLSX from "xlsx";

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

    const worksheet = workbook.Sheets[workbook.SheetNames[0]]
    const jsonData = XLSX.utils.sheet_to_json(worksheet)

    console.log(jsonData);
  };

  return (
    <div>
      <h1>Parse</h1>

      {fileName && (
        <p>
          FileName: <span>{fileName}</span>
        </p>
      )}

      <input type="file" onChange={(e) => handleFile(e)} />
    </div>
  );
};
