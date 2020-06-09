import React from 'react';
import './ShowItems.css';

const ShowItems = (props) => {

    const itemsFromState = props.items_to_show;
    const allItems = itemsFromState.length ? (
        itemsFromState.map(item => {
        return (
            <div className = "todoitems" key={item.id} >
                <span>{item.activity} </span>
                <span>{item.time} </span>
                {/* arrow function عشان ماينفذش على طول */}
                <span onClick={() => props.deleteItem(item.id)}>&times;</span> 
            </div>
        );
    }) ) : (
        <p>Empty List !</p>
    )

    return (
        <div className = "container">
            <div className = "header">
                <span>Activity </span>
                <span>time </span>
                <span>Action</span>
            </div>
            
            {allItems}
        </div>
    );
}

export default ShowItems;