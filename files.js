const fs = require("fs/promises");
const path = require("path");
const dataValidate = require("./helpers/dataValidate");
const chalk = require("chalk");

const createFile = async (fileName, content) => {
  const file = { fileName: fileName, content: content };

  const { error } = dataValidate(file);
  if (error) {
    console.log(
      chalk.red(`Please specify ${error.details[0].path[0]} parametr`)
    );
    return;
  }
  // console.log(result.error.details[0]);
};

module.exports = { createFile };
