import executeQuerry from "../../../lib/db";

export async function POST(req, res, next) {

    if (req.method == 'POST') {
        const { qn_id,qn_admin} = await req.json();

        console.log({ qn_id,qn_admin})

        await executeQuerry(
            {
                query: "CALL DeleteQuestion(?,?);",
                values: [
                    qn_id,
                    qn_admin,
                ],
            }
        )
    }
    return new Response("ok" , { status: 200 })
}