"use client"
import React from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';

export default function Contest() {

    const params = useParams();
    params.user = decodeURIComponent(params.user);

    const ongoing = `/${params.user}/contest/ongoing` 
    const ended = `/${params.user}/contest/ended` 
    const upcoming = `/${params.user}/contest/upcoming` 
    return (
        <div className="flex flex-col space-y-4 mt-10 mx-5">
            <Link href={ongoing} className="bg-red-300 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded">
                Ongoing
            </Link>
            <Link href={ended} className="bg-red-400 hover:bg-green-500 text-white font-bold py-2 px-4 rounded">
                Ended
            </Link>
            <Link href={upcoming} className="bg-red-500 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded">
                Upcoming
            </Link>
        </div>
    );
}
