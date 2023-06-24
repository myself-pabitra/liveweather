// export const WeekDayNames = [
//   "Sunday",
//   "Monday",
//   "Tuesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
// ];
// export const monthNames = [
//   "Jan",
//   "Feb",
//   "Mar",
//   "Apr",
//   "may",
//   "Jun",
//   "Jul",
//   "Aug",
//   "Sep",
//   "Oct",
//   "Nov",
//   "Dec",
// ];
// export const getdate = function (dateUnix, timezone) {
//   const date = new Date((dateUnix + timezone) * 1000);
//   const weekdayname = WeekDayNames[date.getUTCDay()];
//   const monthname = monthNames[date.getUTCMonth()];

//   return `${weekdayname} ${date.getUTCDate()}, ${monthname}`;
// };

// export const getTime = function (timeUnix, timezone) {
//   const date = new Date((timeUnix + timezone) * 1000);
//   const hours = date.getUTCHours();
//   const minutes = date.getUTCMinutes();
//   const period = hours >= 12 ? "PM" : "AM";

//   return `${hours % 12 || 12} : ${minutes} ${period}`;
// };

// export const getHours = function (timeUnix, timezone) {
//   const date = new Date((timeUnix + timezone) * 1000);
//   const hours = date.getUTCHours();
//   const period = hours >= 12 ? "PM" : "AM";

//   return `${hours % 12 || 12} ${period}`;
// };

// export const mps_to_kmh = (mps) => {
//   const mph = mps * 3600;
//   return mph / 1000;
// };

// export const aqiText = {
//   1: {
//     level: "Good",
//     message:
//       "Air quality is considered satisfactory, and air pollution poses littleor no risk ",
//   },
//   2: {
//     level: "Fair",
//     message:
//       "Air quality is acceptable ; however for some pollutants there may be a moderate health concern for a very small number of people who are usually sensitive to air pollution  ",
//   },
//   3: {
//     level: "Moderate",
//     message:
//       "Number of sensitive groups may experience health effects. The general public is not likely to be affected  ",
//   },
//   4: {
//     level: "Poor",
//     message:
//       "Everyone may begin to experience health effects.members of senesitive groups may experience more serious health effects ",
//   },
//   5: {
//     level: "Very Poor",
//     message:
//       "Health warning of emergency conditions. the entire population is more likely to be affected",
//   },
// };

import React from "react";

export const WeekDayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Thursday",
  "Friday",
  "Saturday",
];
export const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "may",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
export const getdate = function (dateUnix, timezone) {
  const date = new Date((dateUnix + timezone) * 1000);
  const weekdayname = WeekDayNames[date.getUTCDay()];
  const monthname = monthNames[date.getUTCMonth()];

  return `${weekdayname} ${date.getUTCDate()}, ${monthname}`;
};

export const getTime = function (timeUnix, timezone) {
  const date = new Date((timeUnix + timezone) * 1000);
  const hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();
  const period = hours >= 12 ? "PM" : "AM";

  return `${hours % 12 || 12} : ${minutes} ${period}`;
};

export const getHours = function (timeUnix, timezone) {
  const date = new Date((timeUnix + timezone) * 1000);
  const hours = date.getUTCHours();
  const period = hours >= 12 ? "PM" : "AM";

  return `${hours % 12 || 12} ${period}`;
};

export const mps_to_kmh = (mps) => {
  const mph = mps * 3600;
  return mph / 1000;
};

export const aqiText = {
  1: {
    level: "Good",
    message:
      "Air quality is considered satisfactory, and air pollution poses littleor no risk ",
  },
  2: {
    level: "Fair",
    message:
      "Air quality is acceptable ; however for some pollutants there may be a moderate health concern for a very small number of people who are usually sensitive to air pollution  ",
  },
  3: {
    level: "Moderate",
    message:
      "Number of sensitive groups may experience health effects. The general public is not likely to be affected  ",
  },
  4: {
    level: "Poor",
    message:
      "Everyone may begin to experience health effects.members of senesitive groups may experience more serious health effects ",
  },
  5: {
    level: "Very Poor",
    message:
      "Health warning of emergency conditions. the entire population is more likely to be affected",
  },
};
