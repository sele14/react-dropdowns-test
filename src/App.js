import React, { useState, useEffect, useRef } from 'react';

import NavBar_Main from './components/navBar';
import CSVReader2 from './components/fileupload';
import './index.css';
import { CsvToHtmlTable } from 'react-csv-to-table';



function App() {

  return (
    <div>
    <NavBar_Main />
    <div className="upload-box">
      <CSVReader2 />
    </div>

    {/* Display data table */}









    </div>
  );
}

export default App;
