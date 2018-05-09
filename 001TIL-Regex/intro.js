// there are two ways of buinding a regex on JS
// constructor: new RegExp(pattern[, flags])
const constructedRegex = new RegExp('searchPattern')

// literal
const literalRegex = /searchPattern/

const noMatch = 'no match here. no search pattern.'
const hasMatch = 'yeap! There\'s a searchPattern here'

console.log(constructedRegex.test(noMatch))
console.log(literalRegex.test(hasMatch))
console.log(hasMatch.replace(constructedRegex, 'panda'))