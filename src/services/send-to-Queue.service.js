import sendToQueue from "../rabbitmq/amqp.produce.js";

import mailTemplate from "../templates/mail.template.js";


const sendMailToQueue = async (data) => {
    let { to, subject, text, link } = data;
    if (!subject) {
        subject = "Sin Asunto"
    }
    if(!text){
        text = ""
    }
    
    const duplicate = new Set(to);
    const consumers = [...duplicate];

    try {
        consumers.forEach(async (consumer) => {
            const message = mailTemplate(consumer, subject, text, link);
            const data = {
                to: consumer,
                subject: subject,
                html: message
            }
        
            const sent = await sendToQueue(data);
            console.log("Message sent to queue")
        });

        if (consumers.length > 1) {
            return ({
                ok: 200,
                message:" Emails were sent to the queue successfully"
            })
        } if (consumers.length === 1) {
            return ({
                ok: 200,
                message: "An email was sent correctly"
            })
        }
    } catch (error) {
        console.log("Error ->", error)
        return ({
            error: 400,
            message: error.message
        })
    }

}

export default sendMailToQueue;