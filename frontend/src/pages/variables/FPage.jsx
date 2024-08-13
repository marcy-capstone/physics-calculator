import React, { useState } from 'react';

export default function FPage() {
        // State variables for Fm, Fa, and the result
        const [Fm, setFm] = useState('');
        const [Fa, setFa] = useState('');
        const [result, setResult] = useState(null);
    
        // Event handlers for input changes
        const handleFmChange = (event) => {
            setFm(event.target.value);
        };
    
        const handleFaChange = (event) => {
            setFa(event.target.value);
        };
    
        // Function to calculate the result
        const calculateF = () => {
            const FmValue = parseFloat(Fm);
            const FaValue = parseFloat(Fa);
    
            if (!isNaN(FmValue) && !isNaN(FaValue) && FaValue !== 0) {
                const f = FmValue * FaValue;
                setResult(f);
            } else {
                setResult('Invalid input'); // Handle invalid cases
            }
        };

        const handleKeyPress = (event) => {
            if (event.key === 'Enter') {
                event.preventDefault(); // Prevent form submission
                calculateF();
            }
        };
    return (
        <>
            <h1 className='has-text-white has-text-weight-bold'>Solving for F!</h1>
            <h1 className='has-text-white has-text-weight-medium is-size-2 mb-3'>F = ma</h1>
            {/* <div className='box has-background-grey-dark' style={{ outline: '5px solid black', maxWidth: '277px'}}> */}
                <div className="field is-horizontal">
                    <label className="label has-text-white">F =</label>
                    <div className="control">
                        <input className="input column is-4 ml-3" type="number" placeholder="?" disabled />
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
                        <input className="input column is-4 ml-3" type="number" value={Fa} onChange={handleFaChange} onKeyDown={handleKeyPress} name="Fa" placeholder="a ="/>
                    </div>
                </div>
            {/* </div> */}
            <div className="field">
                <div className="control">
                    <button className="button is-link" onClick={calculateF}>Calculate F!</button>
                </div>
            </div>
            {result !== null && (
                <div className="field">
                    <p className='has-text-white'>F = {result} N</p>
                </div>
            )}
        </>
    )
}