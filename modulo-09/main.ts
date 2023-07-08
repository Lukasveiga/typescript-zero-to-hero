import { EmailValidator, ZipCodeValidator } from "./validators";

let email = "lukas@@email.com";
let emailValidator = new EmailValidator();

if (emailValidator.isValid(email)) {
  console.log(`${email} is valid`);
} else {
  console.log(`${email} is not valid`);
}

let zipCode = "58052-315";
let zipCodeValidator = new ZipCodeValidator();
