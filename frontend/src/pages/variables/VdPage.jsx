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
            <h1 className='has-text-white has-text-weight-bold is-flex is-justify-content-center'>Solving for Displacement!</h1>
            <h1 className='has-text-white has-text-weight-medium is-size-2 mb-3 is-flex is-justify-content-center'>d = V•t</h1>
            <div className='is-flex is-flex-direction-column'>
            <div className="field is-horizontal is-flex is-justify-content-center">
                <label className="label has-text-white ">V =</label>
                        <input className="input column is-1 ml-2" type="number" value={V} onChange={handleVChange} onKeyDown={handleKeyPress} name="V" placeholder="V ="/>
            </div>
            {/* <div className="field is-horizontal is-flex is-justify-content-center">
                    <label className="label has-text-white">d =</label>
                        <input className="input column is-1 ml-1" type="number" placeholder="?" disabled/>
            </div> */}
            <div className="field is-horizontal is-flex is-justify-content-center">
                    <label className="label has-text-white">t =</label>
                        <input className="input column is-1 ml-2" type="number" value={Vt} onChange={handleVtChange} onKeyDown={handleKeyPress} name="Vt" placeholder="t ="/>
                </div>
                <div className="field">
                <div className="control is-flex is-justify-content-center ml-5">
                    <button className="button is-link" onClick={calculateD}>Calculate d!</button>
                </div>
            </div>
            {result !== null && (
                <div className="field is-flex is-justify-content-center ml-5">
                    <p className='has-text-white'>d = {result} m</p>
                </div>
            )}
            </div>
        </>
    )
}