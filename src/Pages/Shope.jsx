import React from 'react'
import "./pages.css"

const Shope = () => {

    const elementor = [
        {
            image: "../el1.png"
        },
        {
            image: "../el2.png"
        },
        {
            image: "../el3.png"
        },
        {
            image: "../el4.png"
        },
        {
            image: "../el5.png"
        },
        {
            image: "../el6.png"
        }
    ]

    const cakes = [
        {
            image: "../cake1.jpg",
            name : "glaze cake",
            price : "$99.00 - $199.00"
        },
        {
            image: "../cake2.jpg",
            name : "red velvet cake",
            price : "$59.00 - $139.00"
        },
        {
            image: "../cake3.jpg",
            name : "brownie cake",
            price : "$99.00 - $229.00"
        },
        {
            image: "../cake4.jpg",
            name : "salted caramel cake",
            price : "$199.00 - $399.00"
        }
    ]

    return (
        <div className="shope-section">
            <div className="video">
                <div className="v-tag">
                    <span>play</span>
                </div>
            </div>
            <div className="shope-online">
                <div className="container">
                    <div className="row">
                        <div className="elementor flex">
                            {
                                elementor.map((val) => {
                                    return (
                                        <div className="card">
                                            <img src={val.image} alt="" />
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className="head">
                            <span>shop online</span>
                            <h3>We welcome you in our confectionery!</h3>
                        </div>
                        <div className="all-cake-card flex">
                            {
                                cakes.map((val) => {
                                    return (
                                        <div className="main">
                                            <div className="card">
                                                <div className="image">
                                                    <img src={val.image} alt="" />
                                                </div>
                                                <div className="content">
                                                    <h3>{val.name}</h3>
                                                    <span>{val.price}</span>
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
        </div>
    )
}

export default Shope