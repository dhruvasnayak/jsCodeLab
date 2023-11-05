"use client"

import { useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';

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
        <div className='main bg-gray-400'>
            <div className='flex'>
                <textarea className='w-[350px] h-[525px] m-5 border-solid border-8 '>
                    write a code to find all the prime numbers from 2 lo n
                </textarea>
                <div className='ml-5'>
                    <div className='flex justify-center m-2 ml-[600px]'>
                        <div onClick={handleRunCode} className='border-solid border-2 bg-gray-500 text-white border-black rounded-lg w-[200px] text-center '>
                            <button >Run</button>
                        </div>
                    </div>
                    <CodeMirror className='code-box'
                        width='800px'
                        height='500px'
                        value={code}
                        options={{
                            mode: 'js',
                            theme: 'dracula',
                        }}
                        onChange={handleChange}
                    />

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