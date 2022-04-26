const searchCandies = require('./searchCandies');

describe(searchCandies, () => {
  it("returns 'Mars' and 'Maltesers' when searching 'Ma' & 10", () => {
    expect(searchCandies('Ma', 10)).toEqual([ 'Mars', 'Maltesers' ]);
  });
  it("returns 'Mars' when searching 'Ma' & 2", () => {
    expect(searchCandies('Ma', 2)).toEqual([ 'Mars' ]);
  });
  it("returns 'Skitties', 'Skittles' and 'Starburst' when searching 'S' & 10", () => {
    expect(searchCandies('S', 10)).toEqual([ 'Skitties', 'Skittles', 'Starburst' ]);
  });
  it("returns 'Skitties' and 'Skittles' when searching 'S' & 4", () => {
    expect(searchCandies('S', 4)).toEqual([ 'Skitties', 'Skittles' ]);
  });
  it("returns correct items even when search string is given in lower case", () => {
    expect(searchCandies('ma', 10)).toEqual([ 'Mars', 'Maltesers' ]);
  });
});