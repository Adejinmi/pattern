// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default (req, res) => {
//   res.statusCode = 200
//   res.json({ name: 'John Doe' })
// }

import nextConnect from 'next-connect';
import middleware from '../../../middleware/database';

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {
	const {
		query: { fabricId },
	} = req;

	let data = await req.db.collection('fabric').findOne({ name: fabricId });

	res.status(200).json({ data, success: true });
});

export default handler;
