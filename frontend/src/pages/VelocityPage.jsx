import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
    const navigate = useNavigate();

    const handleClick = (component) => {
        setComponent(component);
    };

    const handleGoBack = () => {
        navigate(-1);
    };

    return (
        <>
        <h1 className='has-text-white has-text-weight-bold is-flex is-justify-content-center'>Velocity</h1>
        <div className='is-flex-direction-column'>
            <div className='is-flex is-justify-content-center'>
                <button className="button is-link is-medium has-text-weight-bold my-3" onClick={handleGoBack}>Go Back?</button>
            </div>
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