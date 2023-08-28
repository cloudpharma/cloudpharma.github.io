import { SETUP } from "./assets/js/setup.js"

function testFunction(myfunction, result) {
    if (myfunction() == result) {
        return true
    } else {
        return false
    }
}

console.assert(SETUP.ROOT == 'https://cloudpharma.github.io/', 'Root is on development mode!')