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
    
    // handle bookmarks
    const [bookmarks, setBookmarks] = useState([]);
    const handleAddBookMark = (bookmark)=>{
        // console.log(bookmark)
        let newList = [];
        newList = [...bookmarks, bookmark]
        setBookmarks(newList);
    }
    console.log(bookmarks)

    return (
        <div className='itemsContainer'>
            <div className='productContainer'>

                {
                    items.map(item => <Item
                        key={item.id}
                        item={item}
                        handleAddReadTime = {handleAddReadTime}
                        handleAddBookMark = {handleAddBookMark}
                    ></Item>)
                }

            </div>
            <div className='cartContainer'>
                <div className='read-time'>
                    <h4>Spent time on read: {timeRead} min</h4>
                </div>
                <div className="bookMark">
                    <h4>Bookmarked Blogs: {bookmarks.length} </h4>
                    
                    {
                        bookmarks.map(bookmark => <div className='bookmark-title'>{bookmark.title}</div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Items;