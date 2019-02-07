const test = require('tape');
const { Nat } = require('../index.js');

test('Nat() throws when not a natural number', t => {
  t.equal(Nat(0), 0);
  t.equal(Nat(1), 1);
  t.equal(Nat(999), 999);
  t.throws(() => Nat('not a number'), RangeError);
  t.throws(() => Nat(-1), RangeError);
  t.throws(() => Nat(0.5), RangeError);
  t.throws(() => Nat(2 ** 60), RangeError);
  t.throws(() => Nat(NaN), RangeError);
  t.end();
});