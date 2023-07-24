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
};
smartphone.color=[ 'Black','White','Blue'];

console.log(smartphone.color[2]);

smartphone.color.push('Red');
console.log(smartphone);

