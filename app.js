const express = require("express");

const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  const today = new Date();
  const currentDay = today.getDate();
  let day = "";
  //   var weekdays = [
  //     "Sunday",
  //     "Monday",
  //     "Tuesday",
  //     "Wednesday",
  //     "Thursday",
  //     "Friday",
  //     "Saturday",
  //   ];
  //   var index = day.getDay();
  //   var today = weekdays[index];

  switch (currentDay) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
      break;

    default:
      console.log(`ERROR: current day is equal to: ${currentDay}`);
      break;
  }
  res.render("list", { kindOfDay: day });
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
