import { MongoClient } from "mongodb";

const client = new MongoClient(
	'mongodb+srv://root:root@cluster0.rw3cc.mongodb.net/pattern?retryWrites=true&w=majority',
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
	},
);

async function connect(){
    if (!client.isConnected()) await client.connect();
    const db = client.db("pattern");
    return {db, client}
}

export { connect };