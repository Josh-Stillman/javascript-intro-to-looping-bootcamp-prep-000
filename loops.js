
function forLoop(inputArray) {
  for (let i = 0; i < 25; i++) {
    if (i === 1) {
      inputArray.push("I am 1 strange loop.")
    } else {
      inputArray.push(`I am ${i} strange loops.`)
    }
  }
  return inputArray
}
function whileLoop(input) {
  while (input > 0) {
  console.log(--input)

}
return "done"
}
function maybeTrue() {
  return Math.random() >= 0.5
}
function doWhileLoop(inputArray) {
  do {
    inputArray.pop()
  } while(inputArray.length > 0 && maybeTrue());
  return inputArray
}
