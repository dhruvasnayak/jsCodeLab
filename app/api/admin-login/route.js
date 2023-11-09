import executeQuerry from "../../../lib/db";

export async function POST(req, res, next) {

    if (req.method == 'POST') {
        const {id,password} = await req.json();

        const admin = await executeQuerry(
            {
                query: "SELECT * FROM admin where admin_id = ?",
                values: [id],
            }
        )

        return new Response(JSON.stringify(admin), { status: 200 })
    }
}