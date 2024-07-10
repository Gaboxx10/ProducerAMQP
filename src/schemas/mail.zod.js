import {z} from 'zod';


const mail = z.object({
    to: z.array(z.string().email({message: 'Invalid email address.'})),
    subject: z.string().optional(),
    text: z.string().optional(),
    link: z.string().url({message: "Invalid URL"}).optional(),
})

export default mail;



