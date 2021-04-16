//Do the below programs in anonymous function and IIFE

//1.Print odd numbers in an array
//2.Convert all the strings to title caps in a string array
//3.Sum of all numbers in an array
//4.Return all the prime numbers in an array
//5.Return all the palindromes in an array
//6.Return median of two sorted arrays of same size
//7.Remove duplicates from an array
//8.Rotate an array by k times and return the rotated array




let num_array=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
//1.Print odd numbers in an array
let oddArray = (function (num_array) {
    return (num_array.filter((item) => {
        return item % 2 !== 0
    }))
})(num_array);

console.log("All odd numbers in an array: " + oddArray)


//2.Convert all the strings to title caps in a string array
let stringArray = ["this", 'year', 'is', 'getting', 'worse']
let resultStringArray = (function (stringArray)
 {
    return (stringArray.map((item) =>
     {
        return item.toUpperCase()
    }))
}
)(stringArray);

console.log("All upper case string in an array: " + resultStringArray)

//3.Sum of all numbers in an array
let resultSumArray = (function (num_array) {
    return (num_array.reduce((currentTotal,currentvalue) => {  //acc,cv
        return currentTotal + currentvalue
    }, 0))
})(num_array);

console.log("Sum of numbers in an array: " + resultSumArray)

//4.Return all the prime numbers in an array
let resultPrimeArray = (function (num_array) {
    return (num_array.filter((item) => {
        for (i = 2; i < item; i++)
         {
            if (item % i === 0)
                return false
        }

        return true

    }))
})(num_array);
console.log("Prime numbers in an array: " + resultPrimeArray)

//5.Return all the palindromes in an array
let resultPallindromeArray = (function (num_array) {
    return (num_array.filter((item) => {
        let temp = item + ""
        if ((temp.split('').reverse().join('')) === item + "")
            return true
        return false
    }))
})(num_array);
console.log("Pallindrome numbers in an array: " + resultPallindromeArray)

//6.Return median of two sorted arrays of same size
let arr1 = [1, 2, 3, 4, 5, 8, 10]
let arr2 = [8, 9, 10, 12, 16,18,19]
let resultMedian = function (arr1, arr2) {
    let result = []
    let lenArr1 = arr1.length
    let lenArr2 = arr2.length
    if (lenArr1 % 2 === 0) {
        console.log("Median of array 1: " + arr1[lenArr1 / 2])
    } else {
        console.log("Median of array 1: " + arr1[(lenArr1 + 1) / 2])
    }
    if (lenArr2 % 2 === 0) {
        console.log("Median of array 2: " + arr2[lenArr2 / 2])
    } else {
        console.log("Median of array 2: " + arr2[(lenArr2 + 1) / 2])
    }
    return
}(arr1, arr2)

//7.Remove duplicates from an array
let Dup_array = [11,11,3,4,5,2,5,7,5,3,8,9,0,77]
let resultArrayWoDup = ((Dup_array, index) => {
    return [...new Set(Dup_array)]
})(Dup_array)
console.log("Array without Duplicates " + resultArrayWoDup)

//8.Rotate an array by k times and return the rotated array
let arrforrotation = [0, 1, 5, 6, 7, 9]
let resultArrayShifted = ((array, k) => {
    for (let i = 0; i < k; i++) {
        let temp = array.shift()
        array.push(temp)
    }
    return array
})(arrforrotation, 3)

console.log("Array roatated k times: " + resultArrayShifted)