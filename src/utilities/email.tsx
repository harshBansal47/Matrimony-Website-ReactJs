// import nodemailer from 'nodemailer';
// import Mail from 'nodemailer/lib/mailer';
// import SMTPTransport from 'nodemailer/lib/smtp-transport';

// Create a transport instance
// const transport = nodemailer.createTransport({
//     host: process.env.MAIL_HOST,
//     port: Number(process.env.MAIL_PORT),
//     secure: false, // Use false for TLS
//     auth: {
//         user: process.env.MAIL_USER,
//         pass: process.env.MAIL_PASSWORD,
//     },
// } as SMTPTransport.Options);

// Type definition for sending email
// type SendEmailDto = {
//     sender: Mail.Address;
//     recipient: Mail.Address[];
//     subject: string;
//     message: string;
// };

// Function to send an email
// export const sendEmail = async (dto: SendEmailDto) => {
//     const { sender, recipient, subject, message } = dto;

//     try {
//         const info = await transport.sendMail({
//             from: sender,
//             to: recipient,
//             subject,
//             html: message,
//             text: message,
//         });
//         console.log('Email sent:', info);
//         return info; // Return the info object
//     } catch (error) {
//         console.error('Error sending email:', error);
//         throw new Error('Failed to send email');
//     }
// };
export default function  Email(){
    return (<></>);
}