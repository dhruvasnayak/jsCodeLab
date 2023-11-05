import executeQuerry from "../../../lib/db";

export async function POST(req, res, next) {

    if (req.method == 'POST') {
        const { id, name, email, phone, password } = await req.json();

        console.log({ id, name, email, phone, password })

        await executeQuerry(
            {
                query: "INSERT INTO users (user_id, user_name, user_total_points, user_gmail, user_ph_no, user_password, admin_id) VALUES (?,?,?,?,?,?,?);",
                values: [
                    id,
                    name,
                    100,
                    email,
                    phone,
                    password,
                    'admin123'
                ],
            }
        )
    }
    return new Response("ok", { status: 200 })
}