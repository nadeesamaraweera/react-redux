import './App.css'
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {printName} from "./reducer/CustomerSlice.ts";

function App() {
    const customer = useSelector(state => state.customer.name)

    const dispatch = useDispatch();

    const [name, setName] = useState('');

    return (
        <>
            <input type={"text"} placeholder={"Name : "} onChange={(e) => setName(e.target.value)} value={name}></input>

            <br/>
            <br/>

            <button onClick={() => dispatch(printName(name))}>Print Name</button>

            <br/>
            <br/>

            {customer}
        </>
    )
}

export default App
