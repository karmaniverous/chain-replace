/**
 * Apply a chain of replacements to a string.
 *
 * @function chainReplace
 * @param {String} - Input string.
 * @param {Array} - Replacements array of the form [[pattern <string|RegEx>, replacement <string|RegEx>], ...]
 * @returns {String} String result of chained replacements.
 */
export const chainReplace = (input, replacements) => {
  if (!replacements) return input;

  if (!Array.isArray(replacements))
    throw new Error(
      'replacements should be an array of arrays of the form [pattern <string|regex>, replacement <string|regex>]'
    );

  if (replacements.length > 0 && !Array.isArray(replacements[0]))
    replacements = [replacements];

  return replacements.reduce(
    (o, [pattern, replacement]) =>
      replacement ? o.replace(pattern, replacement) : o,
    input
  );
};

export default chainReplace;
