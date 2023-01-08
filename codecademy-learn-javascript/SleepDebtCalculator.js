const getSleepHours = (day) => {
  switch (day) {
    case "monday":
      return 6;
    case "tuesday":
      return 7;
    case "wednesday":
      return 8;
    case "thursday":
      return 4;
    case "friday":
      return 5;
    case "saturday":
      return 11;
    case "sunday":
      return 0;
  }
};

const getActualSleepHours = () =>
  getSleepHours("monday") +
  getSleepHours("tuesday") +
  getSleepHours("wednesday") +
  getSleepHours("thursday") +
  getSleepHours("friday") +
  getSleepHours("saturday") +
  getSleepHours("sunday");

const getIdealSleepHours = () => {
  let idealHours = 7;
  return idealHours * 7;
};

const calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours();
  let overUnderHours = actualSleepHours - idealSleepHours;

  if (actualSleepHours === idealSleepHours) {
    return overUnderHours + " hours. User has the perfect amount of sleep";
  } else if (actualSleepHours > idealSleepHours) {
    return overUnderHours + " hours. User got more sleep than needed";
  } else if (actualSleepHours < idealSleepHours) {
    return overUnderHours + " hours. User should get some rest";
  }
};
console.log(calculateSleepDebt());
