"use client"

import { useState } from "react";
import { useParams } from 'next/navigation';

export default function DelQN() {

    const params = useParams();

    const [qnData, setFormData] = useState({
        qn_id: "",
        qn_admin: params.adminid
    })

    const handelChange = (e) => {

        const { name, value } = e.target;
        setFormData({ ...qnData, [name]: value })
    }

    const handelSubmit = async (e) => {

        const temp = qnData;
        console.log(qnData)

        e.preventDefault();
        try {
            const response = await fetch('/api/del-qn', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(temp),
            })
                .then(data => {
                    console.log(data)
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        } catch (error) {
            console.error('Failed', error);
        }

        setFormData(
            {
                qn_id: "",
                qn_admin: params.adminid
            }
        )

    }
    return(
        <div className="p-6 mt-5 max-w-[900px] mx-auto bg-red-300 rounded-md shadow-md">
        <form className="space-y-4" onSubmit={handelSubmit}>
            <div>
                <label htmlFor="questionId" className="block text-sm font-medium text-gray-700">
                    Question ID
                </label>
                <input
                    type="text"
                    id="qn_id"
                    name="qn_id"
                    value={qnData.qn_id}
                    className="mt-1 p-2 w-full border rounded-md"
                    placeholder="Enter question ID"
                    onChange={handelChange}
                />
            </div>
            <div className="flex items-center justify-end">
                    <button
                        type="submit"
                        className="px-4 py-2 w-[250px] text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-700"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    )
}