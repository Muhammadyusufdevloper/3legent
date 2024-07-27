import { memo } from "react"
import "./contactHeader.scss"
const ContactHeader = () => {
    return (
        <>
            <div className="contact-header container">
                <div className="contact-header__wrapper">
                    <h1 className="contact-header__title">We believe in sustainable decor. We’re passionate about life at home.</h1>
                    <p className="contact-header__desc">Our features timeless furniture, with natural fabrics, curved lines, plenty of mirrors and classic design, which can be incorporated into any decor project. The pieces enchant for their sobriety, to last for generations, faithful to the shapes of each period, with a touch of the present</p>
                </div>
            </div>
        </>
    )
}

export default memo(ContactHeader)