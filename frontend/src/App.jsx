import React, { useEffect, useState } from 'react';

const App = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/members');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const jsonData = await response.json();
        setData(jsonData);
      }
      catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  if (error) return <div>Error: {error}</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <body className='is-flex-direction-column'>
        <h1 className='has-text-white'>Data from API</h1>
        <p className='has-text-white'>{JSON.stringify(data, null, 2)}</p>
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
    </body>
  );
};

export default App;
