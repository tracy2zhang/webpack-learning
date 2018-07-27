import { flat, testTreeShaking } from '@/utils/util.js'
require('../assets/less/base.less')
// import { findIndex, debounce } from 'lodash/findIndex'
import moment from 'moment'
import rawText from '../utils/raw.txt'
// import '@/vendor/semantic-ui/semantic.css'
import img404 from '@/assets/images/404.png'

console.log(moment())
const flatedArr = flat(1, [2, 3, 4], 5, 6)
console.log(flatedArr)
// console.log(findIndex(flatedArr, v => v === 5))
// debounce(setTimeout)
console.log(rawText)
alert(1)
const div = document.createElement('div')
const image = new Image()
image.src = img404
div.appendChild(image)
document.querySelector('#app').appendChild(div)
