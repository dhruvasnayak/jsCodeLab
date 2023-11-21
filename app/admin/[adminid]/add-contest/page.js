"use client"

import { useState } from "react";
import { useParams } from 'next/navigation';


export default function AddCn() {

    const params = useParams();

    const [cnData, setFormData] = useState({
        cn_id: "",
        cn_start: "",
        cn_end: "",
        q1: "",
        q2: "",
        q3:"",
        admin: params.adminid
    })

    const handelChange = (e) => {

        const { name, value } = e.target;
        setFormData({ ...cnData, [name]: value })
    }

    const handelSubmit = async (e) => {

        const temp = cnData;

        e.preventDefault();
        try {
            const response = await fetch('/api/add-contest', {
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
                cn_id: "",
                cn_start: "",
                cn_end: "",
                q1: "",
                q2: "",
                q3:"",
                admin: params.adminid
            }
        )


    }

    return (
        <div className="p-6 mt-5 max-w-[900px] mx-auto bg-red-300 rounded-md shadow-md">
            <form className="space-y-4" onSubmit={handelSubmit}>
                <div>
                    <label htmlFor="contestId" className="block text-sm font-medium text-gray-700">
                        Contest ID
                    </label>
                    <input
                        type="text"
                        id="cn_id"
                        name="cn_id"
                        value={cnData.cn_id}
                        className="mt-1 p-2 w-full border rounded-md"
                        placeholder="Enter question ID"
                        onChange={handelChange}
                    />
                </div>
                <div>
                    <label htmlFor="cnstart" className="block text-sm font-medium text-gray-700">
                        Contest Start Date and Time
                    </label>
                    <input
                        type="text"
                        id="cn_start"
                        name="cn_start"
                        value={cnData.cn_start}
                        className="mt-1 p-2 w-full border rounded-md"
                        placeholder="Enter question points"
                        onChange={handelChange}
                    />
                </div>
                <div>
                    <label htmlFor="cnend" className="block text-sm font-medium text-gray-700">
                        Contest End Date and Time
                    </label>
                    <input
                        type="text"
                        id="cn_end"
                        name="cn_end"
                        value={cnData.cn_end}
                        className="mt-1 p-2 w-full border rounded-md"
                        placeholder="Enter question description"
                        onChange={handelChange}
                    />
                </div>
            
                <div>
                    <label htmlFor="q1" className="block text-sm font-medium text-gray-700">
                        Questio 1 ID
                    </label>
                    <input
                        type="text"
                        id="q1"
                        name="q1"
                        value={cnData.q1}
                        className="mt-1 p-2 w-full border rounded-md"
                        placeholder="Enter solution"
                        onChange={handelChange}
                    />
                </div>
                <div>
                    <label htmlFor="q2" className="block text-sm font-medium text-gray-700">
                        Questio 2 ID
                    </label>
                    <input
                        type="text"
                        id="q2"
                        name="q2"
                        value={cnData.q2}
                        className="mt-1 p-2 w-full border rounded-md"
                        placeholder="Enter solution"
                        onChange={handelChange}
                    />
                </div>
                <div>
                    <label htmlFor="q3" className="block text-sm font-medium text-gray-700">
                        Questio 3 ID
                    </label>
                    <input
                        type="text"
                        id="q3"
                        name="q3"
                        value={cnData.q3}
                        className="mt-1 p-2 w-full border rounded-md"
                        placeholder="Enter solution"
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
    );
}
