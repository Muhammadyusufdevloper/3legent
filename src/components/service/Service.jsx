import { memo } from "react"
import { VALUES } from "../../static/data"
import "./service.scss"
const Service = () => {
    const service = VALUES?.map((item) => {
        return (
            <div key={item.id} className="service__card">
                <img src={item.img} alt="" />
                <h3 className="service__card-title">{item.title}</h3>
                <p className="service__card-text">{item.text}</p>
            </div>
        )
    })
    return (
        <>
            <section className="service">
                <div className="container">
                    <div className="service__cards">
                        {service}
                    </div>
                </div>
            </section>
        </>
    )
}

export default memo(Service)