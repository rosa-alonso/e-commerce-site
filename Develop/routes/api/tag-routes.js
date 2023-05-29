const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

router.get("/", async (req, res) => {
  try {
    const allTags = await Tag.findAll({
      include: [Product],
    }).then((allTags) => res.json(allTags));
  } catch {
    res.status(400).json(err);
  }
  // find all tags
  // be sure to include its associated Product data
});

router.get("/:id", async (req, res) => {
  try {
    const oneTag = await Tag.findOne(req.params.id, {
      include: [Product],
    }).then((oneTag) => res.json(oneTag));
  } catch (error) {
    res.status(400).json(err);
  }
  // find a single tag by its `id`
  // be sure to include its associated Product data
});

router.post("/", async (req, res) => {
  try {
    const newTag = await Tag.create(req.body).then((newTag) =>
      res.json(newTag)
    );
  } catch (error) {
    res.status(400).json(err);
  }
  // create a new tag
});

router.put("/:id", async (req, res) => {
  try {
    const tags = await Tag.update(req.body, {
      where: {
        id: req.params.id,
      },
    }).then((tags) => res.json(tags));
  } catch (error) {
    res.status(400).json(err);
  } // update a tag's name by its `id` value
});

router.delete("/:id", async (req, res) => {
  try {
    const tags = await Tag.destroy({
      where: {
        id: req.params.id,
      },
    }).then((tags) => res.status(tags));
  } catch (error) {
    res.status(400).json(err);
  } // delete on tag by its `id` value
});

module.exports = router;
