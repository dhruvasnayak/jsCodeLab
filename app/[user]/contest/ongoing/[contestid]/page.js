"use client"

import CodeMirror from '@uiw/react-codemirror';
import { useParams } from "next/navigation";
import { ToastContainer, toast } from 'react-toastify';
import { useState, useEffect } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';

export default function Contestid() {

    const notify1 = () => toast('TEST CASE PASSED!');
    const notify2 = () => toast("Test Case Failed!");

    const [qnData, setQnData] = useState({});
    const [qnArray, setQnArray] = useState([]);
    const [selectedOption, setSelectedOption] = useState("");
    const [q1solved, setQ1] = useState(false);
    const [q2solved, setQ2] = useState(false);
    const [q3solved, setQ3] = useState(false);

    const params = useParams();
    params.user = decodeURIComponent(params.user);

    const router = useRouter();

    useEffect(() => {
        try {
            fetch('http://localhost:3000/api/contest-question', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id: params.contestid }),
            })
                .then((response) => response.json())
                .then((data) => {
                    setQnArray(data)
                    setQnData(data[0])
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        } catch (error) {
            console.error('Error', error);
        }
    }, []);


    var capturedConsoleOutput;
    const [code, setCode] = useState('console.log("hello world!")');
    const [output, setResult] = useState("");

    const handleChange = (newCode) => {
        setCode(newCode);
    };

    const handleSubmitCode = (e) => {

        try {
            capturedConsoleOutput = '';
            const originalConsoleLog = console.log;

            console.log = (message) => {
                capturedConsoleOutput += message;
            };
            eval(code);
            console.log = originalConsoleLog;

            setResult(capturedConsoleOutput);

        } catch (error) {
            setResult(`Error: ${error.message}`);
        }

        if (qnData.output == capturedConsoleOutput) {

            if (qnData.qton_id == qnArray[0].qton_id) {
                setQ1(true);
            }
            if (qnData.qton_id == qnArray[1].qton_id) {
                setQ2(true);
            }
            if (qnData.qton_id == qnArray[2].qton_id) {
                setQ3(true);

            }
            notify1();


        }
        else {
            notify2();
        }

    }

    const handleEndTest = (e) => {

        let points = 0;

        if (q1solved) {
            points = points + qnArray[0].qton_points;
        }
        if (q2solved) {
            points = points + qnArray[1].qton_points;
        }
        if (q3solved) {
            points = points + qnArray[2].qton_points;
        }

            try {
                const response = fetch('/api/end-test', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ cpoints: points, cid: params.contestid ,uid:params.user}),
                })
            } catch (error) {
                console.error('Registration Failed', error);
            }
        router.push(`/${params.user}/home`);


    }

    const handleRunCode = (e) => {
        try {
            capturedConsoleOutput = '';
            const originalConsoleLog = console.log;
            console.log = (message) => {
                capturedConsoleOutput += message;
            };
            eval(code);

            console.log = originalConsoleLog;

            setResult(capturedConsoleOutput);

        } catch (error) {
            setResult(`Error: ${error.message}`);
        }


    };

    const handleSelectChange = (event) => {
        if (event.target.value == "1") {
            setQnData(qnArray[0]);
            setSelectedOption("1");
        }
        if (event.target.value == "2") {
            setQnData(qnArray[1]);
            setSelectedOption("2");

        }
        if (event.target.value == "3") {
            setQnData(qnArray[2]);
            setSelectedOption("3");

        }
    };


    return (
        <div>
            <div className='main bg-gray-400'>
                <div className='flex'>
                    <div>

                        <select
                            className="relative left-5 mt-1 bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                            value={selectedOption}
                            onChange={handleSelectChange}
                        >
                            <option value="1">Question 1</option>
                            <option value="2">Question 2</option>
                            <option value="3">Question 3</option>
                        </select>

                        <textarea className='w-[350px] m-1 h-[220px] border-solid border-8' value={qnData.qton_description} >
                        </textarea>
                        <textarea className='w-[350px] m-2 h-[230px] border-solid border-8' placeholder='output' readOnly value={output}>
                        </textarea>
                    </div>
                    <div className='m-2  '>

                        <CodeMirror className='code-box'
                            width='840px'
                            height='460px'
                            value={code}
                            options={{
                                mode: 'js',
                                theme: 'dracula',
                            }}
                            onChange={handleChange}
                        />
                        <div className='flex justify-around'>
                            <div className='flex justify-center m-2'>
                                <div onClick={handleRunCode} className='border-solid border-2 bg-green-500 text-white border-black rounded-lg w-[200px] p-1 text-center '>
                                    <button >Run</button>
                                </div>
                            </div>
                            <div className='flex justify-center m-2'>
                                <div onClick={handleSubmitCode} className='border-solid border-2 bg-blue-500 text-white border-black rounded-lg w-[200px] p-1 text-center '>
                                    <button >Submit</button>
                                </div>
                            </div>
                            <div className='flex justify-center m-2'>
                                <div onClick={handleEndTest} className='border-solid border-2 bg-red-500 text-white border-black rounded-lg w-[200px] p-1 text-center '>
                                    <button >End Contest</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>


                <ToastContainer />

            </div>
        </div>
    )

}