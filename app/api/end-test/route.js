import executeQuerry from "../../../lib/db";

export async function POST(req, res, next) {
    if (req.method === 'POST') {
        const { cpoints,cid,uid } = await req.json();

        await executeQuerry({
            query: "INSERT contest_rank values (?,?,?);",
            values: [uid,cid,cpoints]
        });

        return new Response("ok", { status: 200 });
    }
}
