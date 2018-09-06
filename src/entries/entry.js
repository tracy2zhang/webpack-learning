import { findIndex } from 'lodash'
require('@/assets/less/base.less')
import img404 from '@/assets/images/404.png'
import { flat } from '@/utils/util.js'
const arr = flat(1, 2, 3)
const obj = { a: 1, b: 2 }
console.log([...arr, 4, 5])
console.log({ ...obj })

const users = [
  { 'user': 'barney',  'active': false },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': true }
];

console.log(findIndex(users, function(o) { return o.user == 'barney'; }));
// => 0

// The `_.matches` iteratee shorthand.
console.log(findIndex(users, { 'user': 'fred', 'active': false }));
// => 1

// The `_.matchesProperty` iteratee shorthand.
console.log(findIndex(users, ['active', false]));
// => 0

// The `_.property` iteratee shorthand.
console.log(findIndex(users, 'active'));
// => 2
console.log(findIndex(users, function(o) { return o.user == 'barney'; }));
// => 0

// The `_.matches` iteratee shorthand.
console.log(findIndex(users, { 'user': 'fred', 'active': false }));
// => 1

// The `_.matchesProperty` iteratee shorthand.
console.log(findIndex(users, ['active', false]));
// => 0

// The `_.property` iteratee shorthand.
console.log(findIndex(users, 'active'));
// => 2
console.log(findIndex(users, function(o) { return o.user == 'barney'; }));
// => 0

// The `_.matches` iteratee shorthand.
console.log(findIndex(users, { 'user': 'fred', 'active': false }));
// => 1

// The `_.matchesProperty` iteratee shorthand.
console.log(findIndex(users, ['active', false]));
// => 0

// The `_.property` iteratee shorthand.
console.log(findIndex(users, 'active'));
// => 2
