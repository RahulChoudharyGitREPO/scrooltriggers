import React, { useState, useEffect } from 'react';

function DataFetcher() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            <h2>Fetched Data</h2>
            <ul>
                {data.map(item => (
                    <li key={item.id}>{item.title}
                        {item.body}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default DataFetcher;
