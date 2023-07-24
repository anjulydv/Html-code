//Maps
const nums = [ 23453,46,23,39,3,8];

 const newNums=[];
  for(let i of nums){
     console.log(i**2);
     newNums.push(i ** 2);
  }

  console.log(newNums);



const result = nums.map( (n) => { return  n*2} );
console.log(result);



const prices=[3400, 2347, 99, 27, 494, 988];

const result2= prices.map( (p) => { return p + p*0.1});
console.log(result2);


//use map to get discounted prices -7.5% discount

const discount=[ 3400,2347 ,99,27,494,988];

const result3= discount.map( (d)=> { return d*7.5/100})

console.log(result3);

//use map to get the prices in integer format
const prices2=[]

console.log('$823.564' .slice(1));

//convert all the names to uppercase
console.log('raju'.toUpperCase());

const names=["Anjul","Ayushi","Wajiha"];
console.log(names.map((name) => { return name.toUpperCase}));
console.log('raju rastogi'.split('')[0]);

console.log(names.map((name) => { return name.split(' ') [0]}));
console.log(25**0.5);


//
const numbers={}


 