import executeQuerry from "../../../lib/db";

export async function POST(req, res, next) {

    if (req.method == 'POST') {
        const {uid,qid} = await req.json();

        console.log(uid,qid);


        await executeQuerry(
            {
                query: `UPDATE users 
                        SET user_total_points = (select qton_points from questions where qton_id = ?)
                        where user_id=?`,
                values: [uid,qid],
            }
        )


        return new Response({ status: 200 })
    }
}