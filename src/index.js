module.exports = function towelSort (matrix) {
  if (!matrix) {
    return [];
  } else {
    let towel_sort = matrix.map((a, i) => {
      if(i % 2 !== 0) {
        return a.sort((a, b) => b - a);
      }

      return a
    })

    return towel_sort.flat();
  }
}
