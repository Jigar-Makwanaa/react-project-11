import React from 'react'
import "./pages.css"

const About = () => {

    const cards = [
        {
            image: "url('../fruit.jpg')",
            span : "fruit pies"
        },
        {
            image: "url('../macrons.jpg')",
            span : "macrons"
        },
        {
            image: "url('../candies.jpg')",
            span : "candies"
        },
        {
            image: "url('../pop.jpg')",
            span : "popsicles"
        }
    ]

    return (
        <div className="about-section">
            <div className="container">
                <div className="row">
                    <div className="head">
                        <span>who we are</span>

                        <h3>The best confectionery for your enjoyment</h3>
                    </div>
                    <div className="all-cards flex">
                        {
                            cards.map((val) => {
                                return (
                                    <div className="main">
                                        <div className="card" style={{ backgroundImage: `${val.image}` }}>
                                            <div className="containe">
                                                <div className="name">
                                                    <span>{val.span}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About