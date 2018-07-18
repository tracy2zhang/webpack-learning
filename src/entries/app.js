import { flat, testTreeShaking } from '../utils/util'
import rawText from '../utils/raw.txt'
import '@/vendor/semantic-ui/semantic.css'
import img404 from '@/assets/images/404.png'

const flatedArr = flat(1, [2, 3, 4], 5, 6)
console.log(flatedArr)
console.log(rawText)
document.write(flatedArr)
document.write(rawText)
const div = document.createElement('div')
const image = new Image()
image.src = img404
div.appendChild(image)
document.querySelector('#app').appendChild(div)
// testTreeShaking()
