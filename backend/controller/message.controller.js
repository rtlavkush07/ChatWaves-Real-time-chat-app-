
import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";


export const sendMessage = async (req, res) => {

    // console.log("send  message from message controller",req.params.id);
    // console.log("send  message from message controller",req.body.message);


    try {
         const {message } = req.body;
         const {id: receiverId} = req.params;
         const senderId = req.user._id; // current loggedin user

         let conversation = await Conversation.findOne({
            participants: { $all: [senderId, receiverId] }
         });
         if(!conversation) {
            // Create a new conversation if it doesn't exist
            conversation = await Conversation.create({
                participants: [senderId, receiverId],
            });
        }

            const newMessage = new Message({
                senderId,
                receiverId,
                message
            });
            if(newMessage)
            {
                conversation.messages.push(newMessage._id);
            }
            await Promise.all([conversation.save(),newMessage.save()]);
            res.status(201).json({message: "Message sent successfully",newMessage})
         

    } catch (error) {
        console.error("Error sending message:", error);
        res.status(500).json({ error: "Internal server error" });
        
    }
}



export const getMessage = async (req, res) => {
    try {

        const {id: chatuser} = req.params;
        const senderId = req.user._id; // current loggedin user
        const conversation = await Conversation.findOne({
            participants: { $all: [senderId, chatuser] }
        }).populate('messages');

        if (!conversation) {
            return res.status(404).json([]);
        }
        const messages = conversation.messages;

        res.status(201).json( messages );
        
    } catch (error) {
        console.error("Error getting messages:", error);
        res.status(500).json({ error: "Internal server error" });
        
    }

}