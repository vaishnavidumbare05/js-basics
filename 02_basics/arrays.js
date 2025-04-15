//Array:array is a object it is store collection of multiple item under a same variables.

// const myArray=[1,2,3,4]
// console.log(myArray);

// const myArray2=new Array("sham","ram","om")
// console.log(myArray2[0])

const myarr=[0,1,2,3,4,5];

//method in array

//1.push-add value in last of array
console.log(myarr.push(6));
console.log(myarr);
//2.pop-remove value in last of array
console.log(myarr.pop());
console.log(myarr);

//3.unshift-add value in starting of array
console.log(myarr.unshift(1));
console.log(myarr);

//4.shift-remove value in starting of array
console.log(myarr.shift());
console.log(myarr);

//5.slice-display array in range we give in input but it cant manipulate original array after that we we print the array tha value in array is as it is display
console.log(myarr.slice(1,3));
//original array value as it is this operation not manipulate original array
console.log(myarr);

//6.splice-display array in rage that we provide but also it manipulate the original array when we perfom this operation after that original array  remove the range of and array value and display remaining array
//ex
console.log(myarr.splice(1,3));
//original array value as it is this operation not manipulate original array
console.log(myarr);

//7.includes-use for finding element in array give output when it present give index of this value when it not present give boolean value like false
console.log(myarr.includes(4));