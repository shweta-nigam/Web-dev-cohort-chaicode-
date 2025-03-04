
function calculateGrade(num){
    let grade;
    if(num >= 90){
      grade = "A"
    } else if ( num >= 80) {
        grade = "B"
    } else if (num >= 70){
        grade = "C"
    } else if (num >= 60){
        grade = "D"
    } else {
        grade = "F"
    }
    return grade
}
console.log(calculateGrade(79))

// not the right arrows because wrong cal is also imp to learn.
function calculateGrade(num){
    let grade;
    if(num <= 90){
      grade = "A"
    } else if ( num <= 80) {
        grade = "B"
    } else if (num <= 70){
        grade = "C"
    } else if (num <= 60){
        grade = "D"
    } else {
        grade = "F"
    }
    return grade
}
console.log(calculateGrade(79))