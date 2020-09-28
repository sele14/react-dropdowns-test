import React, { Component } from 'react'
import { CSVReader } from 'react-papaparse'
import { CsvToHtmlTable } from 'react-csv-to-table';




const sampleData = `
`;

export default class CSVReader2 extends Component {
    handleOnDrop = (data) => {
      console.log('---------------------------')
      console.log(data)
      console.log(typeof data)
      console.log('---------------------------')
    }
  
    handleOnError = (err, file, inputElem, reason) => {
      console.log(err)
    }
  
    handleOnRemoveFile = (data) => {
      console.log('---------------------------')
      console.log(data)
      console.log('---------------------------')
    }
  
    render() {
      return (
        <>
          <CSVReader
            onDrop={this.handleOnDrop}
            onError={this.handleOnError}
            addRemoveButton
            onRemoveFile={this.handleOnRemoveFile}
          >
            <span>Drop CSV file here or click to upload.</span>

          </CSVReader>

        {/* table */}
        <br/>
        
        <CsvToHtmlTable
            data={ this.data || sampleData }
            csvDelimiter=","
            tableClassName="table table-striped table-hover"
        />

        </>
      )
    }
  }
  