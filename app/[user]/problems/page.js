"use client"

import Link from "next/link";
import { useEffect, useState } from "react";


export default function Problems() {

    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        fetch("/api/questions")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((data) => {
                setQuestions(data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);


    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 my-5 mx-10 gap-4">
            {questions.map((i) => (
                <Link href={`problems/${i.qton_id}`} key={i.qton_id}>
                    <div className="border border-gray-300 hover:border-blue-500 shadow-lg rounded-md p-4 cursor-pointer">
                        <div className="bg-gray-100 p-2 rounded-t-md">
                            <div className="text-xl font-semibold text-gray-800">{i.qton_id}</div>
                        </div>
                        <div className="bg-white p-4">
                            <div className="text-gray-600">{i.qton_points} points</div>
                        </div>
                    </div>
                </Link>
            ))}
        </div>

    )
}