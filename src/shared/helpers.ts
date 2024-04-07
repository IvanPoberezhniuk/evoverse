import * as Yup from "yup";

Yup.setLocale({
  mixed: {
    required: "This field is required.",
  },
  string: {
    min: "Minimun ${min} characters.",
    max: "Maximum ${max} characters.",
    email: "Invalid email, example@email.com.",
  },
  number: {
    min: "Minimun ${min}.",
    max: "Maximum ${max}.",
  },
});

Yup.addMethod(Yup.object, "atLeastOne", function () {
  return this.test({
    name: "atLeastOne",
    message: "Require at least one.",
    exclusive: true,
    test: function (values) {
      const keys = Object.keys(values);
      const isValid = keys.some((key) => values[key]);
      if (isValid) return true;
      return this.createError({
        path: "atLeastOneRequired",
        message: "One reason must be set",
      });
    },
  });
});

function generateRandomString(length = 20) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

export { generateRandomString, Yup };
