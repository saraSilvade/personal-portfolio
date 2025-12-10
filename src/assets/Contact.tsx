import React, { useState } from 'react';
import {FaLinkedin, FaGithub } from 'react-icons/fa'
import Footer from './Footer';
import Header from './Header';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [status, setStatus] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const response = await fetch('https://formspree.io/f/xgejbrlq', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        if (response.ok) {
            setStatus('SUCCESS');
            setFormData({ name: '', email: '', message: '' });
        } else {
            setStatus('ERROR');
        }
    };

    return (
        <div>
            <Header />
            <div className='contact-page'>
                <div className='contact-sec1'>
                    <h1>Get in Touch</h1>
                    <div className='paragraph'>
                        <p >
                            I’d love to hear about what you’re working on and how I could help. I’m currently looking for a new role and am open to a wide range of opportunities. My preference would be to find a position in a company in Stockholm. But I’m also happy to hear about opportunities that don’t fit that description. I’m a hard-working and positive person who will always approach each task with a sense of purpose and attention to detail. Please do feel free to check out my work and get in touch using the form.
                        </p>
                        <ul className='contact-linkss'>
                            <li> <a href="https://www.linkedin.com/in/sara-leepark-5ba013263/" target="_blank" rel="noopener noreferrer" title="linked in profile">
            <FaLinkedin size={30} />
        </a></li>
                            <li> <a href="https://github.com/leeparksara" target="_blank" rel="noopener noreferrer" title="Github profile"><FaGithub size={30} />  </a>     </li>
                        </ul>
                    </div>
                </div>
                <div className='contact-sec2'>
                    <h1>Contact Me</h1>
                    <form onSubmit={handleSubmit}>
                        <label>Name</label>
                        <input type='text' name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" required />
                        <label>Email Address</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder='Enter your email' required />
                        <label>Message</label>
                        <textarea name="message" value={formData.message} onChange={handleChange} placeholder='How can I help you?' cols={35} required />
                        <button className="submit" type="submit">Send message</button>
                    </form>
 
                </div>
                {status === 'SUCCESS' && <p className='formMessage'>Thanks! Your message has been sent.</p>}
                {status === 'ERROR' && <p className='formMessage'>Oops! There was an error sending your message. Please try again.</p>}
            </div>
            <Footer />
        </div>
    );
}

export default Contact;
