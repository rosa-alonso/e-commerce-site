const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

// find all categories
router.get("/", async (req, res) => {
  try {
    const allCatergories = await Category.findAll({
      include: [Product],
    }).then((allCategories) => res.json(allCategories));
  } catch (err) {
    res.status(400).json(err);
  }
});

// be sure to include its associated Products

router.get("/:id", async (req, res) => {
  try {
    const oneCategory = await Category.findOne(req.params.id, {
      include: [Product],
    }).then((oneCategory) => res.json(oneCategory));
  } catch (err) {
    res.status(400).json(err);
  }
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post("/", async (req, res) => {
  try {
    const newCategory = await Category.create(req.body).then((newCategory) =>
      res.json(newCategory)
    );
  } catch (err) {
    res.status(400).json(err);
  }
  // create a new category
});

router.put("/:id", async (req, res) => {
  try {
    const categories = await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    }).then((categories) => res.json(categories));
  } catch (err) {
    res.status(400).json(err);
  }
  // update a category by its `id` value
});

router.delete("/:id", async (req, res) => {
  try {
    const categories = await Category.destroy({
      where: {
        id: req.params.id,
      },
    }).then((categories) => res.status(categories));
  } catch (err) {
    res.status(400).json(err);
  }
  // delete a category by its `id` value
});

module.exports = router;
