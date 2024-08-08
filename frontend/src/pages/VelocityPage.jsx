import React, { useEffect, useState } from 'react';

const VARIABLES = ['V', 'd', 't']

export default function VelocityPage() {
    const [variable, setVariable] = useState(''); // State to manage form data

    const handleChange = (event) => {
        setVariable(event.target.value);
    };

    return (
        <>
        <h1 className='has-text-white'>Velocity</h1>
        <form>
                <label className='label has-text-white'>Variables</label>
                <div className="control">
                    <div className="select">
                        <select className="option" onChange={handleChange} value={variable}>
                            <option>V/d/t</option>
                            {
                                VARIABLES.map((variable) => {
                                    return <option key={variable} value={variable}>{variable}</option>
                                })
                            }
                        </select>
                    </div>
                </div>
            </form>
        </>
        
    )
}