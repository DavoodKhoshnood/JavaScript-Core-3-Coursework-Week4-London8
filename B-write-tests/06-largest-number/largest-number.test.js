let getLargestNumber = require("./largest-number");

test("returns largest number in array", function () {
  // Arrange
  const numbers = [3,21,88,4,36]
  const expected = 88
  // Act
  const output = getLargestNumber(numbers)
  // Assert
  expect(output).toEqual(expected)
});

// example
// input: [3, 21, 88, 4, 36];
// expected: 88;

// also test that the original array hasn't changed
