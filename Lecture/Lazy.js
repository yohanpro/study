const L = {};

// L.filter = function *(f, iter){
//   for(const a of iter){
//     yield f(a)
//   }
// }

// const iter = L.filter((a)=>a%2 ,[1,2,3,4])

// console.log(iter.next())

// L.range = function* (l) {
//   let i = -1;
//   while (++i < l) {
//     yield i;
//   }
// }

// const list = L.range(20);

// console.log("list", list);
// function test(name, time, f) {
//   console.time(name);

//   console.timeEnd(name);
// }

// function* map(fn, iter) {
//   for (const a of iter) {
//     yield fn(a);
//   }
// }

// const it = map((a) => a * 10, [1, 2, 3]);

// console.log(it.next());
// console.log(it.next());


function* range(start, stop) {
  for (var i = start; i < stop; i += 1) {
    yield i;
  }
}

const myIter = range(5, Infinity)

console.log(myIter.next())
console.log(myIter.next()) 