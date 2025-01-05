import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { Customer } from '../models/Customer';
import { Modal } from '../component/Modal';

export function AddCustomer() {
    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = () => {
        const newCustomer = new Customer(name, email, phone);
        dispatch({ type: 'ADD_CUSTOMER', payload: newCustomer });
    };

    return (
        <>
            <header><h2>Add Customer</h2></header>
            <Modal handleSubmit={handleSubmit} setName={setName} setEmail={setEmail} setPhone={setPhone}>
                Add Customer
            </Modal>
        </>
    );
}