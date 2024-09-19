import React from 'react'

const About = () => {
    return (
        <section className='c-space my-20' id='about'>
            <div className='grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full'>
                <div className='col-span-1 xl:row-span-3'>
                    <div className='grid-container'>
                        <img src="/assets/grid1.png" alt="grid-1" className='w-full sm:h-[276px] h-fit object-contain' />

                        <div>
                            <p className='grid-headtext'>Hi, I'm Anyars</p>
                            <p className='grid-subtext'>
                                With almost 2 years of experience, I have honed my skills in frontend,
                                backend, and full-stack development, with a focus on React, Rails,
                                Next.js, and animated 3D websites
                            </p>
                        </div>
                    </div>
                </div>

                <div className='col-span-1 xl:row-span-3'>
                    <div className='grid-container'>
                        <img src="/assets/grid2.png" alt="grid-2" className='w-full sm:h-[276px] h-fit object-contain' />

                        <div>
                            <p className='grid-headtext'>Tech Stack</p>
                            <p className='grid-subtext'>
                                I specialised in JavaScript/TypeScript with a focus on React,
                                Rails, and Next.js ecosystems
                            </p>
                        </div>
                    </div>
                </div>

                <div className='col-span-1 xl:row-span-4'>
                    <div className='grid-container'>
                        <div className='rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center'>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About