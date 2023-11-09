import executeQuerry from "@/lib/db";

export async function GET(req, res, next) {
    const questions = await executeQuerry(
        {
            query: "select * from questions",
            values: [],
        }
    )
    let data = JSON.stringify(questions)

    return new Response(data, { status: 200 })
}

