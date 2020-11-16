// require('dotenv').config();
const nodemailer = require('nodemailer');

export default (req, res) => {
	const { firstName, lastName, email } = req.body;

	const transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: 'joshuaoluikpe@gmail.com',
			pass: '@mabelizu007$$',
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
};
