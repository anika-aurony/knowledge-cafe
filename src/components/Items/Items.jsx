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

    // Spent time on Read
    const [time, setTime] = useState([]); 
    
    const handleAddReadTime = (readTime) => {
        console.log(readTime)
        let newCart = [];
        newCart = [...time, readTime];
        setTime(newCart)
        
    }
    let timeRead = 0
    for(const product of time){
        timeRead = timeRead + product;
    }
    


    return (
        <div className='itemsContainer'>
            <div className='productContainer'>

                {
                    items.map(item => <Item
                        key={item.id}
                        item={item}
                        handleAddReadTime = {handleAddReadTime}
                    ></Item>)
                }

            </div>
            <div className='cartContainer'>
                <div className='read-time'>
                    <h4>Spent time on read: {timeRead} min</h4>
                </div>
            </div>
        </div>
    );
};

export default Items;