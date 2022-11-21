const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');
const dateFormat = require('../utils/dateFormat');

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            maxlength: 280,
            minlength: 1,
        },
        createdAt: {
            type: Date,
            default: Date.now(),
            timestamps: true,
            toJSON: { getters: true, virtuals: true },
        },
        username: {
            type: String,
            required: true,
        },
        reactions: [{

        }]

    }
 
);

userSchema.virtual('reactionCount').get(function (){
    return this.reactions.length
});

const Thought = model('thought', userSchema);
module.exports = Thought;
