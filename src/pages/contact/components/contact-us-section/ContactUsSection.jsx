import { useState } from "react";
import { memo } from "react";
import "./ContactUsSection.scss";
import { VALUES } from "../../../../static/data";
import { toast } from "react-toastify";

const BOT_TOKEN = "7296011111:AAH9fsPtqvBOqekhvlcG9MVl4JBifgNtEJk";
const CHAT_ID = "-1002221404265";

const initialState = {
    fullName: "",
    email: "",
    message: ""
};

const ContactUsSection = () => {
    const [formData, setFormData] = useState(initialState);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { fullName, email, message } = formData;
        const messageText = `Full Name: ${fullName}\nEmail: ${email}\nMessage: ${message}`;

        try {
            const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    chat_id: CHAT_ID,
                    text: messageText
                })
            });

            if (response.ok) {
                toast.success("Your message has been sent!");
                setFormData(initialState);
            } else {
                toast.error("Failed to send message. Please try again.");
            }
        } catch (error) {
            toast.error("Error sending message. Please try again.");
        }
    };

    return (
        <>
            <div className="contact-us-section">
                <div className="container">
                    <h2 className="contact-us-section__title">Contact Us</h2>
                    <div className="contact-us-section__information">
                        {
                            VALUES.slice(0, 3).map((item) => (
                                <div key={item.id} className="contact-us-section__card">
                                    <img src={item.img} alt={item.title} />
                                    <h3 className="contact-us-section__card-title">{item.title}</h3>
                                    <p className="contact-us-section__card-text">{item.text}</p>
                                </div>
                            ))
                        }
                    </div>
                    <div className="contact-us-section__box">
                        <form className="contact-us-section__form" onSubmit={handleSubmit}>
                            <div className="contact-us-section__input-card">
                                <label className="contact-us-section__label" htmlFor="full-name">Full Name</label>
                                <input
                                    className="contact-us-section__input"
                                    id="full-name"
                                    name="fullName"
                                    placeholder="Your Name"
                                    type="text"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="contact-us-section__input-card">
                                <label className="contact-us-section__label" htmlFor="email">Email address</label>
                                <input
                                    className="contact-us-section__input"
                                    id="email"
                                    name="email"
                                    placeholder="Your Email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="contact-us-section__input-card">
                                <label className="contact-us-section__label" htmlFor="message">Message</label>
                                <textarea
                                    className="contact-us-section__area"
                                    id="message"
                                    name="message"
                                    placeholder="Your Message"
                                    value={formData.message}
                                    onChange={handleChange}

                                />
                            </div>
                            <button className="contact-us-section__btn" type="submit">Send Message</button>
                        </form>
                        <div className="contact-us-section__map">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d23986.05423356637!2d69.2057574!3d41.281515649999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1722015303241!5m2!1sen!2s"
                                width="600"
                                height="450"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default memo(ContactUsSection);
