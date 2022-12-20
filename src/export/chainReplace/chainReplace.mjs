import _ from 'lodash';

/**
 * Apply a chain of replacements to a string.
 *
 * @function chainReplace
 *
 * @param {string} input - Input string.
 * @param {Array<Array<(string|Object), string>>} [replacements] - Replacements array of [pattern: string\|RegExp, replacement: string].
 *
 * @returns {string} String result of chained replacements.
 */
export const chainReplace = (input, replacements) => {
  // Return input if inputs null.
  if (_.isNil(input) || _.isNil(replacements)) return input;

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
