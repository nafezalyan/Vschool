//part 1

// for (i=0;i<=9;i++){
//     console.log(i)
// }
//part 2

// for (i=9;i>=0;i--){
//     console.log(i)
// }

//part 3
// var fruit=["banana","orange","apple","kiwi"]
// for (i=0;i<fruit.length;i++){
//     console.log(fruit[i])
// }

// //Bronze (a)
// var number = [];

// for(var i = 1; i <= 9; i++){
//     number.push(i);
// }

// console.log(number); 

//bronze (b)
// for(i=0;i<=100;i++){
//     if (i % 2 ===0){
//         console.log(i)
//     }
// }

//Bronze (c)
// var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"];

//     for (var i=0;i<fruit.length;i++){
//         fruit.splice(i+1,1);
    
//         console.log(fruit);
//     };

  
//Silver

var peopleArray = [
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }
  ]
  
  //a)
  
//   for (var i=0;i,peopleArray.length;i++){
//       console.log(peopleArray[i].name)
//   }

  //b)
//   var names=[]
//   for(var i = 0; i <peopleArray.length; i++){
//         names.push(peopleArray[i].name);
//         console.log(names)
//   }
//   var occupations=[]
//   for(var i = 0; i <peopleArray.length; i++){
//         occupations.push(peopleArray[i].occupation);
//         console.log(occupations)
//   }

//c)

// var names=[]
//   for(var i = 0; i <peopleArray.length; i+=2){
//     names.push(peopleArray[i].name);
//     // for (var j=0; j<names.length;j++) {
//     //   names.splice(j+1,1);
//     //   // console.log(names);
//     // }
//   };
//   console.log(names)
  
//   var occupations=[]
//   for(var i = 1; i <peopleArray.length; i+=2){
//       occupations.push(peopleArray[i].occupation);
//       // for (var i=1;i<occupations.length;i++) {
//       //     occupations.splice(i+1,1);
//       // }
//     }   
//     console.log(occupations);