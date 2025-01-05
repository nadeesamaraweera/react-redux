import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

function App() {
    // Access Redux state and dispatch
    const count = useSelector((state) => state.count); // Ensure you access the `count` property
    const dispatch = useDispatch();

    const [isCountVisible, setIsCountVisible] = useState(true);

    return (
        <div>
            <h1>Counter App</h1>
        {isCountVisible && <div>Count: {count}</div>}
            <br />
            <button onClick={() => dispatch({ type: 'INCREMENT', payload: 1 })}>Increment</button>
            <button onClick={() => dispatch({ type: 'DECREMENT', payload: 1 })}>Decrement</button>
            <button onClick={() => setIsCountVisible(!isCountVisible)}>
                {isCountVisible ? 'Hide Count' : 'Show Count'}
            </button>
        </div>
    );
}

export default App;
