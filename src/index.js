// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (matrix === undefined) {
      return [];
    }
    let resultArr = [];

    for (let i = 0; i < matrix.length; i++) {
        (i + 1) % 2 === 0
            ? resultArr.push(...matrix[i].reverse())
            : resultArr.push(...matrix[i]);
    }
    return resultArr;
};
