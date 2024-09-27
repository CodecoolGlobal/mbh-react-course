import { useState, useEffect } from 'react';

function RandomCats() {
  const [cats, setCats] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCats = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch('https://api.thecatapi.com/v1/images/search');
        if (!response.ok) {
          throw new Error('Failed to fetch cats');
        }
        const data = await response.json();
        setCats(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCats();
  }, []);

  return (
    <div>
      {isLoading && <p>Loading cats...</p>}
      {error && <p>Error: {error}</p>}
      {cats.length > 0 && (
        <div>
          {cats.map((cat) => (
            <div key={cat.id}>
              <img src={cat.url} alt="Cat" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default RandomCats;