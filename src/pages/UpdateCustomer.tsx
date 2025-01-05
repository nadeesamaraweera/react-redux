import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { Customer } from '../models/Customer';
import { Modal } from '../component/Modal';

export function UpdateCustomer() {
    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = () => {
        const updatedCustomer = new Customer(name, email, phone);
        dispatch({ type: 'UPDATE_CUSTOMER', payload: updatedCustomer });
    };

    return (
        <>
            <header><h2>Update Customer</h2></header>
            <Modal handleSubmit={handleSubmit} setName={setName} setEmail={setEmail} setPhone={setPhone}>
                Update Customer
            </Modal>
        </>
    );
}