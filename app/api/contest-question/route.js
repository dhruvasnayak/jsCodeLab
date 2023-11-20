import executeQuerry from "../../../lib/db";

export async function POST(req, res, next) {
    if (req.method === 'POST') {
        const { id } = await req.json();

        const questions = await executeQuerry({
            query: `
                SELECT *
                FROM questions
                WHERE qton_id IN (
                    SELECT q1 FROM contest WHERE contest_id = '${id}'
                    UNION
                    SELECT q2 FROM contest WHERE contest_id = '${id}'
                    UNION
                    SELECT q3 FROM contest WHERE contest_id = '${id}'
                );
            `,
        });

        return new Response(JSON.stringify(questions), { status: 200 });
    }
}
