import Cors from 'cors';
var MongoClient = require('mongodb').MongoClient;
const nodemailer = require('nodemailer');


  // Initializing the cors middleware
  const cors = Cors({
    methods: ['GET', 'HEAD'],
  })

function runMiddleware(req, res, fn) {
    return new Promise((resolve, reject) => {
      fn(req, res, (result) => {
        if (result instanceof Error) {
          return reject(result)
        }
  
        return resolve(result)
      })
    })
  }
  
  async function handler(req, res) {
    await runMiddleware(req, res, cors)

	const { firstName, lastName, email, phoneNumber, address, message, appointmentType} = req.body;


	const transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: 'mtu.esmmusic20@gmail.com',
			pass: 'Esmmusic2020',
		},
	});

	const mailOption = {
		from: `${firstName} ${lastName}`,
		to: `tailormade@patternandproduce.com`,
		subject: `New Appointment`,
		text: `
    	First Name:	${firstName}
		Last Name:	${lastName}
		Email Address: ${email}
		Phone Number: ${phoneNumber}
		Address: ${address}
		Message: ${message}
		Appointment Type: ${appointmentType}
    `,
	};

	transporter.sendMail(mailOption, (err, data) => {
		if (err) {
			console.log(err);
		} else {
			res.send('success');
		}
	});
};

export default handler;
