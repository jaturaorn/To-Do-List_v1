const express = require("express");
const bodyParser = require("body-parser");
const app = express();

let items = ["Buy Food", "Cook Food", "Eat Food"];
let workItems = [];

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  const today = new Date();
  const options = {
    weekday: "long",
    month: "long",
    day: "numeric",
  };
  const day = today.toLocaleDateString("en-US", options);

  res.render("list", { kindOfDay: day, newListItems: items });
});

app.post("/", function (req, res) {
  let item = req.body.newItem;

  if (req.body.button === "Work") {
    workItems.push(item);

    res.redirect("/work");
  }else {
    items.push(item);
  
    res.redirect("/");
  }

});

app.get("/work", function (req, res) {
  res.render("list", { kindOfDay: "Work List", newListItems: workItems });
});

app.get("/about", function (req, res) {
  res.render("about");
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
