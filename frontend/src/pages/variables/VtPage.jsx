import React, { useState } from 'react';

export default function VtPage() {
        // State variables for V, Vt, and the result
        const [V, setV] = useState('');
        const [Vd, setVd] = useState('');
        const [result, setResult] = useState(null);
    
        // Event handlers for input changes
        const handleVChange = (event) => {
            setV(event.target.value);
        };
    
        const handleVdChange = (event) => {
            setVd(event.target.value);
        };
    
        // Function to calculate the result
        const calculateT = () => {
            const vValue = parseFloat(V);
            const vdValue = parseFloat(Vd);
    
            if (!isNaN(vValue) && !isNaN(vdValue) && vdValue !== 0) {
                const t = vdValue / vValue;
                setResult(t);
            } else {
                setResult('Invalid input'); // Handle invalid cases
            }
        };
    return (
        <>
            <h1 className='has-text-white has-text-weight-bold'>Solving for t!</h1>
            <h1 className='has-text-white has-text-weight-medium is-size-2'>t = d/V</h1>
                <div className="field">
                <label className="label has-text-white ">V</label>
                    <div className="control">
                        <input className="input column is-2" type="number" value={V} onChange={handleVChange} name="V" placeholder="V ="/>
                </div>
                    <label className="label has-text-white">d</label>
                    <div className="control">
                        <input className="input column is-2" type="number" value={Vd} onChange={handleVdChange} name="Vd" placeholder="d ="/>
                    </div>
                    <label className="label has-text-white">t</label>
                    <div className="control">
                        <input className="input column is-1" type="number" placeholder="?" disabled/>
                    </div>
                </div>
                <div className="field">
                <div className="control">
                    <button className="button is-link" onClick={calculateT}>Calculate t!</button>
                </div>
            </div>
            {result !== null && (
                <div className="field">
                    <p className='has-text-white'>t = {result} s</p>
                </div>
            )}
        </>
    )
}