"use client"
import React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Login() {

  const router = useRouter();

  const [formData, setFormData] = useState({
    id: "",
    password: ""
  })

  const handelChange = (e) => {

    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value })
  }

  const handelSubmit = async (e) => {

    const temp = formData

    e.preventDefault();
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
        .then(response => response.json())
        .then(data => {
          if (data[0].user_id == temp.id && data[0].user_password == temp.password) {

            router.push(`/${data[0].user_id}/home`);
            console.log("logged")
          }
          else {
            console.log("not logged")
          }
        })
        .catch(error => {
          console.error('Error:', error);
        });
    } catch (error) {
      console.error('Registration Failed', error);
    }

    setFormData(
      {
        id: "",
        password: ""
      })

  }

  return (
    <div>
      <div className="bg-gray-600 p-4">
        <div className="flex items-center justify-between">
          <div className="text-white text-2xl font-bold">jsCodeLab</div>
          <div>
            <Link href="/register" className="text-white hover:text-gray-300">Register</Link>
          </div>
        </div>
      </div>

      <div className="min-h-screen flex items-center justify-center">

        <div className="bg-white shadow-md p-8 rounded-md w-96">
          <h2 className="text-2xl font-bold mb-4">Login</h2>
          <form onSubmit={handelSubmit}>
            <div className="mb-4">
              <input type="text"
                className="w-full p-2 border rounded"
                placeholder="id"
                maxLength={10}
                required
                name="id"
                value={formData.id}
                onChange={handelChange} />
            </div>
            <div className="mb-4">
              <input type="password"
                className="w-full p-2 border rounded"
                maxLength={10}
                required
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handelChange} />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
