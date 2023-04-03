import React from 'react';
import "./Item.css"

const Item = (props) => {
    console.log(props.item)
    const { UploadTime, coverImg, readTime, title, name, userImg } = props.item
    return (
        <div className='item'>
            <div className='item-img'>
                <img src={coverImg}></img>
            </div>

            <div className='info'>
                <div className='item-info'>
                    <img src={userImg}></img>
                    <div>
                        <h4>{name}</h4>
                        <small>{UploadTime}</small>
                    </div>
                </div>
                <div>
                    <p>{readTime} min read <button></button></p>
                </div>
            </div>
            <div>
                <h2>{title}</h2>
                <small >#biginners </small>
            </div>
            <button className='read-button'>Mark as read</button>
        </div>
    );
};

export default Item;