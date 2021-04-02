import { NextApiRequest, NextApiResponse } from "next";
import { connect } from "../../../utils/database";

export default async function (req: NextApiRequest, res: NextApiResponse){
    console.log(req.body);
    const {db} = await connect ();
    const{
        mail:{mail},
    }= req.body;

    console.log(mail);

    const result = await db.collection("newsletter").insertOne({mail})

    console.log(result.ops[0]);

    res.json({});
}