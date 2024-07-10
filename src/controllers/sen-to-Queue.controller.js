import express from 'express';

import sendMailToQueue from '../services/send-to-Queue.service.js';

const sendToQueueController = async (req, res) => {
    const { to, subject, text, link } = req.body;
    const data = { to, subject, text, link }

    
    try {
        const send = await sendMailToQueue(data);
        if(send.error) return res.status(send.error).json({ message: send.message });

        return res.status(200).json({ message: send.message });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export default sendToQueueController;






