const fs = require("fs/promises");
const path = require("path");
const dataValidate = require("./helpers/dataValidate");

const createFile = async (fileName, content) => {
  const file = { fileName: fileName, content: content };

  const result = dataValidate(file);
  console.log(result);
};

module.exports = { createFile };
