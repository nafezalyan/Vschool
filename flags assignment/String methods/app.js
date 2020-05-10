// let greeting ="hello"
// let greeting1="Hello World"
// var upperCased=greeting.toUpperCase()
// console.log(upperCased)
// let upperLow=upperCased.concat(greeting)
// console.log(upperLow)

// const mid = Math.floor(greeting.length / 2);
// console.log (mid)

// const mid1 = Math.floor(greeting1.length / 2);
// console.log (mid1)

// const firstHalf=greeting.slice(0,2)
// console.log(firstHalf)

// const firstHalf1=greeting1.slice(0,5)
// console.log(firstHalf1)

// const firstHalfCap=firstHalf.toUpperCase()
// const second=greeting.slice(2)
// const halfCap=firstHalfCap.concat(second)
// console.log(halfCap)

// const firstHalfCap1=firstHalf1.toUpperCase()
// const second1=greeting1.slice(5)
// const second2=second1.toLowerCase()
// const halfCap1=firstHalfCap1.concat(second2)
// console.log(halfCap1)

var text = ("hey friends! practice practice practice!");
text = text.toLowerCase()
    .split(' ')
    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    .join(' ');
    console.log(text)