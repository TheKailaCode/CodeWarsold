// Instructions

// Complete the solution so that it reverses all of the words within the string passed in.

// function reverseWords(str){
let newStr = str.split(' ').reverse().join(' ')
return newStr; // reverse those words
}

// use split to split the sentence at the space between each word
// reverse the array of split words
// use join to put the words back into a single string at the space between each word