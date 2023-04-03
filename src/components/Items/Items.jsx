import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import "./Items.css"

const Items = () => {
    const [items, setItems] = useState([]);
    useEffect(()=>{
        fetch('fakedata.json')
        .then(res=>res.json())
        .then(data=>setItems(data))
    },[])
    // console.log(items)
    return (
        <div className='itemsContainer'>
            <div className='productContainer'>
                
                {
                    items.map(item => <Item
                    key = {item.id}
                    item = {item}
                    ></Item>)
                }
                
            </div>
            <div>Items cart</div>
        </div>
    );
};

export default Items;