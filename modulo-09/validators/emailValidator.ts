import { Validator } from "./validator";
// import { Validator as FormValidator} from "./validator";

class EmailValidator implements Validator {
  isValid(email: string): boolean {
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return emailRegex.test(email);
  }
}

export { EmailValidator };
