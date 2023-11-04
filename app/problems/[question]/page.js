"use client"

import { useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import "./Code.css"

function Code() {
    const [code, setCode] = useState('console.log("hello world!")');
    const [input, setInput] = useState('');
    const [output, setResult] = useState("");

    const handleChange = (newCode) => {
        setCode(newCode);
    };

    const handleInputChange = (e) => {
        console.log(e.target.value)
        setInput(e.target.value);
    };

    const handleRunCode = (e) => {
        try {
            let capturedConsoleOutput = '';
            const originalConsoleLog = console.log;
            // Override console.log to capture output
            console.log = (message) => {
                capturedConsoleOutput += message + '\n'; // Append console output to the variable
            };

            // Execute the JavaScript code
            eval(code);

            // Restore the original console.log function
            console.log = originalConsoleLog;

            setResult(capturedConsoleOutput); // Set the captured output as the result
        } catch (error) {
            setResult(`Error: ${error.message}`);
        }

    };


    return (
        <div className='main'>
            <div className='flex'>
                <div className='w-[500px] m-5 border-solid border-2 border-black'>
                    <p>write a code to find all the prime numbers from 2 lo n</p>
                    <br />
                    <p>n is less then 1000</p>
                </div>
                <div className='m-5'>
                    <CodeMirror className='code-box'
                        width='700px'
                        height='500px'
                        value={code}
                        options={{
                            mode: 'js',
                            theme: 'dracula',
                        }}
                        onChange={handleChange}
                    />
                    <div className='flex justify-center'>
                        <div className='border-solid border-2 border-black rounded-lg w-[500px] text-center '>
                            <button onClick={handleRunCode}>Run</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex justify-center'>
                <div >
                    <textarea className='border-solid border-2 border-gray-900 ' placeholder='output' rows={14} cols={70} readOnly value={output} style={{ whiteSpace: 'pre-wrap' }} >
                    </textarea>
                </div>
            </div>
        </div>
    );
}

export default Code;