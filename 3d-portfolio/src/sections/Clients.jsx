import React, { useState } from 'react'
import { clientReviews } from '../constants'

const allReviews = clientReviews.length;

console.log(allReviews)
const Clients = () => {
    const [initialCount, setInitialCount] = useState(4);

    const handleShowMore = () => {
        if (initialCount >= allReviews) {
            setInitialCount(4);

            const reviewsElement = document.getElementById('clients');
            reviewsElement.scrollIntoView({ behavior: 'smooth' });
        } else {
            setInitialCount(initialCount + 4);
        }
    };

    return (
        <section className='c-space my-20' id='clients'>
            <h3 className='head-text'>Hear from my Clients & Partners</h3>

            <div className='client-container'>
                {clientReviews.slice(0, initialCount).map(({ id, name, position, img, review }) => (
                    <div className='client-review' key={id}>
                        <div>
                            <p className='text-white font-light'>{review}</p>
                            <div className='client-content'>
                                <div className='flex gap-3'>
                                    <img src={img} alt={name} className='w-12 h-12 rounded-full' />

                                    <div className='flex flex-col'>
                                        <p className='font-semibold text-white-800'>{name}</p>
                                        <p className='text-white-500 md:text-base text-sm'>{position}</p>
                                    </div>
                                </div>

                                <div className='flex self-end items-center gap-2'>
                                    {Array.from({ length: 5 }).map((_, i) => (
                                        <img src="/assets/star.png" alt="star" key={i} className='w-5 h-5' />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className='w-full flex items-center justify-center mt-5'>
                <img src="/assets/arrow-down.svg" alt="arrow" className={`w-8 h-8 cursor-pointer ${initialCount >= allReviews ? 'rotate-180' : ''}`} onClick={handleShowMore} />
            </div>
        </section>
    )
}

export default Clients