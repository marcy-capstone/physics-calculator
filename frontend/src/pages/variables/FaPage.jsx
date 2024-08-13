import React, { useState } from 'react';

export default function FaPage() {
        // State variables for V, Vt, and the result
        const [F, setF] = useState('');
        const [Fm, setFm] = useState('');
        const [result, setResult] = useState(null);
    
        // Event handlers for input changes
        const handleFChange = (event) => {
            setF(event.target.value);
        };
    
        const handleFmChange = (event) => {
            setFm(event.target.value);
        };
    
        // Function to calculate the result
        const calculateA = () => {
            const fValue = parseFloat(F);
            const FmValue = parseFloat(Fm);
    
            if (!isNaN(fValue) && !isNaN(FmValue) && FmValue !== 0) {
                const a = fValue / FmValue;
                setResult(a);
            } else {
                setResult('Invalid input'); // Handle invalid cases
            }
        };

        const handleKeyPress = (event) => {
            if (event.key === 'Enter') {
                event.preventDefault(); // Prevent form submission
                calculateA();
            }
        };
    return (
        <>
            <h1 className='has-text-white has-text-weight-bold'>Solving for a!</h1>
            <h1 className='has-text-white has-text-weight-medium is-size-2 mb-3'>a = F/m</h1>
            <div className="field is-horizontal">
                <label className="label has-text-white ">F =</label>
                    <div className="control">
                        <input className="input column is-4 ml-3" type="number" value={F} onChange={handleFChange} name="F" placeholder="F ="/>
                    </div>
                    </div>

            <div className="field is-horizontal">
                    <label className="label has-text-white">m =</label>
                    <div className="control">
                        <input className="input column is-4 ml-2" type="number" value={Fm} onChange={handleFmChange} onKeyDown={handleKeyPress} name="Fm" placeholder="m ="/>
                    </div>
                    </div>

            <div className="field is-horizontal">
                    <label className="label has-text-white">a =</label>
                    <div className="control">
                        <input className="input column is-4 ml-3" type="number" placeholder="?" disabled/>
                    </div>
                    </div>
                <div className="field">
                <div className="control">
                    <button className="button is-link" onClick={calculateA}>Calculate a!</button>
                </div>
            </div>
            {result !== null && (
                <div className="field">
                    <p className='has-text-white'>a = {result} m/s²</p>
                </div>
            )}
        </>
    )
}