const fs = require("fs/promises");
const path = require("path");
const dataValidate = require("./helpers/dataValidate");
const chalk = require("chalk");
const checkExtension = require("./helpers/checkExtension");

const FOLDER_PATH = path.join(__dirname, "./files");

const createFile = async (fileName, content) => {
  const file = { fileName: fileName, content: content };

  const { error } = dataValidate(file);
  if (error) {
    console.log(
      chalk.red(`Please specify ${error.details[0].path[0]} parameter`)
    );
    return;
  }
  const { extension, result } = checkExtension(fileName);
  if (!result) {
    console.log(
      chalk.blue.bgRed.bold(
        `Sorry this app does't support with files ${extension} extension`
      )
    );
    return;
  }
  const filePath = path.join(__dirname, "./files", fileName);

  try {
    await fs.writeFile(filePath, content, "utf-8");
    console.log(chalk.blue.bgGreen.bold(`File is created successfully`));
  } catch (error) {
    console.log(error.message);
  }
};

const getFiles = async () => {
  const result = await fs.readdir(FOLDER_PATH);
  if (result.length === 0) {
    console.log(chalk.bold.red("This folder is empty"));
    return;
  }
  result.forEach((file) => console.log(file));
};

const getFileInfo = async (fileName) => {
  const result = await fs.readdir(FOLDER_PATH);
  if (!result.includes(fileName)) {
    console.log(chalk.red(`Folder does not contain ${fileName}`));
    return;
  }

  const filePath = path.join(FOLDER_PATH, fileName);
  const fileContent = await fs.readFile(filePath, "utf-8");
  console.log(chalk.blue(fileContent));
};

module.exports = { createFile, getFiles, getFileInfo };
