const router = require('express').Router();
const {

  getThoughts,
  getSingleThought,
  createThought,
  deleteThought,
  updateThought,
} = require('../../controllers/thought-controller');

router
.route('/')
.get(getThoughts)
.post(createThought)

router.route('/:thoughtId').get(getSingleThought).delete(deleteThought).put(updateThought)

module.exports = router;
