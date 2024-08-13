import React, { useState } from 'react';

export default function PtPage() {
        // State variables for V, Vt, and the result
        const [P, setP] = useState('');
        const [Pw, setPw] = useState('');
        const [result, setResult] = useState(null);
    
        // Event handlers for input changes
        const handlePChange = (event) => {
            setP(event.target.value);
        };
    
        const handlePwChange = (event) => {
            setPw(event.target.value);
        };
    
        // Function to calculate the result
        const calculatePt = () => {
            const pValue = parseFloat(P);
            const PwValue = parseFloat(Pw);
    
            if (!isNaN(pValue) && !isNaN(PwValue) && PwValue !== 0) {
                const t = pValue / PwValue;
                setResult(t);
            } else {
                setResult('Invalid input'); // Handle invalid cases
            }
        };

        const handleKeyPress = (event) => {
            if (event.key === 'Enter') {
                event.preventDefault(); // Prevent form submission
                calculatePt();
            }
        };
    return (
        <>
            <h1 className='has-text-white has-text-weight-bold'>Solving for t!</h1>
            <h1 className='has-text-white has-text-weight-medium is-size-2 mb-3'>t = P/W</h1>
            <div className="field is-horizontal">
                <label className="label has-text-white ">P =</label>
                    <div className="control">
                        <input className="input column is-4 ml-3" type="number" value={P} onChange={handlePChange} name="P" placeholder="P ="/>
                    </div>
                    </div>

            <div className="field is-horizontal">
                    <label className="label has-text-white">W =</label>
                    <div className="control">
                        <input className="input column is-4 ml-2" type="number" value={Pw} onChange={handlePwChange} onKeyDown={handleKeyPress} name="Pw" placeholder="W ="/>
                    </div>
                    </div>

            <div className="field is-horizontal">
                    <label className="label has-text-white">t =</label>
                    <div className="control">
                        <input className="input column is-4 ml-4" type="number" placeholder="?" disabled/>
                    </div>
                    </div>
                <div className="field">
                <div className="control">
                    <button className="button is-link" onClick={calculatePt}>Calculate t!</button>
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