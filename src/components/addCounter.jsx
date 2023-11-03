
import { useDispatch } from 'react-redux';
import { addCounter } from '../redux/counter/counterSlice';

const AddCounter = () => {
    const dispatch = useDispatch();

    const handleAddCounter = () => {

        dispatch(addCounter());
    };

    return (
        <div className='add-counter'>
            <button onClick={handleAddCounter} className='btn btn-add'>Add Counter</button>
        </div>
    );
}

export default AddCounter;
