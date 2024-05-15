import express from 'express';

import Message from '../models/message';

const messager = express();

messager.post('/message', async (req, res) => {
    const { value, textvalue } = req.body;

    const msg = new Message({ number: value, textvalue });

    try {
        const savedMessage = await msg.save();

        res.status(201).json({ message: 'Message saved successfully', data: savedMessage });
    } catch (error) {
        res.status(500).json({ message: 'Error saving message', error });
    }
});

messager.get('/message/fdsafghjkhgfdsfg/fdsafghjkhgfdsfg', async (req, res) => {
    const msgs = await Message.find();

    res.status(201).json({ message: 'Messages found', data: msgs, length: msgs.length });    
})

export default messager;