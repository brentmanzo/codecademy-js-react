let raceNumber = Math.floor(Math.random() * 1000);
let isEarly = false;
let runnerAge = 29;

if (isEarly && runnerAge > 18) {
  raceNumber += 1000;
  console.log("Race will start at 9:30AM.");
  console.log("Your race number is: " + raceNumber);
} else if (!isEarly && runnerAge > 18) {
  console.log("Late adults run at 11:00AM.");
  console.log("Your race number is: " + raceNumber);
} else if (runnerAge < 18) {
  console.log(
    "Youth registrants run at 12:30 pm (regardless of registration)."
  );
  console.log("Your race number is: " + raceNumber);
} else {
  console.log("See the registration desk.");
}
