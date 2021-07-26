const pipe =
  (f, ...funcs) =>
  (...args) =>
    go(f(...args), ...funcs);

const curry =
  (func) =>
  (a, ..._) =>
    _.length ? f(a, ..._) : (..._) => func(a, ..._);

const reduce = (func, acc, iter) => {
  if (!iter) {
    iter = acc[Symbol.iterator]();
    acc = iter.next().value;
  }
  for (const a of iter) {
    acc = func(acc, a);
  }
  return acc;
};

const go = (...args) => reduce((a, f) => f(a), args);

const result = pipe(
  (a, b) => a + b,
  (a) => a + 10,
  (a) => a + 100
);

const myName = (arg) => `My name is ${arg}`;
const yourName = (arg) => `Your name is ${arg}`;

const paymentObj = "john";
const purchasePayload = { name: "sorry", age: 30 };
const thisBind = "abcdedfg";

const reeesult = pipe

console.log("result", reeesult);
