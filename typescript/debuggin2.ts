/*
  Customer states: Application generates a CSV export of personnel data;
  upon attempting to import this data to Microsoft SQL Server, data is
  corrupted; please diagnose and advise.

  CSV is formatted exactly as table is defined: (varchar, integer, varchar, varchar).
*/

/*
  Customer states: Application generates a CSV export of personnel data;
  upon attempting to import this data to Microsoft SQL Server, data is
  corrupted; please diagnose and advise.

  CSV is formatted exactly as table is defined: (varchar, integer, varchar, varchar).
*/

import fs from "fs";

function parseCSV(filePath: string, delimiter: string, firstlineHeader: boolean): string[][] {
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const lines = fileContent.split("\n");
    const parsedCSV: string[][] = [];

    for (let i = firstlineHeader ? 1 : 0; i < lines.length; i++) {
        const values = lines[i].split(delimiter).map(val => val.replace(/"/g, '').trim());
        parsedCSV.push(values);

        if (values.length === 1 && values) {
            continue;
        }

        const row: any = {};

        if (i === 1 && firstlineHeader) {
            parsedCSV.push(row);
        }

        const header = parsedCSV[0];

        for (let j = 0; j < header.length; j++) {
            row[header[j]] = values[j];
        }

        parsedCSV.push(row);
    }

    return parsedCSV;
}

const filePath = "C:/Users/EZEQU/Desktop/Typescript exercise/sample.csv";
const customDelimiter = ",";
const firstlineHeader = true;

const parsedData = parseCSV(filePath, customDelimiter, firstlineHeader);
console.log(parsedData);
