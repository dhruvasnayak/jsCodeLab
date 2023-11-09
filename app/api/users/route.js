import executeQuerry from "@/lib/db";

export async function GET(req, res, next) {
    const users = await executeQuerry(
        {
            query: "select * from users",
            values: [],
        }
    )
    let data = JSON.stringify(users)
    return new Response(data, { status: 200 })
}

