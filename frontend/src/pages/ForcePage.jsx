import React, { useState } from 'react';
import FPage from './variables/FPage'
import FmPage from './variables/FmPage'
import FaPage from './variables/FaPage'

const VARIABLES = [
    { name: 'F', component: <FPage />},
    { name: 'm', component: <FmPage />},
    { name: 'a', component: <FaPage />},
]

export default function VelocityPage() {
    const [variable, setVariable] = useState(''); // State to manage form data

    const handleChange = (event) => {
        setVariable(event.target.value);
    };

    return (
        <>
        <h1 className='has-text-white has-text-weight-bold'>Force</h1>
        <div className="field">
            <label className='label has-text-white'>Variables</label>
            <div className="control">
                <div className="select">
                    <select className="option" onChange={handleChange} value={variable}>
                        <option>F/m/a</option>
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