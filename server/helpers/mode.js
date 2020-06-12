module.exports = function mode(array) {
  const count = {};
  array.forEach(function (a) {
      count[a] = (count[a] || 0) + 1;
  });
  return Object.keys(count).reduce(function (r, k, i) {
      if (!i || count[k] > count[r[0]]) {
          return [k];
      }
      if (count[k] === count[r[0]]) {
          r.push(k);
      }
      return r;
  }, []);
}