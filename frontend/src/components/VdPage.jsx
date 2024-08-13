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

        const handleKeyPress = (event) => {
            if (event.key === 'Enter') {
                event.preventDefault(); // Prevent form submission
                calculateD();
            }
        };
    return (
        <>
            <h1 className='has-text-white has-text-weight-bold'>Solving for d!</h1>
            <h1 className='has-text-white has-text-weight-medium is-size-2 mb-3'>d = Vt</h1>
            <div className="field is-horizontal">
                <label className="label has-text-white ">V =</label>
                    <div className="control">
                        <input className="input column is-4 ml-2" type="number" value={V} onChange={handleVChange} onKeyDown={handleKeyPress} name="V" placeholder="V ="/>
                </div>
            </div>
            <div className="field is-horizontal">
                    <label className="label has-text-white">d =</label>
                    <div className="control">
                        <input className="input column is-4 ml-2" type="number" placeholder="?" disabled/>
                    </div>
            </div>
            <div className="field is-horizontal">
                    <label className="label has-text-white">t =</label>
                    <div className="control">
                        <input className="input column is-4 ml-3" type="number" value={Vt} onChange={handleVtChange} onKeyDown={handleKeyPress} name="Vt" placeholder="t ="/>
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