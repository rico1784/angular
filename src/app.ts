import {add,pi} from "./utils.ts"
import _ from 'lodash'

let result=add(42, pi)
let roundedResult= _.round(result)
// @ts-ignore
document.write(roundedResult)