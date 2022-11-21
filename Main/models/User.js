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
            required: 'Email address is required',
            validate: [validateEmail, 'Please fill a valid email address'],
            match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
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

// Make model of User
const User = model('user', userSchema);

module.exports = User;
