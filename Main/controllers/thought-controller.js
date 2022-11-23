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
    .then((thought) => res.json(thought))
    .catch((err) => {
        console.log(err);
       return res.status(500).json(err);
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
};

module.exports = thoughtController;
