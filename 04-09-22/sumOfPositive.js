//INSTRUCTIONS

//You get an array of numbers, return the sum of all of the positives ones.

function positiveSum(arr) {

    let num = 0

    for (let i = 0; i <= arr.length; i++) {

        if (arr[i] > 0) {

            num += arr[i]
        }
    }
    return num;
}

  //use a for loop to iterate through the array and grab each value 
  //conditional statement tests whether the value taken in from the array is positive with a comparison to 0
  //add the value of num to the positive array value
  //return the sum of each addition to num value