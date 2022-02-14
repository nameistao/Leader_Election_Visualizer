import func from "./index.js";

test("test 1", () => {
  expect(
    func(3, [
      [0, 1],
      [1, 2],
    ])
  ).toEqual([0, 1, 2]);
});

test("test 2", () => {
  expect(
    func(3, [
      [0, 1],
      [1, 2],
      [2, 0],
    ])
  ).toEqual([]);
});

test("test 3", () => {
  expect(
    func(6, [
      [2, 5],
      [0, 5],
      [0, 4],
      [1, 4],
      [3, 2],
      [1, 3],
    ])
  ).toEqual([0, 1, 4, 3, 2, 5]);
});
