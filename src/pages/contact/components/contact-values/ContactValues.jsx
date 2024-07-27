import { VALUES } from "../../../../static/data"
import "./ContactValues.scss"
const ContactValues = () => {
    return (
        <>
            <section className="contact-values">
                <div className="container">
                    <div className="contact-values__wrapper">
                        {
                            VALUES?.map((item) => (
                                <div key={item.id} className="contact-values__card">
                                    <img src={item.img} alt="" />
                                    <h3 className="contact-values__card-title">{item.title}</h3>
                                    <p className="contact-values__card-text">{item.text}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactValues