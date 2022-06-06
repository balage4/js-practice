import { validations } from "./validations.js";

export const arrangeValue = (value) => {
  let out = value;
  Object.keys(validations).forEach(validation => {
    const validated = validations[validation](value);
    if (validated)
      out = validated;
  });
  return out;
};
