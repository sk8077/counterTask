import React from 'react';
import { useDispatch } from 'react-redux';
import { incrementCounter, decrementCounter, resetCounter, changeLabel, removeCounter, setValue } from '../redux/counter/counterSlice';

const Counter = ({ id, label, value }) => {
    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch(incrementCounter({ id }));
    };

    const handleDecrement = () => {
        dispatch(decrementCounter({ id }));
    };

    const handleReset = () => {
        dispatch(resetCounter({ id }));
    };

    const handleLabelChange = () => {
        const newLabel = prompt('Enter a new label for the counter:', label);
        if (newLabel !== null) {
            dispatch(changeLabel({ id, label: newLabel }));
        }
    };
    const handaleValueChange = () => {
        const value = prompt('Enter value:');
        dispatch(setValue({ id, value }))
    };

    const handleRemove = () => {
        dispatch(removeCounter({ id }));
    };

    return (

        <div className='counter'>
            <h3>{label}</h3>
            <div className='counter-value'>
                <span >{value}</span>
            </div>
            <div className='counter-method'>
                <button className="btn" onClick={handleIncrement}>Increment</button>
                <button className="btn" onClick={handleDecrement}>Decrement</button>
                <button className="btn" onClick={handleReset}>Reset</button>
                <button className="btn" onClick={handleLabelChange}>Change Label</button>
                <button className="btn" onClick={handaleValueChange}>Start value</button>
                <button className="btn" onClick={handleRemove}>Remove</button>
            </div>
        </div>

    );
};

export default Counter;
