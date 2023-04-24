const express = require("express");
const Category = "../models/category";
const slugify = require("slugify");
const router = express.Router;

router.post("/category/create", (req, res) => {
  const categoryObj = {
    name: req.body.name,
    slug: slugify(req.body.name),
  };
  if (req.body.parentId) {
    categoryObj.parentId = req.body.parentId;
  }
  const cat = new Category(categoryObj);
  cat.save().then(() => {
    return res.status(201).json({
      message: "creation sucessful",
    });
  });
});

module.exports = router;
