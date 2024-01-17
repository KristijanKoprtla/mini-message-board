const express = require("express");
const router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

// Middleware to parse form data
router.use(express.urlencoded({ extended: true }));

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Mini Messageboard", messages });
});

router.post("/new", function (req, res) {
  const { name, text } = req.body; //extract data from form

  if (name && text) {
    const newMessage = {
      text,
      user: name,
      added: new Date(),
    };
    messages.push(newMessage);

    res.redirect("/");
  } else {
    // Handle validation error (e.g., show an error message or redirect to an error page)
    res.status(400).send("Invalid data. Both name and text are required.");
  }
});

module.exports = router;
