import React from 'react';
import { useNavigate } from 'react-router-dom';

const EQUATIONS = [
    { name: 'Velocity', route: "/static/velocity"},
    { name: 'Force', route: "/static/force"},
    { name: 'Power', route: "/static/power"},
]

export default function HomePage() {
    const navigate = useNavigate();

    return (
        <>
            <div>
                <label className='label has-text-white is-flex is-justify-content-center is-large my-3'>Choose an Equation Below:</label>
                <div className='is-flex is-justify-content-center is-justify-content-space-evenly my-5'>
                    {
                        EQUATIONS.map((equation) => {
                            return <button className="button is-link is-large is-flex-direction-row" key={equation.name} value={equation.name} onClick={() => navigate(equation.route)}>{equation.name}</button>
                        })
                    }
                </div>
            </div>
        </>
    )
}