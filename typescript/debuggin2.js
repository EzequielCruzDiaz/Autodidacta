"use strict";
/*
  Customer states: Application generates a CSV export of personnel data;
  upon attempting to import this data to Microsoft SQL Server, data is
  corrupted; please diagnose and advise.

  CSV is formatted exactly as table is defined: (varchar, integer, varchar, varchar).
*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
  Customer states: Application generates a CSV export of personnel data;
  upon attempting to import this data to Microsoft SQL Server, data is
  corrupted; please diagnose and advise.

  CSV is formatted exactly as table is defined: (varchar, integer, varchar, varchar).
*/
const fs_1 = __importDefault(require("fs"));
function parseCSV(filePath, delimiter, firstlineHeader) {
    const fileContent = fs_1.default.readFileSync(filePath, "utf-8");
    const lines = fileContent.split("\n");
    const parsedCSV = [];
    for (let i = firstlineHeader ? 1 : 0; i < lines.length; i++) {
        const values = lines[i].split(delimiter).map(val => val.replace(/"/g, '').trim());
        parsedCSV.push(values);
        if (values.length === 1 && values) {
            continue;
        }
        const row = {};
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
