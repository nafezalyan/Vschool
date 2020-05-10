var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
var alphabet = "abcdefghijklmnopqrstuvwxyz"

var alph = alphabet.split("");
console.log(alph)

// for (var i = 0; i < people.length; i++) {
//     console.log(people[i] + ":");
//     for (j = 0; j < alph.length; j++) {
//         console.log(alph[j]);
//     }
// }
function forception(people, alph) {
    var newArray = []

    for (i = 0; i < people.length; i++) {
        //console.log(people[i] + ":");
        newArray.push(people[i] + ":")
        for (j = 0; j < alph.length; j++) {
            //console.log(alph[j]);
            newArray.push(alph[j])
        }
        
        //console.log(newArray)
    }
    return newArray;
}

console.log(forception(people, alph))

