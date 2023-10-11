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
            let capturedConsoleOutput = ''; // Initialize an empty string to capture console output
            const originalConsoleLog = console.log; // Store the original console.log function
      
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
        <div className='navbar'>
        <div className='webname'>
            <p>Java<span>Script</span></p>
        </div>
        <div className='temp'>
            <div className='run-button'>
                <button onClick={handleRunCode}>Run</button>
            </div>

        </div>
    </div>
            <div className='container'>
            <div className='container-left'>
            <CodeMirror className='code-box'
                width='100%'
                height='480px'
                value={code}
                options={{
                    mode: 'js',
                    theme: 'dracula',
                }}
                onChange={handleChange}
            />
        </div>
                <div className='container-right'>
                    <div className='output-box'>
                        <textarea placeholder='output' rows={14} cols={30} readOnly value={output} style={{ whiteSpace: 'pre-wrap' }} >
                        </textarea>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Code;