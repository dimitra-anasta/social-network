const { User, Thought } = require('../models');

const userController = {
 getUsers(req, res){
    User.find()
    .then((users) => res.json(users))
    .catch((err) =>  res.status(500).json(err));
 },
 getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId})
    .select('-__v')
    .then((user) => 
    !user 
    ? res.status(404).json({ message: 'No user with that ID'})
    : res.json(user)
    )
    .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
    });
 },
 createUser(req, res) {
    User.create(req.body)
    .then((user) => res.json(user))
    .catch((err) => res.status(500).json(err));
 }, 
 updateUser(req, res) {
    User.findOneAndUpdate(
        { _id: req.params.userId },
        { $set: req.body},
        { runValidators: true, new: true}
    )
    .then((user) => 
    !user
    ? res
        .status(404)
        .json({ message: 'No user with that ID'})
        :res.json(user)
    )
    .catch((err) => res.status(500).json(err));
 },
 deleteUser(req,res) {
    User.findOneAndDelete({ _id: req.params.userId })
    .then((user) => 
    !user
    ? res.status(404).json({ message: 'No such user exists' })
    : Thought.deleteMany({ _id: { $in: user.thoughts }})
    )
 },
 addNewFriend(req, res) {
    console.log('You are adding a frined to your friend list');
    console.log(req.body);
    User.findOneAndUpdate(
        { _id: req.params.userId },
        { $addToSet: { friends: req.params.use } },
        { runValidators: true, new: true }
        )
        .then((user) => 
        !user
        ? res
        .status(404)
        .json({ message: 'No user found with that ID '})
        : res.json(user)
        )
        .catch((err) => res.status(500).json(err));
 },
 removeFriend(req, res) {
    User.findOneAndUpdate(
        { _id: req.params.userId },
        { $pull: { friends:  req.params.friendId } },
        { runValidators: true, new: true }
    )
    .then((user) => 
    !user
    ? res
    .status(404)
    .json({ message: 'No user found with that ID' })
    : res.json(user)
    )
    .catch((err) => res.status(500).json(err));
 },
};

module.exports = userController;
