"use client"

import React from 'react';
import { useParams } from "next/navigation";
import { useState, useEffect } from 'react'

export default function Profile() {

  const params = useParams()
  const [userData,setUserData] = useState({}); 
  useEffect(()=>{
  try {
    const response = fetch('/api/get-user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({id:params.user}),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data[0])
        setUserData(data[0])
      })
      .catch(error => {
        console.error('Error:', error);
      });
  } catch (error) {
    console.error('Registration Failed', error);
  }
},[]);

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="relative bg-white w-full md:w-2/3 lg:w-1/2 rounded-lg p-8 transform hover:scale-105 transition-transform shadow-2xl">
        <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-6">User Profile</h1>

        <div className="space-y-4">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">User Information</h2>
            <ul className="text-lg text-gray-600">
              <li>
                <strong>User ID:</strong> {params.user}
              </li>
              <li>
                <strong>User Name:</strong> {userData.user_name}
              </li>
              <li>
                <strong>Total Points:</strong> {userData.user_total_points}
              </li>
              <li>
                <strong>Email:</strong> {userData.user_gmail}
              </li>
              <li>
                <strong>Phone Number:</strong> {userData.user_ph_no}
              </li>

            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
