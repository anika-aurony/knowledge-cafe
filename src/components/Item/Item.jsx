import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import "./Item.css"

const Item = (props) => {
    // console.log(props.item)
    const { UploadTime, coverImg, readTime, title, name, userImg } = props.item
    const handleAddReadTime = props.handleAddReadTime;
    const handleAddBookMark = props.handleAddBookMark
    
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
                    <p>{readTime} min read <button onClick={()=>handleAddBookMark(props.item)} className='button'><FontAwesomeIcon icon={ faBookmark} /></button></p>
                    
                </div>
            </div>
            <div>
                <h2>{title}</h2>
                <small >#beginners </small>
            </div>
            <button onClick={()=>handleAddReadTime(props.item.readTime)} className='read-button'>Mark as read</button>
        </div>
    );
};

export default Item;