import React from 'react'
import AddCounter from '../components/addCounter'
import DisplayCounter from '../components/displayCounter'

const Home = () => {
    return (
        <section className='container'>
            <AddCounter />
            <DisplayCounter />
        </section>
    )
}

export default Home
