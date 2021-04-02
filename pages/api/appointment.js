// require('dotenv').config();
import nextConnect from 'next-connect';
const nodemailer = require('nodemailer');

const handler = nextConnect();

handler.post(async (req, res) => {
	const { firstName, lastName, email } = req.body;

	const transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: 'adejinmisamuel1@gmail.com',
			pass: 'Sammyaddy@1234',
		},
	});

	const mailOption = {
		from: `joshuaoluikpe@gmail.com`,
		to: `${email}`,
		subject: `Testing`,
		text: `
    ${firstName} wrote:
    ${lastName}
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
