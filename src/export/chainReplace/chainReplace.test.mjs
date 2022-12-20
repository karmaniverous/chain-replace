/* eslint-env mocha */

// mocha imports
import chai from 'chai';
chai.should();

// subject imports
import { chainReplace } from './chainReplace.mjs';

describe('chainReplace', function () {
  it('string replacements', async function () {
    const input = 'foo';
    const replacements = [
      ['f', 'b'],
      ['oo', 'ar'],
    ];

    const output = chainReplace(input, replacements);

    output.should.equal('bar');
  });

  it('regex replacements', async function () {
    const input = 'foo';
    const replacements = [
      [/f/, 'b'],
      [/oo/, 'ar'],
    ];

    const output = chainReplace(input, replacements);

    output.should.equal('bar');
  });
});
