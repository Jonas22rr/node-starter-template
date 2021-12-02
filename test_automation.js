const fs = require("fs").promises;

(async () => {
    const fileName = "./test.txt"
    const newText = "hallo ich bin ein neuer Text"
    await fs.writeFile(fileName, "");
    await fs.writeFile(fileName, newText);
})()