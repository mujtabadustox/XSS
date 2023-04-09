let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();
// Student Model
let commentSchema = require("../Models/comment");
// CREATE Student
router.route("/create-comment").post((req, res, next) => {
  commentSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log(data);
      res.json(data);
    }
  });
});
// READ Students
router.route("/").get((req, res) => {
  commentSchema.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

router.route("#").post((req, res) => {
  //User is the model created in app.js of this project
  var newComment = commentSchema({
    comment: req.body.comment,
  });

  console.log(newComment);
  // save the user
  newComment.save(function (err) {
    if (err) throw err;

    console.log("User created!");
  });
});

// Get Single Student
// router.route("/edit-student/:id").get((req, res) => {
//   commentSchema.findById(req.params.id, (error, data) => {
//     if (error) {
//       return next(error);
//     } else {
//       res.json(data);
//     }
//   });
// });

// // Update Student
// router.route("/update-student/:id").put((req, res, next) => {
//   commentSchema.findByIdAndUpdate(
//     req.params.id,
//     {
//       $set: req.body,
//     },
//     (error, data) => {
//       if (error) {
//         return next(error);
//         console.log(error);
//       } else {
//         res.json(data);
//         console.log("Student updated successfully !");
//       }
//     }
//   );
// });
// // Delete Student
// router.route("/delete-student/:id").delete((req, res, next) => {
//   commentSchema.findByIdAndRemove(req.params.id, (error, data) => {
//     if (error) {
//       return next(error);
//     } else {
//       res.status(200).json({
//         msg: data,
//       });
//     }
//   });
// });
module.exports = router;
