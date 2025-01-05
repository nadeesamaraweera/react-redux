import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { Customer } from '../models/Customer';
import { Modal } from '../component/Modal';

export function DeleteCustomer() {
    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = () => {
        const deleteCustomer = new Customer(name, email, phone);
        dispatch({ type: 'DELETE_CUSTOMER', payload: deleteCustomer });
    };

    return (
        <>
            <header><h2>Delete Customer</h2></header>
            <Modal handleSubmit={handleSubmit} setName={setName} setEmail={setEmail} setPhone={setPhone}>
                Delete Customer
            </Modal>
        </>
    );
}