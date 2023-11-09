import executeQuerry from "../../../lib/db";

export async function POST(req, res, next) {

    if (req.method == 'POST') {
        const {id} = await req.json();


        const user = await executeQuerry(
            {
                query: "SELECT * FROM users where user_id = ?",
                values: [id],
            }
        )

        return new Response(JSON.stringify(user), { status: 200 })
    }
}