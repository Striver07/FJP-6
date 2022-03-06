// empty array 
let arr =[];
console.log(arr)

let arr1 =[1, 1.5,1.48,'a','kapil tiwari',false]
console.log(arr1)
// accesing element at particular index 
console.log(arr1[3]);
console.log(arr1[0]);

// methods of array 
// 1. push operation
let arr2= [1, 2, 2, 3, 4,'java', false,'x']
console.log("array before push:" + arr2)
arr2.push("new element");
console.log("array after push:" + arr2);

// 2. pop operation
console.log("array before pop:" + arr2);
arr2.pop();
console.log("array after pop:" + arr2);

// 3.shift operation 
console.log("array before shift:" + arr2);
arr2.shift();
console.log("array after shift:" + arr2);

// 4. unshift operation
console.log("array before unshift:" + arr2);
arr2.unshift();
console.log("array after unshift:" + arr2);

// 5. length of an array
 let len = arr2.length;
 console.log()


