const router = require('express').Router();
const {

  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addNewFriend,
  removeFriend,
} = require('../../controllers/user-controller');

router
.route("/")
.get(getUsers)
.post(createUser)

router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser)

    // /api/users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId').post(addNewFriend);

router.route('/:userId/friends/:friendId').delete(removeFriend);



module.exports = router;
