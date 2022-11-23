const { Schema, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const reactionSchema = new Schema(
  {
   reactionId: {
    type: Schema.Types.ObjectId,
    default: ObjectId,
    },
    reactionBody: {
        type: String,
        required: true,
        maxlength: 280,
        minlength: 1,
    },
    username: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
        dateFormat,
        // timestamps: true,
        // toJSON: { getters: true, virtuals: true },
    }
  }
);

// We only need to make the schema for this one


module.exports = reactionSchema;
