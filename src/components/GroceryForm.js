import React, { useContext, useState } from 'react';
import { GroceryContext } from '../contexts/GroceryContext'
import WhereList from './WhereList';
import MeasurementList from './MeasurementList';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ImageUploader from 'react-images-upload';
import firebase from "../firebase-config";
import { v4 as uuid } from 'uuid';

const NewGroceryForm = () => {
    const { dispatch } = useContext(GroceryContext);
    const [buyDate, setBuyDate] = useState('');
    const [exDate, setExDate] = useState('');
    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');
    const [where, setWhere] = useState('');
    const [measurement, setMeasurement] = useState('');
    const [quantity, setQuantity] = useState('');
    const [image, setImage] = useState('');
    const [imageType, setImageType] = useState('');
    const [id, setId] = useState('');
    const db = firebase.firestore();
    
    const handleSubmit = (e) => {
        e.preventDefault();

        if (where === '' || buyDate === '' || exDate === '') {
            return
        } else {

            console.log(id)

            const groceryList = db.collection('grocery-list').add({
                name: name,
                amount: quantity,
                where: where,
                buyDate: buyDate,
                exDate: exDate,
                image: '',
                id: id
            })
            dispatch({
                type: 'ADD_GROCERY', grocery: {
                    name, quantity, where, buyDate, exDate, image, id
                }
            });

            // uploadImageToFirebase();

            setName('');
            setAmount('');
            setWhere('');
            setBuyDate('');
            setExDate('');
            setQuantity('');
            setImage('');
        }
    }
    const handleWhere = (where) => {
        setWhere(where);
    }
    const handleMeasurement = (measurement) => {
        setMeasurement(measurement);
    }
    const handleBuyDate = (date) => {
        if (where === '') { setWhere('cupboard'); }
        setBuyDate(date);
    }
    const handleExDate = (date) => {
        setId(uuid());
        setExDate(date);
    }
    const handleQuantity = (e) => {
        setAmount(e);
        let together = (amount + measurement)
        setQuantity(together)
    }
    const handleImage = img => {
        setImageType(img[0].type);
        setImage(img);
    }
    async function uploadImageToFirebase() {
        const ref = firebase.storage().ref();

        await ref.put(image[0])
            .then(function (snapshot) {
                console.log('Uploaded a blob or file!');
            })
            // .catch(err => console.log(err));
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="name" value={name} onChange={(e) => setName(e.target.value)} required />
            <div className="amount-container">
                <input type="text" placeholder="amount" onChange={(e) => { setAmount(e.target.value) }} required value={amount} />
                <MeasurementList handleMeasurement={handleMeasurement} value={measurement} required />
            </div>
            <DatePicker placeholderText="buy date" dateFormat="yyyy/MM/dd" selected={buyDate} onChange={handleBuyDate} />
            <DatePicker placeholderText="experation date" dateFormat="yyyy/MM/dd" selected={exDate} onChange={handleExDate} />
            <WhereList handleWhere={handleWhere} />
            {/* <ImageUploader
                accept='"accept=image/*"'
                withPreview={true}
                singleImage={true}
                withIcon={false}
                buttonText='Choose images'
                onChange={handleImage}
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
            /> */}
            <input onClick={handleQuantity} type="submit" value="add grocery" />
        </form>
    );
}

export default NewGroceryForm;