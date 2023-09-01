//

const names=['Anjul','Shreya','Shivani','Shubhi','Aryan'];
 
const filteredNames= names.filter(( names)=> { return names.startsWith('S')});

console.log(filteredNames);
//or
console.log(names.filter((name)=>{ return name.startsWith('S')}))


//create an array of numbers and filtered to get all perfect square

const num=[4,16,5 ,8,25, 9, 36, 49,37,81];


//create an array to filter all prime numbers

const newArray=[1 ,3 ,2, 5, 10,81,21,11];
 const isPrime=num =>{
     for(let i=2; i<num; i++){

        if(num%i==0) return 0
     }
     return num!==1;
 };

 const myPrimeArray=newArray.filter(element => isPrime(element));
 console.log(myPrimeArray);

