import React, { useState } from 'react';

export default function VdPage() {
        // State variables for V, Vt, and the result
        const [V, setV] = useState('');
        const [Vt, setVt] = useState('');
        const [result, setResult] = useState(null);
    
        // Event handlers for input changes
        const handleVChange = (event) => {
            setV(event.target.value);
        };
    
        const handleVtChange = (event) => {
            setVt(event.target.value);
        };
    
        // Function to calculate the result
        const calculateD = () => {
            const vValue = parseFloat(V);
            const vtValue = parseFloat(Vt);
    
            if (!isNaN(vValue) && !isNaN(vtValue) && vtValue !== 0) {
                const d = vValue * vtValue;
                setResult(d);
            } else {
                setResult('Invalid input'); // Handle invalid cases
            }
        };
    return (
        <>
            <h1 className='has-text-white has-text-weight-bold'>Solving for d!</h1>
            <h1 className='has-text-white has-text-weight-medium is-size-2'>d = Vt</h1>
                <div className="field">
                <label className="label has-text-white ">V</label>
                    <div className="control">
                        <input className="input column is-2" type="number" value={V} onChange={handleVChange} name="V" placeholder="V ="/>
                </div>
                    <label className="label has-text-white">d</label>
                    <div className="control">
                        <input className="input column is-1" type="number" placeholder="?" disabled/>
                    </div>
                    <label className="label has-text-white">t</label>
                    <div className="control">
                        <input className="input column is-2" type="number" value={Vt} onChange={handleVtChange} name="Vt" placeholder="t ="/>
                    </div>
                </div>
                <div className="field">
                <div className="control">
                    <button className="button is-link" onClick={calculateD}>Calculate d!</button>
                </div>
            </div>
            {result !== null && (
                <div className="field">
                    <p className='has-text-white'>d = {result} m</p>
                </div>
            )}
        </>
    )
}