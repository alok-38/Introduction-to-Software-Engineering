import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Main = () => {
    return (
        <>
            <Header />
            <main>
                <div className='flex justify-center'>
                    <section>
                        <div>Left Section</div>
                    </section>
                    <section>
                        <div>Right Section</div>
                    </section>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Main