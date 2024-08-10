import React, { useState } from 'react';

export default function VPage() {
        // State variables for Vd, Vt, and the result
        const [Vd, setVd] = useState('');
        const [Vt, setVt] = useState('');
        const [result, setResult] = useState(null);
    
        // Event handlers for input changes
        const handleVdChange = (event) => {
            setVd(event.target.value);
        };
    
        const handleVtChange = (event) => {
            setVt(event.target.value);
        };
    
        // Function to calculate the result
        const calculateV = () => {
            const vdValue = parseFloat(Vd);
            const vtValue = parseFloat(Vt);
    
            if (!isNaN(vdValue) && !isNaN(vtValue) && vtValue !== 0) {
                const v = vdValue / vtValue;
                setResult(v);
            } else {
                setResult('Invalid input'); // Handle invalid cases
            }
        };
    return (
        <>
            <h1 className='has-text-white has-text-weight-bold'>Solving for V!</h1>
            <h1 className='has-text-white has-text-weight-medium is-size-2'>V = d/t</h1>
                <div className="field">
                <label className="label has-text-white ">V</label>
                    <div className="control">
                    <input className="input column is-1" type="number" placeholder="?" disabled/>
                </div>
                    <label className="label has-text-white">d</label>
                    <div className="control">
                        <input className="input column is-2" type="number" value={Vd} onChange={handleVdChange} name="Vd" placeholder="d ="/>
                    </div>
                    <label className="label has-text-white">t</label>
                    <div className="control">
                        <input className="input column is-2" type="number" value={Vt} onChange={handleVtChange} name="Vt" placeholder="t ="/>
                    </div>
                </div>
                <div className="field">
                <div className="control">
                    <button className="button is-link" onClick={calculateV}>Calculate V!</button>
                </div>
            </div>
            {result !== null && (
                <div className="field">
                    <p className='has-text-white'>V = {result}</p>
                </div>
            )}
        </>
    )
}