import React, { useContext, useState } from 'react';
import { GroceryContext } from '../contexts/GroceryContext'
import WhereList from './WhereList';
import MeasurementList from './MeasurementList';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ImageUploader from 'react-images-upload';

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
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({
            type: 'ADD_GROCERY', grocery: {
                name, quantity, where, buyDate, exDate
            }
        });
        setName('');
        setAmount('');
        setWhere('');
        setBuyDate('');
        setExDate('');
        setQuantity('');
    }
    const handleWhere = (where) => {
        setWhere(where);
    }
    const handleMeasurement = (measurement) => {
        setMeasurement(measurement);
    }
    const handleBuyDate = (date) => {
        setBuyDate(date);
    }
    const handleExDate = (date) => {
        setExDate(date);
    }
    const handleQuantity = (e) => {
        setAmount(e);
        let together = (amount+measurement)
        console.log(together)
        setQuantity(together)
    }
    const handleImage = (image) => {
        console.log(image)
        setImage(image);
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="name" value={name} onChange={(e) => setName(e.target.value)} required />
            <div className="amount-container">
                <input type="text" placeholder="amount" onChange={(e) => {setAmount(e.target.value)}} required value={amount} />
                <MeasurementList handleMeasurement={handleMeasurement} value={measurement} required />
            </div>
            <DatePicker placeholderText="buy date" dateFormat="yyyy/MM/dd" selected={buyDate} onChange={handleBuyDate} />
            <DatePicker placeholderText="experation date" dateFormat="yyyy/MM/dd" selected={exDate} onChange={handleExDate} />
            <WhereList handleWhere={handleWhere} />
            <ImageUploader
                withIcon={false}
                buttonText='Choose images'
                onChange={handleImage}
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
            />
            <input onClick={handleQuantity} type="submit" value="add grocery" />
        </form>
    );
}

export default NewGroceryForm;