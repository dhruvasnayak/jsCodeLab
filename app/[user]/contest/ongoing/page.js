"use client"

import React from 'react';
import { useState, useEffect } from 'react'
import Link from 'next/link';

function Ongoing() {

    const [contest, setContest] = useState([]);

    useEffect(() => {
        try {
            fetch('http://localhost:3000/api/contest', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ status: 'Ongoing' }),
            })
                .then((response) => response.json())
                .then((data) => {
                    setContest(data);
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        } catch (error) {
            console.error('Error', error);
        }
    }, []);

    return (
        <div className="m-10">
            {contest.map((i) => (
                <Link href={`ongoing/${i.contest_id}`} key={i.contest_id}>
                    <div className="p-4 m-5 bg-red-200 shadow-md rounded-md transition-transform transform hover:scale-105">
                        <p className="text-xl font-semibold">{i.contest_id}</p>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default Ongoing;
