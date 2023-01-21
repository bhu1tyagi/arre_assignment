const express = require("express");
const mongoose = require("mongoose");
const GroupMessage = require("../models/GroupMessage");
const router = express.Router();

router.get("/group/:id/messages", async (req, res) => {
    const groupId = req.params.id;
    const page = req.query.page || 1;
    const limit = req.query.limit || 10;
    const messages = await GroupMessage.find({ groupId })
        .sort({ timestamp: -1 })
        .skip((page - 1) * limit)
        .limit(limit)
        .exec();
    res.json({ messages });
});

router.post("/group/:id/message", async (req, res) => {
    const groupId = req.params.id;
    const senderId = req.body.senderId;
    const message = req.body.message;
    const timestamp = new Date();
    const newMessage = new GroupMessage({ groupId, senderId, message, timestamp });
    await newMessage.save();
    res.json({ message: "Message sent successfully", newMessage });
});

module.exports = router;
