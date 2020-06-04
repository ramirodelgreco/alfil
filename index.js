const Pulpo = require("./src/Pulpo");

const formFields = {
  firstName: "James",
  lastName: "Doe",
};

const contactFormValidator = Pulpo.createValidator({
  firstName: Pulpo.string().required().min(5).max(32),
});

contactFormValidator.validate(formFields);
