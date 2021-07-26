function* range(start, stop) {
  for (var i = start; i < stop; i += 1) {
    yield i;
  }
}

const myIter = range(5, Infinity)

console.log(myIter.next())
console.log(myIter.next()) 