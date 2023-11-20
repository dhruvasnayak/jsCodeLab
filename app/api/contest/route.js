import executeQuerry from "../../../lib/db";

export async function POST(req, res, next) {

    if (req.method == 'POST') {
        const {status} = await req.json();


        const user = await executeQuerry(
            {
                query: "select contest_id from contest where contest_start <= NOW() AND contest_end >= NOW();",
            }
        )
        return new Response(JSON.stringify(user), { status: 200 })
    }
}