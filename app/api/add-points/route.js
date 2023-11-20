import executeQuerry from "../../../lib/db";

export async function POST(req, res, next) {

    if (req.method == 'POST') {
        const {uid,qid} = await req.json();

        console.log(uid,qid,"hello world");


        await executeQuerry(
            {
                query: `UPDATE users
                SET user_total_points = user_total_points + (
                    SELECT qton_points
                    FROM questions
                    WHERE qton_id = ?
                )
                WHERE user_id = ?;
                `,
                values: [qid,uid]            }
        )


        return new Response({ status: 200 })
    }
}