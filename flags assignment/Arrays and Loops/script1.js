// var peopleWhoWantToSeeMadMaxFuryRoad = [
//     {
//       name: "Mike",
//       age: 12,
//       gender: "male"
//     },{
//       name: "Madeline",
//       age: 80,
//       gender: "female"
//     },{
//       name: "Cheryl",
//       age: 22,
//       gender: "female"
//     },{
//       name: "Sam",
//       age: 30,
//       gender: "male"
//     },{
//       name: "Suzy",
//       age: 4,
//       gender: "female"
//     }
//   ] 
  //#2
//   for (i=0;i<=peopleWhoWantToSeeMadMaxFuryRoad.length;i++) 
//     if(peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18){
//         console.log(peopleWhoWantToSeeMadMaxFuryRoad[i], 'not old enough')
//     }
//     else {
//         console.log(peopleWhoWantToSeeMadMaxFuryRoad[i], 'old enough')
//     }
    
// option 1 and 2

    // for (i=0;i<=peopleWhoWantToSeeMadMaxFuryRoad.length;i++) 
    // if(peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "male") {
    //     console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough to see Mad Max, don't let him in.")
    // }
    // else if(peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "female") {
    //     console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough to see Mad Max, don't let her in.")
    // }
    // else if(peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "female") {
    //     console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough to see Mad Max, let her in.")
    // }
    // else if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "male") {
    //     console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough to see Mad Max,let him in.")
    // }
    
    
    //optional bonus challenge
    var array = [1, 2, 3, 4, 5, 6, 7];
    var sum = array.reduce(function(a, b){
        return a + b;
    }, 0);
        console.log(sum)
    // for (i=0;i,array.length;i++){
        if (sum % 2 ===1){
            console.log ("The light is on")

        }else {
            console.log ("The light is off")
        }
    