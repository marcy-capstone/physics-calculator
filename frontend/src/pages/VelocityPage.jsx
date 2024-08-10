import React, { useState } from 'react';
import VPage from './variables/VPage'
import VdPage from './variables/VdPage'
import VtPage from './variables/VtPage'

const VARIABLES = [
    { name: 'V', component: <VPage />},
    // Future Pages
    { name: 'd', component: <VdPage />},
    { name: 't', component: <VtPage />},
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
                        <option>V/d/t</option>
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