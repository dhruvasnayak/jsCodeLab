"use client"
import React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';


export default function Register() {

    const router = useRouter();

    const [formData, setFormData] = useState({
        id: "",
        name: "",
        email: "",
        phone: "",
        password: ""
    })

    const handelChange = (e) => {

        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    }

    const handelSubmit = async (e) => {

        setFormData(
            {
                id: "",
                name: "",
                email: "",
                phone: "",
                password: ""
            })

        e.preventDefault();
        try {
            const response = await fetch('/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                router.push('/');
                console.log('Registration successful');
            } else {
                console.error('Registration failed');
            }
        } catch (error) {
            console.error('An error occurred during registration:', error);
        }

    }

    return (
        <div>
        <div className="bg-gray-600 p-4">
          <div className="flex items-center justify-between">
            <div className="text-white text-2xl font-bold">jsCodeLab</div>
            <div>
              <Link href="/" className="text-white hover:text-gray-300">Login</Link>
            </div>
          </div>
        </div>
        <div className="min-h-screen flex items-center justify-center">
            <div className="bg-white shadow-md p-8 rounded-md w-96">
                <h2 className="text-2xl font-bold mb-4">Register</h2>
                <form onSubmit={handelSubmit}>
                    <div className="mb-4">
                        <input type="text"
                            className="w-full p-2 border rounded"
                            placeholder="Name"
                            maxLength={15}
                            required
                            name="name"
                            value={formData.name}
                            onChange={handelChange} />
                    </div>
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
                        <input type="email"
                            className="w-full p-2 border rounded"
                            placeholder="Email"
                            required
                            name="email"
                            value={formData.email}
                            onChange={handelChange} />
                    </div>
                    <div className="mb-4">
                        <input type="tel"
                            className="w-full p-2 border rounded"
                            maxLength={10}
                            required
                            placeholder="Phone Number"
                            name="phone"
                            value={formData.phone}
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
                        Register
                    </button>
                </form>
            </div>
        </div>
        </div>
    );
}
