import "../styles/ParseExcel.css";
import React, { useState } from "react";
import * as XLSX from "xlsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudArrowUp } from "@fortawesome/free-solid-svg-icons";

export const ParseExcel = () => {
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const readExcel = (file) => {
    const promise = new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsArrayBuffer(file);

      fileReader.onload = (e) => {
        const bufferArray = e.target.result;

        // parse through the workbook
        const workbook = XLSX.read(bufferArray, { type: "buffer" });

        const worksheet = workbook.Sheets[workbook.SheetNames[0]];
        const jsonData = XLSX.utils.sheet_to_json(worksheet);

        resolve(jsonData);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
    promise.then((d) => {
      console.log(d);
      setItems(d);
    });
  };

  return (
    <div className="main">
      <div className="body">
        <div className="drag-area">
          <div className="icon">
            <FontAwesomeIcon icon={faCloudArrowUp} />
          </div>
          <header>Upload File</header>
          <label>
            <input
              type="file"
              onChange={(e) => {
                const file = e.target.files[0];
                readExcel(file);
              }}
            />
          </label>
        </div>
      </div>
      <div className="container rounded-3">
        <input
          type="text"
          placeholder="Search ..."
          onChange={(e) => {
            setSearchTerm(e.target.value)
            
          }}
        />
        
        <table className="table table-dark table-striped">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Skill</th>
              <th scope="col">Experience</th>
            </tr>
          </thead>
          <tbody>
            {items.map((d) => (
              <tr key={d.id}>
                <th scope="row">{d.id}</th>
                <td>{d.first_name}</td>
                <td>{d.last_name}</td>
                <td>{d.skills}</td>
                <td>{d.experience}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
