import React from 'react'

const BookList = () => {
  return (
    <section>
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  )
}

const Book = () => {
  return (
    <article className='book'>
      <img
        src='https://images-na.ssl-images-amazon.com/images/I/71m+Qtq+HrL._AC_UL900_SR900,600_.jpg'
        alt='Interesting Facts For Curious Minds'
      />
      <h2>Interesting Facts For Curious Minds</h2>
      <h4>Jordan Moore </h4>
    </article>
  )
}

export default BookList