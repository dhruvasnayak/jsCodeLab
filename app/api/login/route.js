import executeQuerry from "../../../lib/db";

export async function POST(req, res, next) {

    if (req.method == 'POST') {
        const {id,password} = await req.json();

        console.log(id)

        const user = await executeQuerry(
            {
                query: "SELECT * FROM users where user_id = ?",
                values: [id],
            }
        )

        console.log(user[0]);

        return new Response(JSON.stringify(user), { status: 200 })
    }
}