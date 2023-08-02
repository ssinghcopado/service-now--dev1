// Sample test script for Script Includes

const fs = require("fs"); // nodeJS file system module
const filesInDirectory = fs.readdirSync(".").toString(); // get all files in current directory
const filesArray = filesInDirectory.split(','); // split files into an array

for (i = 0; i < filesArray.length; i++) {
    if (filesArray[i].indexOf('.test.') > -1 || filesArray[i].indexOf('.json') > -1 || filesArray[i].indexOf('.js') == -1) {
        continue; // don't test scripts that include ".test." (Jest test scripts), or files with ".json" (JSON objects such as package.json required by node/jest), and only test .js files
    }
    describe("Testing script: " + filesArray[i], () => {
        // group tests together by script file
        const stringToTest = fs.readFileSync(filesArray[i]).toString(); // read text of script into a string
        
        test("Should not contain hard-coded sys_id", () => {
            expect(stringToTest).not.toMatch(/[a-fA-F0-9]{32}/); 
        });

        test("Should not contain gs.sql", () => {
            expect(stringToTest).not.toMatch('gs.sql');
        });

        test("Should not contain GlideRecord getRowCount()",() => {
            expect(stringToTest).not.toMatch('getRowCount()');
        });

        test("Should not contain gs.log() - switch to using gs.info or gs.debug", () => {
            expect(stringToTest).not.toMatch('gs.log(');
        });
    });
}

