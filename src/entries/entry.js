import { findIndex } from 'lodash'
import '../assets/less/base.less'
import { flat } from '@/utils/util.js'
flat(1, 2, 3)

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
