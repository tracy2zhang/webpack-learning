import { flat, testTreeShaking } from 'src/utils/util.js'
import $ from 'jquery'
require('../assets/less/base.less')
// import { findIndex, debounce } from 'lodash/findIndex'
// import moment from 'moment'
import rawText from '../utils/raw.txt'
// import 'src/vendor/semantic-ui/semantic.css'
import img404 from 'src/assets/images/404.png'
console.log($);
// console.log(moment())
const flatedArr = flat(1, [2, 3, 4], 5, 6)
console.log(flatedArr)
// console.log(findIndex(flatedArr, v => v === 5))
// debounce(setTimeout)
console.log(rawText)
console.log(rawText)
const div = document.createElement('div')
const image = new Image()
image.src = img404
div.appendChild(image)
document.querySelector('#app').appendChild(div)
div.addEventListener('click', e => {
  import(/* webpackChunkName: "log" */ 'src/utils/util.js').then(module => {
    const log = module.default
    log.error('something went wrong!!!')
  })
})
