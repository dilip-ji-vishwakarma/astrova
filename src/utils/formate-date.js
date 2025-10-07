import moment from "moment";

export const formatSingleDate = (date, forceYear = false) => {
  if (!date) {
    return "No date";
  }

  let dateFormatted = moment(date).format("MMM DD");
  const currentYear = new Date().getFullYear().toString();

  if (currentYear !== moment(date).format("Y") || forceYear) {
    dateFormatted = moment(date).format("MMM DD, YYYY");
  }

  return dateFormatted;
};
