"use client"

import React from 'react';
import { useState, useEffect } from 'react'


const Ended = () => {
    const [questions, setQuestions] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('/api/ended');
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
    
            const data = await response.json();
            setQuestions(data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, []);
    return (
        <div className="m-10">
            {questions.map((i) => (
                    <div key={i.contest_id} className="p-4 m-5 bg-red-200 shadow-md rounded-md transition-transform transform hover:scale-105">
                        <p className="text-xl font-semibold">{i.contest_id}</p>
                    </div>
            ))}
        </div>
    );
};

export default Ended;
