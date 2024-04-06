import * as Yup from 'yup';

Yup.setLocale({
  mixed: {
    required: " ",
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

export { Yup };
