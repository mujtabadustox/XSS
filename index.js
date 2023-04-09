let express = require("express");
let mongoose = require("mongoose");
let cors = require("cors");
let bodyParser = require("body-parser");

const ejs = require("ejs");
// Express Route
//const commentRoute = require("../backend/routes/comment.route");

const commentsSchema = {
  comment: String,
};

const Comment = mongoose.model("Comment", commentsSchema);

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));

// app.get("/", function (req, res) {
//   res.sendFile(__dirname + "/index.html");
//   //res.send("sasdsa");
// });

app.listen(3000, function () {
  console.log("Server is running  on 3000");
});

app.get("/", (req, res) => {
  Comment.find({}, function (err, comments) {
    res.render("mypage", {
      commentList: comments,
    });
  });
});

app.post("/comments", function (req, res) {
  // Your logic and then redirect
  res.sendFile(__dirname + "/comments");
  //res.redirect("/comments.html");
});

// Connecting mongoDB Database
mongoose
  .connect("mongodb://127.0.0.1:27017/commentsDB")
  .then((x) => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch((err) => {
    console.error("Error connecting to mongo", err.reason);
  });

app.post("/", function (req, res) {
  let newComment = new Comment({
    comment: req.body.comment,
  });

  newComment.save();
});

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
