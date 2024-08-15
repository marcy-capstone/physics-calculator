import React, { useState } from 'react';
import VPage from './variables/VPage'
import VdPage from './variables/VdPage'
import VtPage from './variables/VtPage'

const VARIABLES = [
    { name: 'V', component: <VPage />},
    { name: 'd', component: <VdPage />},
    { name: 't', component: <VtPage />},
]

export default function VelocityPage() {
    const [component, setComponent] = useState(null);

    const handleClick = (component) => {
        setComponent(component);
    };

    return (
        <>
        <h1 className='has-text-white has-text-weight-bold is-flex is-justify-content-center'>Power</h1>
        <div className='is-flex-direction-column'>
            <label className='label has-text-white is-large is-flex is-justify-content-center'>Variables</label>
            <div className='is-flex is-justify-content-center'>
                    {
                        VARIABLES.map((variable) => {
                            return <button className='button is-link is-large mx-6' key={variable.name} value={variable.name} onClick={() => handleClick(variable.component)}>{variable.name}</button>
                        })
                    }
            </div>
        </div>
        <div>
            {component}
        </div>
        </>
    )
}