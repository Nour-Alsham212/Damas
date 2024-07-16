import React, { useState } from 'react';
import Footer from './Footer';

const Contact = () => {
    const [title, setTitle] = useState('');

    return (
        <div className="contact">
            <h1>Contact Us</h1>
            <h2>If you have any question, feel free to get in touch with us</h2>
            <form>
                <h3>Contact form</h3>
                <label>NAME:</label>
                <input
                    type="text"
                    placeholder="Full Name"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>EMAIL:</label>
                <input
                    type="email"
                    placeholder="email@example.com"
                    required
                />
                <label>SUBJECT:</label>
                <input
                    type="text"
                    placeholder="Subject"
                    required
                />
                <label>MESSAGE:</label>
                <textarea
                    placeholder="Add Your Message"
                    required
                ></textarea>
                <button type="submit">SUBMIT</button>
            </form>
            <Footer />
        </div>
    );
}

export default Contact;
