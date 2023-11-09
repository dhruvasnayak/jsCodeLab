import executeQuerry from "../../../lib/db";

export async function POST(req, res, next) {

    if (req.method == 'POST') {
        const {id} = await req.json();


        const question = await executeQuerry(
            {
                query: "SELECT * FROM questions where qton_id = ?",
                values: [id],
            }
        )

        return new Response(JSON.stringify(question), { status: 200 })
    }
}