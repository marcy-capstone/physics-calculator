import React, { useState } from 'react';
import PPage from '../components/PPage'
import PwPage from '../components/PwPage'
import PtPage from '../components/PtPage'

const VARIABLES = [
    { name: 'P', component: <PPage />},
    { name: 'W', component: <PwPage />},
    { name: 't', component: <PtPage />},
]

export default function VelocityPage() {
    const [variable, setVariable] = useState(''); // State to manage form data

    const handleChange = (event) => {
        setVariable(event.target.value);
    };

    return (
        <>
        <h1 className='has-text-white has-text-weight-bold'>Velocity</h1>
        <div className="field">
            <label className='label has-text-white'>Variables</label>
            <div className="control">
                <div className="select">
                    <select className="option" onChange={handleChange} value={variable}>
                        <option>P/W/t</option>
                        {
                            VARIABLES.map((variable) => {
                                return <option key={variable.name} value={variable.name}>{variable.name}</option>
                            })
                        }
                    </select>
                </div>
            </div>
        {
             VARIABLES.find((vari) => vari.name === variable)?.component
        }
        </div>
        </>
        
    )
}