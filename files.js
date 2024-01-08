const fs = require("fs/promises");
const path = require("path");

const createFile = async (fileName, content) => {
  const file = { fileName: fileName, content: content };
  console.log(file);
};
