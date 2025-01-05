import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './store/store.ts';
import { increment, decrement, toggleDisplay } from './reducer/CountSlice.ts';

function App() {
    const count = useSelector((state: RootState) => state.counter.count);
    const isCountVisible = useSelector((state: RootState) => state.counter.display);
    const dispatch = useDispatch();

    return (
        <div>
            {isCountVisible && <div>Count: {count}</div>}
            <br />
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <button onClick={() => dispatch(toggleDisplay())}>
                {isCountVisible ? 'Hide Count' : 'Show Count'}
            </button>
        </div>
    );
}

export default App;