// Metacharacters
/*
    \: backslash;
    ^: caret;
    $: dollar sign;
    .: dot; matches anything, except line breaks
    |: pipe;
    ?: question mark;
    *: star;
    +: plus sign;
    (): parenthesis;
    []: brackets;
    {}: curly braces;
*/

/*
    .: dot; all chars possible, except for (\n, \r, \u2028, \u2029)
    \d: backslash d; any number between 0-9
    \w: backslash w; alpha-numeric and underscores (no accented words)
    \b: backslash b; word *b*oundary
    \s: backslash s: any spaces, tabs or line breaks
*/

// reverses
/*
    .: dot; all chars possible, except for (\n, \r, \u2028, \u2029)
    \D: backslash D; anything except numbers between 0-9
    \W: backslash W; anything except alpha-numeric and underscores (no accented words)
    \B: backslash B; word *b*oundary
    \S: backslash S: anything except spaces, tabs and line breaks
*/

console.log('quantifier', 'caaaaaaaaaat'.match(/a{10}/g))
console.log('quantifier', 'cat'.match(/a{1,5}/g))
console.log('quantifier 0 to whatever. Includes empty', ''.match(/a{0,}/g))
console.log('*:  0 to whatever. Includes empty', 'cat'.match(/a*/g))
console.log('+: from 1 to infinity', 'cat'.match(/a+/g))
console.log('?: means optional. zero to one. Includes empty', 'cat'.match(/a?/g))
console.log('<.+> meaning: search for a < followed by anything . from 1 to infinity + and end with >', '<p>foo</p>'.match(/<.+>/))
console.log('<.+?> ? next to a quantifier reverses greediness.', '<p>foo</p>'.match(/<.+>/))
console.log('<p>foo</p>'.match(/<.+?>/))
console.log('<p>foo</p>'.match(/<.??>/))

console.log('[]: alternation between patterns.', 'foo'.match(/[o]/g))
console.log('[]+: any number + of alternation between patterns [].', 'foo'.match(/[o]+/g))

console.log('charater rangers [a-z]', 'abcdef'.match(/[a-z]/g))
console.log('charater and numberic rangers [a-z0-9]', 'abcdef012345'.match(/[a-z0-9]/g))

console.log('charater and numberic rangers [a-z0-9] any number +', 'abcdef01234555%%%'.match(/[a-z0-9]+/g))
console.log('charater and numberic rangers [a-z0-9] any number +', 'abcdef01234555%_%_%'.match(/[a-z0-9_]+/g))
console.log('character class: match characters', 'abcdef0123_45  55%_%_%'.match(/\w/g))
console.log('character class: match characters', 'abcdef0123_45-55%_%_%'.match(/[\w-]+/g))
console.log('character class: match integer', 'abcde   f0123_4   555%_%_%'.match(/\d/g))

console.log(`"/^#([a-f\d]{3}){1,2}$/i": `, `starting with #, match any number and letters thrugh 'a' to 'f' with 3 in length and this group can repeat one or two times`)

console.log('Regex can negate something too. Just add a caret in a [] like: /[^SOMETHING]/g')

console.log(' pipe | can be used as a "or"')

console.log('parenthesis can be used to create groups or can be stored (captured) to be used later')

console.log(`parenthesis wont be capturing (storing) if used with ?: like: /(?:Java|Ecma)Script/g`)

console.log('JavaScript'.match(/(?:Java|Ecma)Script/g))

console.log('.'.match(/(-|\+){0,}[\d]*\.{0,}[\d]*/g))

console.log('5.'.match(/^[-+]?\d*\.?\d+$/g))

console.log('5.1'.match(/^[-+]?(\d*\.?\d+|\.\d+)$/))

console.log('caret ^ can be used to match the start of the string')

console.log('dollar $ can be used to match the end of the string')

console.log('the m flag ignores new lines')

console.log('  23123 adsa  23123'.replace(/^\s+|\s+$/g, ''))

console.log('  23123 adsa  23123'.match(/^\s+|\s+$/g, ''))

console.log('look ahead is done by ?= inside paranthesis: (?=)')

console.log('look ahead ?= matches something if this something preceeds another thing, but dont capture/group this thing')

console.log('negative look ahead ?! matches something if this something does not preceeds another thing, but dont capture/group this thing')

console.log('ab'.match(/a(b)/g))

console.log('ab'.match(/a(?=b)/g))

console.log('ac'.match(/a(?!b)/g))

console.log('2017-00-1'.match(/^\d{4}-[0-12]{1,2}-[1-31]{1,2}$/g))

console.log('2017-09-21'.match(/^\d{4}-(0[1-9]|1[0-2])-([0-2]\d|3[01])$/g))


console.log(`remembering things with captured values like: /('|").+?\\1/g the \\1 refers to the first captured group, which is ('|")`)

console.log('"adasd"'.match(/('|").+?\1/g))

console.log('""'.match(/("|')(\\?.)*?\1/g))
