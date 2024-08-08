import { useEffect, useState } from 'react';
export default function BackendTest() {
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
    <>
      <h1 className='has-text-white'>Data from API</h1>
      <p className='has-text-white'>{JSON.stringify(data, null, 2)}</p>
    </>
  )
}