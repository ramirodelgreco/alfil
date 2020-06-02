const Pulpo = require("./dev/Pulpo");

const formFields = {
  firstName: "Manuel",
  lastName: "Pascual",
};

const contactFormValidator = Pulpo.createValidator({
  firstName: Pulpo.string().required().min(6),
  lastName: Pulpo.string().required().min(6),
});

const resultado = contactFormValidator.validate(formFields);
console.log(resultado);
