const shuffle = require("../src/shuffle");

let arr = [1, 2, 3, 4, 5]

describe("shuffle should...", () => {
  // CODE HERE

  test('return an array', () => {
    expect(shuffle()).toEqual([])
  })

  test('send shuffle array of same length', () => {
    
    expect(shuffle(arr).length).toEqual(arr.length)
  })

  test('return array with same elements', () => {
    expect(shuffle(arr)).toEqual(expect.arrayContaining(arr))
  })
});
