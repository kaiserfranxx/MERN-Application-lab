import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ItemList() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/items/')
        .then(res => setItems(res.data))
        .catch(err => console.log(err));
    }, []);

    return (
        <div>
            <h2>Item List</h2>
            {items.map(item => (
                <div key={item.div}>
                    {item.name} - {item.description}
                </div>
            ))}
        </div>
    );
}

export default ItemList;