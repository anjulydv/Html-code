const user={ name:'Raju',email:'raju@gmail.com',password:8459};

console.log(user.name);
console.log(user['email']);
console.log(user.password);

user.address='Lucknow';

console.log(user);
let customkey='email';

console.log(user[customkey]);
user[customkey]='raju@hotmail.com';

console.log(user);

let smartphone={
    brand:'Samsung',
    module:'S21',
    price:70000,
    color:'Black'
};
smartphone.color=[ 'Black','White','Blue'];

console.log(smartphone.color[2]);

smartphone.color.push('Red');
console.log(smartphone);

const smartphoneList=[ 
    { brand:'Samsung',model:'S21',price:700000, color:[ 'Black','Blue']},
    { brand:'Apple',model:'iPhone12',price:800000, color:[ 'White','Red','Yellow']},
    { brand:'OnePlus',model:'9 Pro',price:600000, color:[ 'White','Blue']},
    { brand:'xiomi',model:'Mi 11',price:700000, color:[ 'Black','Blue']},
    { brand:'Samsung',model:'S23',price:800000, color:[ 'Black','Blue']},
    { brand:'Oneplus',model:'Nord',price:900000, color:[ 'Black','Blue']},
];

//syntax to access prices of oneplus 9 pro
console.log(smartphoneList[2].price);
console.log(smartphoneList[2].color);

//syntax to add blue colour to mi 11
smartphoneList[3].color.push('Red');

console.log(smartphoneList);


smartphoneList[1].color.slice(1,2);
console.log(smartphoneList[2].color);

//use filter to get all phones with prices less than 70000

 const filteredResult=smartphoneList.filter((phone)=> { return phone.price< 70000});
 console.log(filteredResult);




 //const filteredResult2= smartphoneList.filter((phone)=>{ return phone.brand.toLowerCase()==='samsung'.toLowerCase()});


 const filteredResult2= smartphoneList.filter((phone)=>{ return phone.brand.toLowerCase().includes('samsung'.toLowerCase)});

 console.log(filteredResult2);


 const result3=smartphoneList.filter((phone)=>{ return phone.color==='black'});
 console.log(result3);

 //use filter to get all phones with color blue and price less than 700000

 const result4=smartphoneList.filter((phone)=> { return phone.color.includes('blue')&& phone.price<70000});
 console.log(result4);


 const brands= smartphoneList.map((phone)=>{ return phone.brand})
 console.log( new Set(brands));

 console.log(Boolean(-787));

















