import { useSelector } from 'react-redux';
import { Customer } from '../models/Customer';

export function Dashboard() {
    const customers = useSelector((state: any) => state.customer);

    return (
        <>
            <h2>Dashboard</h2>
            {customers.map((customer: Customer) => (
                <div key={customer.email}>
                    {customer.name} {' '} {customer.email} {' '} {customer.phone}
                </div>
            ))}
        </>
    );
}