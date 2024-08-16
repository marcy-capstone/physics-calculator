import React, { useState } from 'react';

export default function PwPage() {
        // State variables for V, Fa, and the result
        const [P, setP] = useState('');
        const [Pt, setPt] = useState('');
        const [result, setResult] = useState(null);
    
        // Event handlers for input changes
        const handlePChange = (event) => {
            setP(event.target.value);
        };
    
        const handlePtChange = (event) => {
            setPt(event.target.value);
        };
    
        // Function to calculate the result
        const calculatePw = () => {
            const pValue = parseFloat(P);
            const PtValue = parseFloat(Pt);
    
            if (!isNaN(pValue) && !isNaN(PtValue) && PtValue !== 0) {
                const w = pValue * PtValue;
                setResult(w);
            } else {
                setResult('Invalid input'); // Handle invalid cases
            }
        };

        const handleKeyPress = (event) => {
            if (event.key === 'Enter') {
                event.preventDefault(); // Prevent form submission
                calculatePw();
            }
        };
    return (
        <>
            <h1 className='has-text-white has-text-weight-bold is-flex is-justify-content-center'>Solving for Work!</h1>
            <h1 className='has-text-white has-text-weight-medium is-size-2 mb-3 is-flex is-justify-content-center'>W = P•t</h1>
            <div className='is-flex is-flex-direction-column'>
                <div className="field is-horizontal is-flex is-justify-content-center">
                    <label className="label has-text-white ">P =</label>
                    <input className="input column is-1 ml-2" type="number" value={P} onChange={handlePChange} onKeyDown={handleKeyPress} name="P" placeholder="P ="/>
                </div>
                <div className="field is-horizontal is-flex is-justify-content-center">
                        <label className="label has-text-white">W =</label>
                        <input className="input column is-1 ml-1" type="number" placeholder="?" disabled/>
                </div>
                <div className="field is-horizontal is-flex is-justify-content-center">
                        <label className="label has-text-white">t =</label>
                        <input className="input column is-1 ml-3" type="number" value={Pt} onChange={handlePtChange} onKeyDown={handleKeyPress} name="Pt" placeholder="t ="/>
                    </div>
                    <div className="field">
                    <div className="control is-flex is-justify-content-center ml-5">
                        <button className="button is-link" onClick={calculatePw}>Calculate W!</button>
                    </div>
                </div>
                {result !== null && (
                    <div className="field is-flex is-justify-content-center ml-5">
                        <p className='has-text-white'>W = {result} J</p>
                    </div>
                )}
            </div>
        </>
    )
}