"use client"

import { useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';

function Code() {

    const qnData = {
       qnid:1,
       qndesc:"print hello world!",
       qnout:"hello world!"
      };

      
    const [code, setCode] = useState('console.log("hello world!")');
    const [input, setInput] = useState('');
    const [output, setResult] = useState("");
    const [temp,setTemp] = useState(null);

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

            setResult(capturedConsoleOutput);
            
            if(qnData.qnout==capturedConsoleOutput)
            {
                setTemp(1);

            }
        } catch (error) {
            setResult(`Error: ${error.message}`);
        }

    };


    return (
        <div className='main bg-gray-400'>
            <div className='flex'>
                <textarea value={qnData.qndesc} className='w-[350px] h-[515px] m-2 border-solid border-8 '>
                </textarea>
                <div className='mt-2 ml-5'>
                    
                    <CodeMirror className='code-box'
                        width='800px'
                        height='460px'
                        value={code}
                        options={{
                            mode: 'js',
                            theme: 'dracula',
                        }}
                        onChange={handleChange}
                    />

                    <div className='flex justify-center m-2'>
                        <div onClick={handleRunCode} className='border-solid border-2 bg-blue-400 text-white border-black rounded-lg w-[700px] p-1 text-center '>
                            <button >Run</button>
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
            
            {temp &&  <div> helllo world </div>}
               
            
        </div>
    );
}

export default Code;