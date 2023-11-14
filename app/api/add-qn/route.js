import executeQuerry from "../../../lib/db";

export async function POST(req, res, next) {

    if (req.method == 'POST') {
        const { qn_id, qn_desc, qn_points, qn_output, qn_solution, qn_admin} = await req.json();

        console.log({ qn_id,qn_desc})

        await executeQuerry(
            {
                query: " INSERT INTO QUESTIONS values(?,?,?,?,?,?);",
                values: [
                    qn_id,
                    qn_desc,
                    qn_points,
                    qn_admin,
                    qn_output,
                    qn_solution
                ],
            }
        )
    }
    return new Response("ok" , { status: 200 })
}