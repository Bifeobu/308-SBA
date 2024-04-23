console.log("SBA 308 JavaScript Fundamentals")

// The provided course information.
const CourseInfo = {
    id: 451,
    name: "Introduction to JavaScript"
  };
  
  // The provided assignment group.
  const AssignmentGroup = {
    id: 12345,
    name: "Fundamentals of JavaScript",
    course_id: 451,
    group_weight: 25,
    assignments: [
      {
        id: 1,
        name: "Declare a Variable",
        due_at: "2023-01-25",
        points_possible: 50
      },
      {
        id: 2,
        name: "Write a Function",
        due_at: "2023-02-27",
        points_possible: 150
      },
      {
        id: 3,
        name: "Code the World",
        due_at: "3156-11-15",
        points_possible: 500
      }
    ]
  };
  
  // The provided learner submission data.
  const LearnerSubmissions = [
    {
      learner_id: 125,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-25",
        score: 47
      }
    },
    {
      learner_id: 125,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-02-12",
        score: 150
      }
    },
    {
      learner_id: 125,
      assignment_id: 3,
      submission: {
        submitted_at: "2023-01-25",
        score: 400
      }
    },
    {
      learner_id: 132,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-24",
        score: 39
      }
    },
    {
      learner_id: 132,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-03-07",
        score: 140
      }
    }
  ];
  
  function getLearnerData(course, ag, submissions) {
    // here, we would process this data to achieve the desired result.
    const result = [
      {
        id: 125,
        avg: 0.985, // (47 + 150) / (50 + 150)
        1: 0.94, // 47 / 50
        2: 1.0 // 150 / 150
      },
      {
        id: 132,
        avg: 0.82, // (39 + 125) / (50 + 150)
        1: 0.78, // 39 / 50
        2: 0.833 // late: (140 - 15) / 150
      }
    ];
  
    return result;
  }
  
  const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);
  
  console.log(result);

console.log("===============================")

// let x = (CourseInfo[0] === AssignmentGroup[2])

// try catch to return correct Course ID
try {
    if (CourseInfo.id === AssignmentGroup.course_id) {
        console.log("Correct!");
    } else {
        throw "Error - Course does not exist"
    }
} catch (error) {
    console.log(error);
}

// const learner125 = (LearnerSubmissions[0, 0] || LearnerSubmissions[1, 0] || LearnerSubmissions[2, 0])

// console.log(learner125)

// const learner132 = (LearnerSubmissions[3] || LearnerSubmissions[4])

// console.log(learner132)

// identifing the learner's id
const learner125 = (LearnerSubmissions[0].learner_id)
console.log(learner125)

const learner132 = (LearnerSubmissions[3].learner_id)
console.log(learner132)

// Finding the average of the score
let totalPointsPoss = [50, 150];
let sum = 0

for (let i = 0; i < totalPointsPoss.length; i++) {
    sum += totalPointsPoss[i];
}
console.log(sum)

// 1st: Learner 125
let learner125Score = [47, 150];
let sum1 = 0

for (let i = 0; i < learner125Score.length; i++) {
    sum1 += learner125Score[i];
}
console.log(sum1)

// 2nd: Learner 132
let learner132Score = [39, 140];