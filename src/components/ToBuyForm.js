import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import firebase from "../firebase-config";

const ToBuyForm = () => {
    const [item, setItem] = useState('');
    const [id, setId] = useState('');
    const db = firebase.firestore();

    const handleSubmit = (e) => {
        e.preventDefault();

        const buyList = db.collection('to-buy-list').add({
            item: item,
            id: id,
        })
        
        setId('');
        setItem('');
    }
    const handleItem = (e) => {
        setId(uuid());
        setItem(e);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="item to buy" value={item} onChange={(e) => handleItem(e.target.value)} required />
            <input type="submit" value="add item" />

        </form>
    )
}

export default ToBuyForm;