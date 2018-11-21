export const calcDay = (currentDay, index, weekdayNames, monthsNames) => {
  const nextDay = new Date();
  nextDay.setDate(currentDay.getDate() + index);

  const date = nextDay.getDate();
  const month = nextDay.getMonth();
  const day = nextDay.getDay();

  return `${weekdayNames[day]} ${date} ${monthsNames[month]}`;
};

export const getIconClass = (id) => {
  switch(true) {
    case (id >= 200 && id < 300):
      return "wi-storm-showers";
    case (id >= 300 && id < 600):
      return "wi-rain";
    case (id >= 600 && id < 700):
      return "wi-snow";
    case (id >= 700 && id < 800):
      return "wi-fog";
    case (id === 800):
      return "wi-day-sunny";
    case (id > 800):
      return "wi-cloud";
    default:
      return "";
  }
}
