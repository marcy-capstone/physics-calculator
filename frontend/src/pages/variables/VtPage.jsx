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

        const handleKeyPress = (event) => {
            if (event.key === 'Enter') {
                event.preventDefault(); // Prevent form submission
                calculateT();
            }
        };
    return (
        <>
            <h1 className='has-text-white has-text-weight-bold is-flex is-justify-content-center'>Solving for Time!</h1>
            <h1 className='has-text-white has-text-weight-medium is-size-2 mb-3 is-flex is-justify-content-center'>t = d/V</h1>
            <div className='is-flex is-flex-direction-column'>
            <div className="field is-horizontal is-flex is-justify-content-center">
                <label className="label has-text-white ">V =</label>
                        <input className="input column is-1 ml-2" type="number" value={V} onChange={handleVChange} onKeyDown={handleKeyPress} name="V" placeholder="V ="/>
                    </div>

            <div className="field is-horizontal is-flex is-justify-content-center">
                    <label className="label has-text-white">d =</label>
                        <input className="input column is-1 ml-1" type="number" value={Vd} onChange={handleVdChange} onKeyDown={handleKeyPress} name="Vd" placeholder="d ="/>
                    </div>

            <div className="field is-horizontal is-flex is-justify-content-center">
                    <label className="label has-text-white">t =</label>
                        <input className="input column is-1 ml-2" type="number" placeholder="?" disabled/>
                    </div>
                <div className="field">
                <div className="control is-flex is-justify-content-center ml-5">
                    <button className="button is-link" onClick={calculateT}>Calculate t!</button>
                </div>
            </div>
            {result !== null && (
                <div className="field is-flex is-justify-content-center ml-5">
                    <p className='has-text-white'>t = {result} s</p>
                </div>
            )}
            </div>
        </>
    )
}