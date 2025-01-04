import React from 'react'
import Book from './Book'

const Booklist = () => {
    return (
        <section className='flex justify-center'>
            <Book />
            <Book />
            <Book />
        </section>
    )
}

export default Booklist