//Exercise #2: At Least Five Function

function atLeastFive(array, operation) {
  // Start coding here
  if (operation(array) >= 5) {
    return true;
  } else {
    return false;
  }
}

const studentScoresRoom1 = [90, 40, 67, 80, 100, 15, 86, 12, 99, 67];
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];

// Using `atLeastFive` function here
//passingScore1,2,3
function passingScore1(studentScoresRoom1) {
  let passing = 0;
  for (let i = 0; i < studentScoresRoom1.length; i++) {
    if (studentScoresRoom1[i] >= 70) {
      passing = passing + 1;
    } else {
      passing = passing;
    }
  }
  return passing;
}

function passingScore2(studentScoresRoom2) {
  let passing2 = 0;
  for (let i = 0; i < studentScoresRoom2.length; i++) {
    if (studentScoresRoom2[i] >= 70) {
      passing2 = passing2 + 1;
    } else {
      passing2 = passing2;
    }
  }
  return passing2;
}

function passingScore3(studentScoresRoom3) {
  let passing3 = 0;
  for (let i = 0; i < studentScoresRoom3.length; i++) {
    if (studentScoresRoom3[i] >= 70) {
      passing3 = passing3 + 1;
    } else {
      passing3 = passing3;
    }
  }
  return passing3;
}

//atLeastFive(studentScore, function(passingScores){})
atLeastFive(studentScoresRoom1, passingScore1);
atLeastFive(studentScoresRoom2, passingScore2);
atLeastFive(studentScoresRoom3, passingScore3);

let scoreRoom1Result = atLeastFive(studentScoresRoom1, passingScore1);
let scoreRoom2Result = atLeastFive(studentScoresRoom2, passingScore2);
let scoreRoom3Result = atLeastFive(studentScoresRoom3, passingScore3);

console.log(scoreRoom1Result);
console.log(scoreRoom2Result);
console.log(scoreRoom3Result);
