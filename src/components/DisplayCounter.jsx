import React from 'react';
import { useSelector } from 'react-redux';

import Counter from './Counter';

const DisplayCounter = () => {
    const counters = useSelector(state => state.counterState);

    return (
        <section className='container'>
            <div className='couters'>
                <h2>Counters</h2>
                <div className='counter-list'>
                    {counters.map((counter) => (
                        <Counter key={counter.id} {...counter} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DisplayCounter;
