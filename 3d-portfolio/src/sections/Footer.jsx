import { useState } from 'react';
import { legalContent } from '../constants';

const Footer = () => {
    const year = new Date().getFullYear();
    const [activeLegal, setActiveLegal] = useState(null);

    const activeContent = activeLegal ? legalContent[activeLegal] : null;

    return (
        <>
            <section className='c-space pt-7 pb-3 border-t border-black-300 flex flex-col gap-4'>
            <div className="flex flex-col gap-1">
                <h2 className='text-white-500 text-center text-xl'>Chief Executive Officer:</h2>
                <p className='text-white-500 text-center text-sm'>Encarta Networks & Multimedia</p>
                <p className='text-white-500 text-center text-sm'>P. O. Box UST 449 Kumasi, Ashanti Region</p>
                <p className='text-white-500 text-center text-sm'> Location: <span>Sepe Tinpongmu, near the Central Mosque</span></p>
                <p className='text-white-500 text-center text-sm'>Email: <span>anyarsencarta@gmail.com</span> Tel: <span>+233 24 211 9972 / +233 20 259 4960</span></p>
            </div>

            <div className="flex sm:justify-between justify-center items-center flex-wrap gap-5">
                <div className='text-white-500 flex gap-2'>
                    <button
                        type='button'
                        className='hover:text-white transition-colors'
                        onClick={() => setActiveLegal('terms')}>
                        Terms and Conditions
                    </button>
                    <p>|</p>
                    <button
                        type='button'
                        className='hover:text-white transition-colors'
                        onClick={() => setActiveLegal('privacy')}>
                        Privacy Policy
                    </button>
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

            {activeContent && (
                <div className='fixed inset-0 z-[200] bg-black/80 backdrop-blur-sm flex items-center justify-center px-4'>
                    <div className='w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-2xl border border-black-300 bg-black-200 p-6 sm:p-8'>
                        <div className='flex items-start justify-between gap-4 mb-6'>
                            <div>
                                <h3 className='text-white text-2xl font-semibold'>{activeContent.title}</h3>
                                <p className='text-white-500 text-sm mt-1'>{activeContent.effectiveDate}</p>
                            </div>
                            <button
                                type='button'
                                className='text-white-500 hover:text-white transition-colors text-sm'
                                onClick={() => setActiveLegal(null)}>
                                Close
                            </button>
                        </div>

                        <div className='flex flex-col gap-5'>
                            {activeContent.sections.map((section) => (
                                <div key={section.heading}>
                                    <h4 className='text-white text-base font-semibold mb-1'>{section.heading}</h4>
                                    <p className='text-white-500 text-sm leading-relaxed'>{section.body}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Footer;
