'use strict';

// 1) ---------------------
// 
//  using the (findMax) function; return the maximum value in the provided array
//  without using build-in functions.
//  EX:
//  [12, 32, 22, 45, 78, 12, 50] ==> 78
//  
// ------------------------

const findMax = (arr)=>{
    let max=0;          // assuming that the lowest number can be insertes is 0 . 

    for (let i=0 ; i<arr.length;i++)
    if(max<arr[i])
    max=arr[i]; 

    return max;
}

// 2) ---------------------
// 
//  using the (sumNums) function; return the Sum value of the numeric values
//  inside the array (there could be strings inside), without using build-in functions
//  EX:
//  [20, '234', 'car', 41, 20, 'chair'] ==> 81
//  
// ------------------------

const sumNums = (arr)=>{
    let sum=0;
    
    for (let j=0;j<arr.length;j++)
    {
        if( arr[j] === Number(arr[j]))
        sum+=arr[j];
    }
    return sum;
}

// 3) ---------------------
// 
//  using the (reverseArray) function; return provided array reversed
//  without using build-in functions
//  EX:
//  ['C#', 'JS', 'Ruby','Python' ] ==> ['Python','Ruby','JS','C#']
// 
// ------------------------
const reverseArray = (arr)=>{
    let reversedArray=[];
    
    for(let k=arr.length-1; k>=0 ; k--)
    {
        reversedArray.push(arr[k]);  
    }
      

    return reversedArray ; 
}

module.exports = {findMax , sumNums, reverseArray};