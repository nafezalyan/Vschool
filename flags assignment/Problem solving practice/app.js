// var arr=[3, 5, 2, 8, 1];

// var largest = arr.reduce(function(x,y){
//        return (x > y) ? x : y;
// });
// console.log(largest);


let array = ["#3", "$$$", "C%4!", "Hey!"]
let searchTerm = "!"
function findThatPokemon(array, searchTerm){
    //save this for later
    let results = [];
    for (let i=0; i < array.length; i++) {
        //break this piece of the array into a smaller array
        let splitItem = array[i].split('')
    

        //check if the character we want is in the smaller array
        for (let j = 0; j < splitItem.length; j++){
            if(splitItem[j].includes(searchTerm)){
                //it's here, so squish it back together
                let joinedItem = splitItem.join('')
                //and add it to results
                results.push(joinedItem)
                break; //<-- very important
            }
        }
        console.log(splitItem)
    }
//     //give the results back to the user
    return results
}
console.log(findThatPokemon(array, searchTerm))


// function div (num1,num2){
//     if ((num2===0) || (num1%num2 !=0)){
//         return false;
//     }
//     else{
//         return true;
//     }
// }
    
//     console.log(div(9,3));
//     console.log(div(4,2));
//     console.log(div(15,4));


