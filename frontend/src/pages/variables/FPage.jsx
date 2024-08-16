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
            <h1 className='has-text-white has-text-weight-bold is-flex is-justify-content-center'>Solving for Force!</h1>
            <h1 className='has-text-white has-text-weight-medium is-size-2 mb-3 is-flex is-justify-content-center'>F = m•a</h1>
            {/* <div className='box has-background-grey-dark' style={{ outline: '5px solid black', maxWidth: '277px'}}> */}
            <div className='is-flex is-flex-direction-column'>
                <div className="field is-horizontal is-flex is-justify-content-center">
                    <label className="label has-text-white">F =</label>
                        <input className="input column is-1 ml-2" type="number" placeholder="?" disabled />
                </div>
                <div className="field is-horizontal is-flex is-justify-content-center">
                    <label className="label has-text-white">m =</label>
                        <input className="input column is-1 ml-1" type="number" value={Fm} onChange={handleFmChange} onKeyDown={handleKeyPress} name="Fm" placeholder="m ="/>
                </div>
                <div className="field is-horizontal is-flex is-justify-content-center">
                    <label className="label has-text-white">a =</label>
                        <input className="input column is-1 ml-3" type="number" value={Fa} onChange={handleFaChange} onKeyDown={handleKeyPress} name="Fa" placeholder="a ="/>
                </div>
            {/* </div> */}
            <div className="field">
                <div className="control is-flex is-justify-content-center ml-5">
                    <button className="button is-link" onClick={calculateF}>Calculate F!</button>
                </div>
            </div>
            {result !== null && (
                <div className="field is-flex is-justify-content-center ml-5">
                    <p className='has-text-white'>F = {result} N</p>
                </div>
            )}
            </div>
        </>
    )
}