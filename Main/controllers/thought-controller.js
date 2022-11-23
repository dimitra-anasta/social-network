const { Thought, User } = require('../models');
const { getSingleUser } = require('./user-controller');

const thoughtController = {
getThoughts(req,res){
    Thought.find()
    .then((thoughts) => res.json(thoughts))
    .catch((err) => res.status(500).json(err))
},
getSingleThought(req,res) {
    Thought.findOne({ _id: req.params.thoughtId })
    .select('-__v')
    .then((thought) => 
    !thought
    ? res.status(404).json({ message: 'No thought with that ID' })
    : res.json(thought)
    )
    .catch((err) => res.status(500).json(err));
},
createThought(req, res) {
    Thought.create(req.body)
    .then((thought) => {
        return User.findOneAndUpdate(
            { _id: req.body.userId }, 
            { $addToSet: { thoughts: thought._id }},
            { new: true }
        );
});
},
deleteThought(req, res) {
    Thought.findOneAndDelete({ _id: req.params.thoughtId })
    .then((thought) =>
    !thought 
    ? res.status(404).json({ message: 'No thought with that ID' })
    : User.deleteMany({ _id: {$in: thought.thoughts }})
    )
    .then(() => res.json({ message: 'Thoughts and User deleted'}))
    .catch((err) => res.status(500).json(err));
},
updateThought(req, res) { 
    Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $set: req.body },
        { runValidators: true, new: true }
    )
    .then((thought) =>
    !thought
    ? res.status(404).json({ message: 'No thought with this ID' })
    : res.json(thought)
    )
    .catch((err) => res.status(500).json(err));
},
addThoughtReaction(req, res) {
    Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $addToSet: { responses: req.body } },
        { runValidators: true, new: true }        
    )
    .then((thought) =>
    !thought
    ? res.status(404).json({ message: 'No thought with this ID' })
    : res.json(thought)
    )
    .catch((err) => res.status(500).json(err));
 },
 removeThoughtReaction(req, res) {
    Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $pull: { reactions: {respsonseId: req.params.responseId } } },
        { runValidators: true, new: true }
        )
        .then((thought) =>
        !thought
        ? res.status(404).json({ message: 'No thought with this ID' })
        : res.json(thought)
        )
        .catch((err) => res.status(500).json(err));
 },
};

module.exports = thoughtController;
