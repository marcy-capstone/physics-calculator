import React, { useState } from 'react';

export default function VPage() {
        // State variables for Vd, Vt, and the result
        const [Vd, setVd] = useState('');
        const [Vt, setVt] = useState('');

        const [variableValues, setVariableValues] = useState({
            Vd: '',
            Vt: ''
        })

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
            <h1 className='has-text-white has-text-weight-bold'>Solving for Velocity!</h1>
            <h1 className='has-text-white has-text-weight-medium is-size-2 mb-3'>V = d/t</h1>
            {/* <div className='box has-background-grey-dark' style={{ outline: '5px solid black', maxWidth: '277px'}}> */}
                <div className="field is-horizontal">
                    <label className="label has-text-white">V =</label>
                    <div className="control">
                        <input className="input column is-4 ml-2" type="number" placeholder="?" disabled />
                    </div>
                </div>
                <div className="field is-horizontal">
                    <label className="label has-text-white">d =</label>
                    <div className="control">
                        <input className="input column is-4 ml-2" type="number" value={Vd} onChange={handleVdChange} onKeyDown={handleKeyPress} name="Vd" placeholder="d ="/>
                    </div>
                </div>
                <div className="field is-horizontal">
                    <label className="label has-text-white">t =</label>
                    <div className="control">
                        <input className="input column is-4 ml-3" type="number" value={Vt} onChange={handleVtChange} onKeyDown={handleKeyPress} name="Vt" placeholder="t ="/>
                    </div>
                </div>
            {/* </div> */}
            <div className="field">
                <div className="control">
                    <button className="button is-link" onClick={calculateV}>Calculate V!</button>
                </div>
            </div>
            {result !== null && (
                <div className="field">
                    <p className='has-text-white'>V = {result} m/s</p>
                </div>
            )}
        </>
    )
}