/* eslint-env mocha */

// mocha imports
import chai from 'chai';
chai.should();

// subject imports
import { chainReplace } from '../src/index.mjs';

describe('chainReplace', async () => {
  it('string replacements', async () => {
    const input = 'foo';
    const replacements = [
      ['f', 'b'],
      ['oo', 'ar'],
    ];

    const output = chainReplace(input, replacements);

    output.should.equal('bar');
  });

  it('regex replacements', async () => {
    const input = 'foo';
    const replacements = [
      [/f/, 'b'],
      [/oo/, 'ar'],
    ];

    const output = chainReplace(input, replacements);

    output.should.equal('bar');
  });
});
