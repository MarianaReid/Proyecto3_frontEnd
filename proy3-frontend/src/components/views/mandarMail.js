import emailjs from '@emailjs/browser';

export const sendMail = (nombre, email)=>{
    const EMAILJS_SERVICE = process.env.REACT_APP_EMAILJS_SERVICE;
    const EMAILJS_TEMPLATE = process.env.REACT_APP_EMAILJS_TEMPLATE;
    const EMAILJS_PUBLICKEY = process.env.REACT_APP_EMAILJS_PUBLICKEY;

    var templateParams = {
        user_name: nombre,
        message: 'Se pudo registrar exitosamente, muchas gracias.',
        destinatario: email,
        reply_to: 'saboreslatinos131@gmail.com'
    };
    emailjs.send(EMAILJS_SERVICE, EMAILJS_TEMPLATE, templateParams, EMAILJS_PUBLICKEY)
        .then(function(response) {
        }, function(error) {
        });
}

