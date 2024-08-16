import React, { useState } from 'react';

export default function VPage() {
        // State variables for Vd, Vt, and the result
        const [Vd, setVd] = useState('');
        const [Vt, setVt] = useState('');
        const [result, setResult] = useState(null);
    
        // Event handlers for input changes
        const handleVdChange = (event) => {
            setVd(event.target.value);
        };
    
        const handleVtChange = (event) => {
            setVt(event.target.value);
        };
    
        // Function to calculate the result
        const calculateV = () => {
            const vdValue = parseFloat(Vd);
            const vtValue = parseFloat(Vt);
    
            if (!isNaN(vdValue) && !isNaN(vtValue) && vtValue !== 0) {
                const v = vdValue / vtValue;
                setResult(v);
            } else {
                setResult('Invalid input'); // Handle invalid cases
            }
        };

        const handleKeyPress = (event) => {
            if (event.key === 'Enter') {
                event.preventDefault(); // Prevent form submission
                calculateV();
            }
        };
    return (
        <>
            <h1 className='has-text-white has-text-weight-bold is-flex is-justify-content-center'>Solving for Velocity!</h1>
            <h1 className='has-text-white has-text-weight-medium is-size-2 mb-3 is-flex is-justify-content-center'>V = d/t</h1>
            {/* <div className='box has-background-grey-dark' style={{ outline: '5px solid black', maxWidth: '277px'}}> */}
            <div className='is-flex is-flex-direction-column'>
                {/* <div className="field is-horizontal is-flex is-justify-content-center">
                    <label className="label has-text-white">V =</label>
                        <input className="input column is-1 ml-2" type="number" placeholder="?" disabled />
                </div> */}
                <div className="field is-horizontal is-flex is-justify-content-center">
                    <label className="label has-text-white">d =</label>
                        <input className="input column is-1 ml-1" type="number" value={Vd} onChange={handleVdChange} onKeyDown={handleKeyPress} name="Vd" placeholder="d ="/>
                </div>
                <div className="field is-horizontal is-flex is-justify-content-center">
                    <label className="label has-text-white">t =</label>
                        <input className="input column is-1 ml-2" type="number" value={Vt} onChange={handleVtChange} onKeyDown={handleKeyPress} name="Vt" placeholder="t ="/>
                </div>
            {/* </div> */}
            <div className="field">
                <div className="control is-flex is-justify-content-center ml-5">
                    <button className="button is-link" onClick={calculateV}>Calculate V!</button>
                </div>
            </div>
            {result !== null && (
                <div className="field is-flex is-justify-content-center ml-5">
                    <p className='has-text-white'>V = {result} m/s</p>
                </div>
            )}
            </div>
        </>
    )
}