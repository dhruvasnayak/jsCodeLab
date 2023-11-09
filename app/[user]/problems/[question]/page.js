"use client"

import CodeMirror from '@uiw/react-codemirror';
import { useParams } from "next/navigation";
import { ToastContainer, toast } from 'react-toastify';
import { useState, useEffect } from 'react';
import 'react-toastify/dist/ReactToastify.css';


function Code() {

    const notify1 = () => toast('TEST CASE PASSED!');
    const notify2 = () => toast("Test Case Failed!");

    const params = useParams()

    const [qnData,setQnData] = useState({}); 

    useEffect(() => {
        try {
          const response = fetch('/api/get-question', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id: params.question }),
          })
            .then(response => response.json())
            .then(data => {
              console.log("Fetched question data: ", data[0]); 
              setQnData(data[0]);
            })
            .catch(error => {
              console.error('Error:', error);
            });
        } catch (error) {
          console.error('Registration Failed', error);
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
            notify1();
        }
        else {
            notify2();
        }

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


    return (
        <div className='main bg-gray-400'>
            <div className='flex'>
                <div>
                    <textarea className='w-[350px] m-2 h-[240px] border-solid border-8' value={qnData.qton_description} >
                    </textarea>
                    <textarea className='w-[350px] m-2 h-[240px] border-solid border-8' placeholder='output' readOnly value={output}>
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
                            <div onClick={handleRunCode} className='border-solid border-2 bg-green-500 text-white border-black rounded-lg w-[300px] p-1 text-center '>
                                <button >Run</button>
                            </div>
                        </div>
                        <div className='flex justify-center m-2'>
                            <div onClick={handleSubmitCode} className='border-solid border-2 bg-blue-500 text-white border-black rounded-lg w-[300px] p-1 text-center '>
                                <button >Submit</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className='flex justify-center'>
                <div >

                </div>
            </div>

            <ToastContainer />


        </div>
    );
}

export default Code;