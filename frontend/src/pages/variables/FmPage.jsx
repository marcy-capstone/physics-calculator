import React, { useState } from 'react';

export default function FmPage() {
        // State variables for V, Fa, and the result
        const [F, setF] = useState('');
        const [Fa, setFa] = useState('');
        const [result, setResult] = useState(null);
    
        // Event handlers for input changes
        const handleFChange = (event) => {
            setF(event.target.value);
        };
    
        const handleFaChange = (event) => {
            setFa(event.target.value);
        };
    
        // Function to calculate the result
        const calculateFm = () => {
            const fValue = parseFloat(F);
            const FaValue = parseFloat(Fa);
    
            if (!isNaN(fValue) && !isNaN(FaValue) && FaValue !== 0) {
                const f = fValue / FaValue;
                setResult(f);
            } else {
                setResult('Invalid input'); // Handle invalid cases
            }
        };

        const handleKeyPress = (event) => {
            if (event.key === 'Enter') {
                event.preventDefault(); // Prevent form submission
                calculateFm();
            }
        };
    return (
        <>
            <h1 className='has-text-white has-text-weight-bold'>Solving for m!</h1>
            <h1 className='has-text-white has-text-weight-medium is-size-2 mb-3'>m = F/a</h1>
            <div className="field is-horizontal">
                <label className="label has-text-white ">F =</label>
                    <div className="control">
                        <input className="input column is-4 ml-3" type="number" value={F} onChange={handleFChange} onKeyDown={handleKeyPress} name="F" placeholder="F ="/>
                </div>
            </div>
            <div className="field is-horizontal">
                    <label className="label has-text-white">m =</label>
                    <div className="control">
                        <input className="input column is-4 ml-2" type="number" placeholder="?" disabled/>
                    </div>
            </div>
            <div className="field is-horizontal">
                    <label className="label has-text-white">a =</label>
                    <div className="control">
                        <input className="input column is-4 ml-3" type="number" value={Fa} onChange={handleFaChange} onKeyDown={handleKeyPress} name="Fa" placeholder="a ="/>
                    </div>
                </div>
                <div className="field">
                <div className="control">
                    <button className="button is-link" onClick={calculateFm}>Calculate m!</button>
                </div>
            </div>
            {result !== null && (
                <div className="field">
                    <p className='has-text-white'>m = {result} kg</p>
                </div>
            )}
        </>
    )
}