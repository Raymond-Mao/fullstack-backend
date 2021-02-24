import { UsernamePasswordInput } from "../resolvers/UsernamePasswordInput";

export const validateRegister = (options: UsernamePasswordInput) => {
  if (!options.email.includes("@")) {
    return [
      {
        field: "email",
        message: "should be email",
      },
    ];
  }
  if (options.username.length <= 2) {
    return [
      {
        field: "username",
        message: "should be longer than 2",
      },
    ];
  }
  if (options.username.includes("@")) {
    return [
      {
        field: "username",
        message: "cannot include an @",
      },
    ];
  }
  if (options.password.length <= 2) {
    return [
      {
        field: "password",
        message: "should be longer than 3",
      },
    ];
  }
  return null;
};
