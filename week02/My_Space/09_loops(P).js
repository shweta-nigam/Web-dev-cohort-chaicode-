function workingDays(days) {
  // your code here
  let totalDays = 0;
  for (let i = 0; i < days.length; i++) {
    if (days[i] !== "Saturday" && days[i] !== "Sunday") totalDays++;
  }
  return totalDays;
}
console.log(workingDays(["Monday", "tuesday"])); // 2
console.log(workingDays(["Monday", "Sunday", "Wednesday", "Friday"])); // 3
console.log(workingDays(["Saturday", "Sunday"])); // 0

// You just need to implement the totalStars function
function totalStars(starLevels) {
  let countStars = 0;
  for (const starArr of starLevels) {
    for (const star of starArr) {
      countStars = countStars + star.length;
    }
  }
  return countStars;
}
console.log(totalStars([["***"], ["*"], ["**"]])); // 6

//      or above can be solved like this as well

function totalStars(starLevels) {
  return starLevels.flat().join("").length;
}

// or like this
function totalStars(starLevels) {
  let countStars = 0;
  for (let i = 0; i < starLevels.length; i++) {
    countStars += starLevels[i].length;
  }
  return countStars;
}
console.log(totalStars([["***"], ["*"], ["**"]])); // wrong above code

// You just need to implement the totalPrice function
function totalPrice(prices) {
  let total = 0;
  for (const amt of prices) {
    total += amt;
  }
  return total;
}
console.log(totalPrice([30, 90]));

//Making pyramid:-
function pyramid(p) {
    let constructPyramid = "";
    for (let i = 1; i < p; i++) {
      let space = " ".repeat(p - i);
      let star = "*".repeat(2 * i - 1);
      constructPyramid += space + star + "\n";
    }
    return constructPyramid;
  }
  console.log(pyramid(5))


//imp ques:-
// Make diamond shape from "*" , use loop and middle star count is n-2 --- Create a function shinyDiamond(n) that prints a shiny diamond shape made of the stars. The number n represents the size of the diamond, with the middle of the diamond having 2n-1star

function shinyDiamond(n) {
  let diamondCount = ""                  // to store diamonds 
  //upper half
  for(let i = 1; i <= n ; i++){
    let space = " ".repeat(n - i)
    let star = "*".repeat(2 * i - 1)     // odd number
    diamondCount+= space + star + "\n"       // "\n" = new line
  }
  //lower half 
  for(let i = n - 1; i >= 1 ; i--){
    let space = " ".repeat(n - i)
    let star = "*".repeat(2 * i - 1)
    diamondCount+= space + star + "\n"
  }
return diamondCount
}
console.log(shinyDiamond(4))


function shinyDiamondRug(n) {
    let diamondCount = ""; // to store diamonds 
    // Upper half of the diamond
    for (let i = 1; i <= n; i++) {
      let space = " ".repeat(n - i); // Spaces decrease as i increases
      let star = "*".repeat(2 * i - 1); // Asterisks increase as i increases
      diamondCount += space + star + "\n"; // Append to the diamond string
    }
  
    // Lower half of the diamond
    for (let i = n - 1; i >= 1; i--) {
      let space = " ".repeat(n - i); // Spaces increase as i decreases
      let star = "*".repeat(2 * i - 1); // Asterisks decrease as i decreases
      diamondCount += space + star + "\n"; // Append to the diamond string
    }
    return diamondCount;
  }
  
  console.log(shinyDiamondRug(4));
  function shinyDiamondRug(n) {
    let diamondCount = ""                  // to store diamonds 
     //upper half
     for(let i = 1; i <= n ; i++){
       for(let j = 1; j <= n - i; j++){
         diamondCount += ' ';
       }
       for(let k= 1; k <= (2 * i - 1); k++){
         diamondCount += '*';
       }
       diamondCount += '\n';
     }
     //lower half 
     for(let i = n - 1; i >= 1 ; i--){
        for(let j = 1; j <= n - i; j++){
         diamondCount += ' ';
       }
       for(let k= 1; k <= (2 * i - 1); k++){
         diamondCount += '*'
       }
       diamondCount += '\n'
     }
   
   return diamondCount;
   }

//++++++++++++++    invertedMountain :-
function invertedMountain(n) {
    let mountain = '';
 
   for (let i = n; i >= 1; i--) {
     for (let j = 1; j <= i; j++) {
       mountain += "*";
     }
     mountain += "\n";
   }
 
   return mountain; 
   
 }
console.log(invertedMountain(3))   

  
