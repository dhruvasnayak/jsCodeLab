import executeQuerry from "../../../lib/db";

export async function POST(req, res, next) {

    if (req.method == 'POST') {
        const { cn_id, cn_start, cn_end, q1, q2, q3, qn_admin} = await req.json();

        await executeQuerry(
            {
                query: " INSERT INTO contest values(?,?,?,?,?,?,?);",
                values: [
                    cn_id,
                    cn_start,
                    cn_end,
                    q1,
                    q2,
                    q3,
                    qn_admin
                ],
            }
        )
    }
    return new Response("ok" , { status: 200 })
}