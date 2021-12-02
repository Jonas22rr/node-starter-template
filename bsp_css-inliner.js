//Dient als weiteres Beispiel 
//schaut alle ordner in einem src-Ordner durch und wandelt den html-code in einen Inline-html-code um. 
//schreibt dann die Dateien in den dist Ordner rein.

var juice = require("juice");
const fs = require("fs").promises;
 
(async () => {
    const filesNames = fs.readdir("./src");
    console.log(filesNames);
    const folders = [];
    const files = [];
    (await filesNames).forEach(async (filename) => {
        console.log(filename);
        folders.push(filename);
    });
    for (let folder of folders) {
        const folderFiles = await fs.readdir("./src/" + folder);
        console.log(folderFiles);
        for (let folderFile of folderFiles) {
            if (folderFile == ".vscode") {
                //delete folder
            }
            files.push(folderFile);
            console.log(files);
        }
 
        for (let file of files) {
            let content = await fs.readFile(file);
            let inlined = await juice(content);
            await fs.writeFile("../dist/" + folder + "/" + file, "");
            await fs.writeFile("../dist/" + folder + "/" + file, inlined);
        }
    }
})();