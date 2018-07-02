import { flat } from '../utils/util'
import rawText from '../utils/raw.txt'

const flatedArr = flat(1, [2, 3, 4], 5, 6)
console.log(flatedArr)
console.log(rawText)
document.write(flatedArr)
document.write(rawText)
