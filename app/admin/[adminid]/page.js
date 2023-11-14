"use client"

import Link from "next/link"
import { useParams } from "next/navigation"
export default function Admin() {
    const params = useParams();
    const addqn = `/admin/${params.adminid}/add-qn`
    const delqn = `/admin/${params.adminid}/del-qn`
    const deluser = `/admin/${params.adminid}/del-user`
    const acontest = `/admin/${params.adminid}/acontest`
    return (
        <div>
            <div class="bg-red-400 text-white p-4 shadow-md">
                <h1 class="text-2xl font-semibold">Admin Page</h1>
            </div>

            <div className="flex flex-col items-center space-y-4 p-6 mt-[100px] bg-gray-100 rounded-lg shadow-md">
                <div className="">
                    <Link href={addqn} className="text-blue-900 hover:text-blue-500">Add Question</Link>
                </div>
                <div>
                    <Link href={delqn} className="text-blue-900 hover:text-blue-500">Delete Question</Link>
                </div>
                <div>
                    <Link href={deluser} className="text-blue-900 hover:text-blue-500">Delete User</Link>
                </div>
                <div>
                    <Link href={acontest} className="text-blue-900 hover:text-blue-500">Contest</Link>
                </div>
            </div>
        </div>

    )
}