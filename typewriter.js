const sentence = "hello there from lighthouse labs"

let waitingTime = 1000
let splitSentence = sentence.split("")
for (const char of splitSentence) {
  setTimeout(() => {
    console.log(char)
  }, waitingTime)
    waitingTime += 500
  
}

// const printWords = (sentenceWords) => {

//   let splitSentence = sentenceWords.split(" ") // splits the sentence into array and single individual words
//   let waitTime = 1000 // starting time out is 1 second
//   for (let word of splitSentence) { // loop through the individual split words in array
//     setTimeout(() => {
//       console.log(word) // print out the words 
//     }, waitTime)
//     waitTime += 1000 //add 1 second each time it loops again
//   }
// }