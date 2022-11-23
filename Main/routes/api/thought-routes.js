const router = require('express').Router();
const {

  getThoughts,
  getSingleThought,
  createThought,
  deleteThought,
  updateThought,
  removeThoughtReaction,
  addThoughtReaction,
} = require('../../controllers/thought-controller');

router
.route('/')
.get(getThoughts)
.post(createThought)

router.route('/:thoughtId').get(getSingleThought).delete(deleteThought).put(updateThought)

router.route('/:thoughtId/reactions').post(addThoughtReaction)

router.route('/api/thoughts/:thoughtId/reactions').delete(removeThoughtReaction);

module.exports = router;
