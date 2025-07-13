import mongoose from "mongoose";
import User from '../models/user.model.js';
import Message from './message.model.js';
const conversationSchema = new mongoose.Schema({
    participants: [{
        type: mongoose.Schema.Types.ObjectId, ref: 'User'
    },],
    messages: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Message',
        default: []
    },],
},
{
    timestamps: true // Automatically manage createdAt and updatedAt fields
});
const Conversation = mongoose.model('conversation', conversationSchema);
export default Conversation;