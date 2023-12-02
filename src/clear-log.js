const fs = require("fs");
const path = require("path");

const logFilePath = path.join(__dirname, "log.json");

(async () => {
  // Limpa o arquivo JSON
  await fs.promises.writeFile(logFilePath, "");
})();
