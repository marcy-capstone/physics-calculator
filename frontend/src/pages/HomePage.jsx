export default function HomePage() {
    return (
        <>
            <h1 className='has-text-white'>Home</h1>
            <div>
            <form action="{{ url_for('submit') }}" method="POST">
            <label className='label has-text-white'>Equation</label>
            <div className="control">
                <div className="select">
                <select className="option">
                    <option>Choose...</option>
                    <option value="velocity">Velocity</option>
                    <option value="force">Force</option>
                    <option value="power">Power</option>
                </select>
                </div>
            </div>
            <div className="field is-grouped">
                <div className="control">
                <button className="button is-link">Submit</button>
            </div>
            </div>
            </form>
            </div>
        </>
        
    )
}