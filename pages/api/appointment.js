// require('dotenv').config();
import nextConnect from 'next-connect';
const nodemailer = require('nodemailer');

const handler = nextConnect();

handler.post(async (req, res) => {
	const { firstName, lastName, email, phoneNumber, address, message, appointmentType} = req.body;


	const transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: 'adejinmisamuel1@gmail.com',
			pass: 'ade12345',
		},
	});

	const mailOption = {
		from: `appointment@patternandproduce.com`,
		to: `${email}`,
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
			console.log(name, email, text);
			res.send('success');
		}
	});
});

export default handler;
