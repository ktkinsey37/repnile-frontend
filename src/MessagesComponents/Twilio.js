const accountSid = process.env.TWILIO_ACCOUNT_SID || "AC59936668b332431d86d03ee5e082d4c1";
const authToken = process.env.TWILIO_AUTH_TOKEN || "318380700f0a3b54f4b2d383cdd38d28";
const client = require('twilio')(accountSid, authToken);
const dinaPhoneNumber = "+17049414486"
const twilioDemoNumber = "+16199431015"
const kevinPhoneNumber = "+17245133578"

// Dina: 704-941-4486
// Twilio demo #: 1-619-943-1015

client.messages
  .create({
     body: 'Yo, can i buy some lizard tho?',
     from: twilioDemoNumber,
     to: dinaPhoneNumber
   })
  .then(message => console.log(message));