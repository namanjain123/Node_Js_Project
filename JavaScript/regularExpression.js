
// Pattern of the 
let pattern = 'love'
let flag = 'gi'
let regEx = new RegExp(pattern, flag)
console.log(regEx)


//Reg exp object method

const str = 'I love JavaScript'
pattern = /love/
const result = str.match(pattern)
console.log(result)

// replace the text
const txt = 'Python is the most beautiful language that a human begin has ever created.\
I recommend python for a first programming language'

matchReplaced = txt.replace(/Python|python/, 'JavaScript')
console.log(matchReplaced)

