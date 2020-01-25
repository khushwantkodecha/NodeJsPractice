const Posts = require("../../models/Posts");
const express = require("express");
const router = express.Router();

router.all("/*", (req, res, next) => {
  req.app.locals.layout = "admin";
  next();
});

router.get("/", (req, res) => {
  res.render("admin/posts/index");
});

router.get("/create", (req, res) => {
  res.render("admin/posts/create");
});

router.post("/create", (req, res) => {
  // let allowComments = true;
  // if (req.body.allowComments) {
  //   allowComments = true;
  // } else {
  //   allowComments = false;
  // }

  // const newPost = new Post({
  //   title: req.body.title,
  //   status: req.body.status,
  //   allowComments: allowComments,
  //   body: req.body.body
  // });

  // newPost
  //   .save()
  //   .then(savedPost => {
  //     console.log(savedPost);
  //     res.redirect("/admin/posts");
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   });
  res.send(req.body);
});

module.exports = router;
