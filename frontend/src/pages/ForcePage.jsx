import React, { useState } from 'react';
import FPage from './variables/FPage'
import FmPage from './variables/FmPage'
import FaPage from './variables/FaPage'

const VARIABLES = [
    { name: 'F', component: <FPage />},
    { name: 'm', component: <FmPage />},
    { name: 'a', component: <FaPage />},
]

export default function ForcePage() {
    const [component, setComponent] = useState(null);

    const handleClick = (component) => {
        setComponent(component);
    };

    return (
        <>
        <h1 className='has-text-white has-text-weight-bold is-flex is-justify-content-center'>Force</h1>
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