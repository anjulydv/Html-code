const arr1=[ 345,'Hello',false, console.log];

console.log(arr1);
console.log(typeof arr1);

const movies=[ 'Bahubali','Asur','Vampire Diaries','Interstellar','Avengers','RRR'];
console.log(movies.length);

// indexing
console.log(movies[3]);
console.log(movies[10]);


//negative indexing

console.log(movies.at(-4));
console.log(movies.at(1));


movies[2]='Inception';
console.log(movies);

//slicing
//one or more than one element slice krna ho

console.log(movies.slice(1,3));//it does not include 3 in it only take the value till 2



console.log(movies.slice(1,-1));

console.log(movies.slice(2));
console.log(movies.slice(2,100));


//adding elements in array

movies.push('Flash');//add element at the end

movies.unshift('Pathaan');//adds element at the beginning

console.log(movies);


//removing elements from the end
movies.pop();//removes elements from the end
movies.shift();//removes elements from the beginning

console.log(movies);



movies.splice(3,2);//removes more than one elements&& remove elements from any position 

console.log(movies);

console.log(['ironman',...movies,'batman']);

console.log([...movies.slice(0,3),'new element',...movies.slice(3)]);

//Array traversal



