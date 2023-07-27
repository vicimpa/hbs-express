const express = require("express");
const { dir } = require("./lib/dir");

const app = express();

app.set('views', dir('views'));
app.set("view engine", "hbs");

app.get("/contact", function (_, response) {
  response.render("contact", {
    title: "Мои контакты",
    emailsVisible: true,
    emails: ["gavgav@mycorp.com", "mioaw@mycorp.com"],
    phone: "+1234567890"
  });
});

app.use("/", function (_, response) {

  response.send("Главная страница");
});
app.listen(3000);