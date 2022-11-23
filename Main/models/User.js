const { Schema, model } = require('mongoose');

const userSchema = new Schema(
 {
    username: {
        type: String,
        unique: true, 
        required: true,
        trimmed: true,
    },
        email: {
            type: String,  
            unique: true, 
            required: true,
            match: [/^([a-z0-9_*\.*-]+)@([\da-z*\.*-]+)*\.*([a-z*\.*]{2,6})$/,"Must match an email address!"]
        },
        thoughts: [{
            type: User.Schema.Types.ObjectId,
            ref: 'Thought'
            },
         ],
        friends: [{
            type: User.Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    },
);
userSchema.virtual('friendCount').get(function (){
    return this.friends.length
});

const User = model('user', userSchema);

module.exports = User;
