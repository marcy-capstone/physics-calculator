import React, { useEffect, useState } from 'react';
import ForcePage from './ForcePage';
import VelocityPage from './VelocityPage';
import PowerPage from './PowerPage';

const EQUATIONS = [
    { name: 'Velocity', component: <VelocityPage />},
    { name: 'Force', component: <ForcePage />},
    { name: 'Power', component: <PowerPage />},
]

export default function HomePage() {
    const [equation, setEquation] = useState(''); // State to manage form data

    const handleChange = (event) => {
        setEquation(event.target.value);
    };

    return (
        <div>
            <form>
                <label className='label has-text-white'>Equation</label>
                <div className="control">
                    <div className="select">
                        <select className="option" onChange={handleChange} value={equation}>
                            <option>Choose...</option>
                            {
                                EQUATIONS.map((equation) => {
                                    return <option key={equation.name} value={equation.name}>{equation.name}</option>
                                })
                            }
                        </select>
                    </div>
                </div>
            </form>
            {
                EQUATIONS.find((eq) => eq.name === equation)?.component
            }
        </div>
    )
}