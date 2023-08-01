// jest.config.js
module.exports = {
  testEnvironment: "jsdom",
};

// Sample test script for client scripts
var pathToScripts = "./records/sys_script_client/" ;
const fs = require("fs"); // nodeJS file system module
const filesInDirectory = fs.readdirSync(pathToScripts).toString(); // get all files in current directory
const filesArray = filesInDirectory.split(','); // split files into an array

for (i = 0; i < filesArray.length; i++) {
    if (filesArray[i].indexOf('.test.') > -1 || filesArray[i].indexOf('.json') > -1 || filesArray[i].indexOf('.js') == -1) {
        continue; // don't test scripts that include ".test." (Jest test scripts), or files with ".json" (JSON objects such as package.json required by node/jest), and only test .js files
    }
    describe("Testing script: " + filesArray[i], () => {
        // group tests together by script file
        const stringToTest = fs.readFileSync(pathToScripts + filesArray[i]).toString(); // read text of script into a string
        
        test("Should not contain console.log", () => {
            expect(stringToTest).not.toMatch("console.log"); 
        });

        test("Should not contain hard-coded sys_id", () => {
            expect(stringToTest).not.toMatch(/[a-fA-F0-9]{32}/); 
        });

        test("Should not contain GlideRecord queries", () => {
            expect(stringToTest).not.toMatch("new GlideRecord"); 
        });

        test("Should not contain g_form.getReference() queries", () => {
            expect(stringToTest).not.toMatch("g_form.getReference("); 
        });

        test("Should not contain getXMLWait", () => {
            expect(stringToTest).not.toMatch("getXMLWait"); 
        });
        
        test("Should check for newValue not equals oldValue", () => {
            expect(stringToTest).toMatch(/[no][el][wd]Value\s*\!\=\s*[no][el][wd]Value/); 
        });
        
        


    });
}
