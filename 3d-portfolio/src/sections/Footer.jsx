const Footer = () => {
    const year = new Date().getFullYear()

    return (
        <section className='c-space pt-7 pb-3 border-t border-black-300 flex flex-col gap-4'>
        <div className="flex flex-col gap-1">
            <h2 className='text-white-500 text-center text-xl'>Chief Executive Officer:</h2>
            <p className='text-white-500 text-center text-sm'>Encarta Networks & Multimedia</p>
            <p className='text-white-500 text-center text-sm'>P. O. Box 50 Nalerigu, North East Region</p>
            <p className='text-white-500 text-center text-sm'> Location: <span>Baptist Medical Centre - Nalerigu</span></p>
            <p className='text-white-500 text-center text-sm'>Email: <span>anyarsencarta@gmail.com</span> Tel: <span>+233 24 211 9972 / +233 20 259 4960</span></p>
        </div>

        <div className="flex sm:justify-between justify-center items-center flex-wrap gap-5">
            <div className='text-white-500 flex gap-2'>
                <p>Terms and Conditions</p>
                <p>|</p>
                <p>Privacy Policy</p>
            </div>

            <div className='flex gap-3'>
                <div className='social-icon'>
                    <a href="https://github.com/anyars-encarta" target='_blank' rel='noreferrer' className='flex items-center justify-center'>
                        <img src="/assets/github.svg" alt="github" className='w-1/2 h-1/2' />
                    </a>
                </div>

                <div className='social-icon'>
                    <a href="https://x.com/anyarsencarta" target='_blank' rel='noreferrer' className='flex items-center justify-center'>
                        <img src="/assets/x.svg" alt="twitter" className='w-1/2 h-1/2' />
                    </a>
                </div>

                <div className='social-icon'>
                    <a href="https://www.linkedin.com/in/anyars-yussif/" target='_blank' rel='noreferrer' className='flex items-center justify-center'>
                        <img src="/assets/linkedin.svg" alt="linkedin" className='w-1/2 h-1/2' />
                    </a>
                </div>

                <div className='social-icon'>
                    <a href="https://www.instagram.com/anyarsyussif/" target='_blank' rel='noreferrer' className='flex items-center justify-center'>
                        <img src="/assets/instagram.svg" alt="linkedin" className='w-1/2 h-1/2' />
                    </a>
                </div>
            </div>

            <p className='text-white-500'>© {year} Anyars Yussif. All rights reserved</p>
        </div>
        </section>
    )
}

export default Footer