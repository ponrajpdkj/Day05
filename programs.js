
//odd or even numbers
//*******************/
let as=[1,2,3,4,5,6,7,8,9,10];
function test(data){
  for(let i=0;i<data.length;i++){
    if(data[i] % 2==1){
     console.log(`${data[i]} is a odd number`);
  } 
  else if(data[i] % 2 ==0){
    console.log(`${data[i]} is a even number`);
  }
  }
}
 test(as);
//--------------------------------------------------------

//Sum of all numbers
//******************/
let as1=[1,2,3,4,5,6,7,8,9,10];
function test(data){
  let sum=0;
  for(let i=0;i<data.length;i++){
  sum=sum+data[i];
  }
   console.log(sum);
}
 test(as1);
//---------------------------------------------------------

//Polindrome
//**********/
let str = "civic";
let strReverse = str.split("").reverse().join("");
if (str === strReverse) {
  console.log("The string is a palindrome");
} else {
  console.log("NOT a palindrome");
}
//------------------------------------------------------------

//prime numbers
//***************
let num=[1,2,3,4,5,6,7,8,9,10,11,12,13,14];

num.forEach(function(element){
  const isprime=checkprime(element);
  if(isprime){
    console.log(`${element} is a prime number`);
  }else{
    console.log(`${element}is not a prime number `)
  }
})
  
function checkprime(numbers){
  if(numbers<=1){
    return false;
  }
  else{
    for(let i=2;i<numbers;i++){
      if(numbers%i==0){
        return false;
      }
    }
  }
  return true;
}
//-----------------------------------------------------------------
//Remove duplicates from array
//****************************/
function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }

var a = ["apple","banana","apple","cat","cat","dog",1,2,3,1,3];
var unique =a.filter(onlyUnique);

console.log(unique);
//------------------------------------------------------------------


