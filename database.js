const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GroupMessageSchema = new Schema({
    groupId: {
        type: String,
        required: true
    },
    senderId: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
});

GroupMessageSchema.index({ groupId: 1 });
GroupMessageSchema.index({ senderId: 1 });
GroupMessageSchema.index({ timestamp: 1 });

module.exports = mongoose.model("GroupMessages", GroupMessageSchema);