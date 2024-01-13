const fs = require("fs/promises");
const path = require("path");
const dataValidate = require("./helpers/dataValidate");
const chalk = require("chalk");
const checkExtension = require("./helpers/checkExtension");

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
  }
};

module.exports = { createFile };
