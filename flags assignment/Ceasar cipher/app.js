// var readline = require('readline-sync');
// var input = readline.question('What phrase would you like to encrypt? ').toLowerCase();
// var shift = parseInt(readline.question('How many letters would you like to shift? '));

function ceasar(str,num){
  num=num%26;
  var lowerCase=str.toLowerCase();
  var alph='abcdefghijklmnopqrstuvwxyz'.split('');
  var newStr ='';
  for (var i=0;i<lowerCase.length;i++){
    var curLetter=lowerCase[i];
    if(curLetter ===' '){
      newStr += curLetter;
      continue;
    }
    var curIndex=alph.indexOf(curLetter);
    var newIndex=curIndex + num;
    if (newIndex>25) newIndex=newIndex-26;
    if (newIndex<0) newIndex=newIndex +26;
    if(str[i] === str[i].toUpperCase ()){
      newStr +=alph[newIndex].toUpperCase();
    }
    else newStr +=alph[newIndex];
  }
  return newStr;
}
console.log (ceasar('I love Hunting',15))