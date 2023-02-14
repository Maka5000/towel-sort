module.exports = function towelSort (matrix) {
  if (!matrix) {
    return [];
  } else {
    let test = matrix.map((a, i) => {
      if(i % 2 !== 0) {
        return a.sort((a, b) => b - a);
      }

      return a
    })

    return test.flat();
  }
}
