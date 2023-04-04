import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import "./Items.css"

const Items = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('fakedata.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    // console.log(items)
    return (
        <div className='itemsContainer'>
            <div className='productContainer'>

                {
                    items.map(item => <Item
                        key={item.id}
                        item={item}
                    ></Item>)
                }

            </div>
            <div className='cartContainer'>
                <div className='read-time'>
                    <h4>Spent time on read: min</h4>
                </div>
            </div>
        </div>
    );
};

export default Items;