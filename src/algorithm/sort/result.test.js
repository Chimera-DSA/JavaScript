import quickSort from "./quickSort";

describe("排序题目集", () => {
  test("快速排序", () => {
    const arr = [2, 66, 6, 8, 4];
    const arrSorted = [2, 4, 6, 8, 66];
    expect(quickSort(arr)).toEqual(arrSorted);
  });
});
