const Joi = require("joi");

const dataValidate = (data) => {
  const schema = Joi.object({
    fileName: Joi.String().required(),
    content: Joi.String().required(),
  });

  return schema.validate(data);
};

module.exports = dataValidate;
