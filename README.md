# chainReplace

```
/**
 * Apply a chain of replacements to a string.
 *
 * @function chainReplace
 * @param {String} - Input string.
 * @param {Array} - Replacements array of the form [[pattern <string|RegEx>, replacement <string|RegEx>], ...]
 * @returns {String} String result of chained replacements.
 */
```

## Collaborators

### `release-it` Configuration

This project includes [release-it](https://github.com/release-it/release-it)
support that requires these final configurations in your local repo:

1. Create a copy of `.env.development.local.template` and name it
   `.env.development.local`

1. Create a GitHub
   [personal access token](https://github.com/settings/tokens/new?scopes=repo&description=release-it)
   and add it as the value of `GITHUB_TOKEN` in `.env.development.local`.

You can now build build project and publish a release to GitHub and NPM with
these commands:

```
npm run build
npm run release
```
