import React, { useState } from 'react';

export default function PPage() {
        // State variables for Pw, Pt, and the result
        const [Pw, setPw] = useState('');
        const [Pt, setPt] = useState('');
        const [result, setResult] = useState(null);
    
        // Event handlers for input changes
        const handlePwChange = (event) => {
            setPw(event.target.value);
        };
    
        const handlePtChange = (event) => {
            setPt(event.target.value);
        };
    
        // Function to calculate the result
        const calculateP = () => {
            const PwValue = parseFloat(Pw);
            const PtValue = parseFloat(Pt);
    
            if (!isNaN(PwValue) && !isNaN(PtValue) && PtValue !== 0) {
                const p = PwValue * PtValue;
                setResult(p);
            } else {
                setResult('Invalid input'); // Handle invalid cases
            }
        };

        const handleKeyPress = (event) => {
            if (event.key === 'Enter') {
                event.preventDefault(); // Prevent form submission
                calculateP();
            }
        };
    return (
        <>
            <h1 className='has-text-white has-text-weight-bold is-flex is-justify-content-center'>Solving for P!</h1>
            <h1 className='has-text-white has-text-weight-medium is-size-2 mb-3 is-flex is-justify-content-center'>P = W/t</h1>
            {/* <div className='box has-background-grey-dark' style={{ outline: '5px solid black', maxWidth: '277px'}}> */}
            <div className='is-flex is-flex-direction-column'>
                <div className="field is-horizontal is-flex is-justify-content-center">
                    <label className="label has-text-white">P =</label>
                        <input className="input column is-1 ml-2" type="number" placeholder="?" disabled />
                </div>
                <div className="field is-horizontal is-flex is-justify-content-center">
                    <label className="label has-text-white">W =</label>
                        <input className="input column is-1 ml-1" type="number" value={Pw} onChange={handlePwChange} onKeyDown={handleKeyPress} name="Pw" placeholder="W ="/>
                </div>
                <div className="field is-horizontal is-flex is-justify-content-center">
                    <label className="label has-text-white">t =</label>
                        <input className="input column is-1 ml-2" type="number" value={Pt} onChange={handlePtChange} onKeyDown={handleKeyPress} name="Pt" placeholder="t ="/>
                </div>
            {/* </div> */}
            <div className="field ">
                <div className="control is-flex is-justify-content-center ml-5">
                    <button className="button is-link" onClick={calculateP}>Calculate P!</button>
                </div>
            </div>
            {result !== null && (
                <div className="field is-flex is-justify-content-center ml-5">
                    <p className='has-text-white'>P = {result} W</p>
                </div>
            )}
            </div>
        </>
    )
}