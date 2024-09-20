import React, { useRef, useState } from 'react';

const Contact = () => {
    const formRef = useRef();
    const [loading, setLoading] = useState(false);

    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { target } = e;
        const { name, value } = target;
    };

    const handleSubmit = () => {
        console.log(form);
    };

    return (
        <section className='c-space my-20' id='contact'>
            <div className='relative min-h-screen flex items-center justify-center flex-col'>
                <img src="/assets/terminal.png" alt="terminal background" className='absolute insert-0 min-h-screen' />

                <div className='contact-container'>
                    <h3 className='head-text'>Let's talk</h3>

                    <p className='text-lg text-white-600 mt-3'>
                        Whether you are looking to build a new website,
                        improve your existing platform, or bring a
                        unique project to life, I'm here to help.
                    </p>

                    <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col space-y-7'>
                        <label htmlFor="name" className='space-y-3'>
                            <span className='field-label'>Full Name</span>
                        </label>
                        <input
                            type="text"
                            name='name'
                            id='name'
                            value={form.name}
                            onChange={handleChange}
                            required
                            placeholder='John Doe'
                            className='field-input'
                        />

                        <label htmlFor="email" className='space-y-3'>
                            <span className='field-label'>Email Address</span>
                        </label>
                        <input
                            type="email"
                            name='email'
                            id='email'
                            value={form.email}
                            onChange={handleChange}
                            required
                            placeholder='john@something.com'
                            className='field-input'
                        />


                        <label htmlFor="message" className='space-y-3'>
                            <span className='field-label'>Your Message</span>
                        </label>
                        <textarea
                            name='message'
                            id='message'
                            value={form.message}
                            onChange={handleChange}
                            required
                            rows={5}
                            placeholder="Hi, I'm interested in..."
                            className='field-input'
                        />

                        <button className='btn btn-primary'>Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact