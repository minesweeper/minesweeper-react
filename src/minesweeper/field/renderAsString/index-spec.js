import renderAsString from '.';

describe('renderAsString', () => {
  it('should generate string', () => {
    const cells = [
      ['a', 'b', 'c'],
      ['d', 'e', 'f'],
      ['g', 'h', 'i']
    ];
    assert.equal(renderAsString(cells),
`
a b c
d e f
g h i
`
    );
  });
});
