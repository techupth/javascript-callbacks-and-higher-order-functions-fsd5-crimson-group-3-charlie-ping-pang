//Exercise #2: At Least Five Function

function atLeastFive(array, operation) {
  console.log(array, operation);
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    //ถ้าคะแนน > 70 ให้ +1
    if (array[i] > 70) {
      count = count + 1
    }
  }
  return operation(count)
}


function scoreCheck(params) {
  console.log(params);
  if (params >= 5) {
    return true
  } 
    return false 
}

const studentScoresRoom1 = [90, 40, 67, 80, 100, 15, 86, 12, 99, 67];
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];



let scoreRoom1Result = atLeastFive(studentScoresRoom1, scoreCheck)
let scoreRoom2Result = atLeastFive(studentScoresRoom2, scoreCheck)
let scoreRoom3Result = atLeastFive(studentScoresRoom3, scoreCheck)
console.log(scoreRoom1Result);
console.log(scoreRoom2Result);
console.log(scoreRoom3Result);