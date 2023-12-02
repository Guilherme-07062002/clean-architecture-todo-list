const fs = require("fs");
const path = require("path");

const logFilePath = path.join(__dirname, "log.json");

(async () => {
  // Lê o conteúdo atual do arquivo
  const existingContent = await fs.promises.readFile(logFilePath, 'utf-8');

  // Remove a última vírgula antes do último colchete
  const trimmedContent = existingContent.trim();
  const lastIndex = trimmedContent.lastIndexOf(',');
  const contentWithoutLastComma = lastIndex !== -1 ? trimmedContent.slice(0, lastIndex) + trimmedContent.slice(lastIndex + 1) : trimmedContent;

  // Adiciona os colchetes no início e no final do conteúdo existente
  const contentWithBrackets = `[${contentWithoutLastComma.trim() || ''}]\n`;

  // Escreve o conteúdo com os colchetes de volta no arquivo
  await fs.promises.writeFile(logFilePath, contentWithBrackets);
})();
