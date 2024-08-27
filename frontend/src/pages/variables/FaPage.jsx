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
            <h1 className='has-text-white has-text-weight-bold is-flex is-justify-content-center'>Solving for Acceleration!</h1>
            <h1 className='has-text-white has-text-weight-medium is-size-2 mb-3 is-flex is-justify-content-center'>a = F/m</h1>
            <div className='is-flex is-flex-direction-column'>      
            <div className="field is-horizontal is-flex is-justify-content-center">
                <label className="label has-text-white ">F =</label>
                        <input className="input column is-1 ml-2" type="number" value={F} onChange={handleFChange} onKeyDown={handleKeyPress} name="F" placeholder="F ="/>
                    </div>

            <div className="field is-horizontal is-flex is-justify-content-center">
                    <label className="label has-text-white">m =</label>
                        <input className="input column is-1 ml-1" type="number" value={Fm} onChange={handleFmChange} onKeyDown={handleKeyPress} name="Fm" placeholder="m ="/>
                    </div>

            <div className="field is-horizontal is-flex is-justify-content-center">
                    <label className="label has-text-white">a =</label>
                        <input className="input column is-1 ml-3" type="number" placeholder="?" disabled/>
                    </div>
                <div className="field">
                <div className="control is-flex is-justify-content-center ml-5">
                    <button className="button is-link" onClick={calculateA}>Calculate a!</button>
                </div>
            </div>
            {result !== null && (
                <div className="field is-flex is-justify-content-center ml-5">
                    <p className='has-text-white'>a = {result} m/s²</p>
                </div>
            )}
            </div>
        </>
    )
}