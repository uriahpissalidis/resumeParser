import React from 'react'

export const ParseExcel = () => {

  const handleFile = (e) => {
    console.log(e.target.files[0]);

  }





  return (
    <div>
        <h1>Parse</h1>
        <input type="file" onChange={(e) => handleFile(e)}/>
    </div>
  )
}
