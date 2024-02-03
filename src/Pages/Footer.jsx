import React from 'react'
import "./pages.css"

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="main flex">
                        <div className="logo">
                            <img src="../logo-inverse.webp" alt="" />
                        </div>
                        <div className="hello">
                            <h3>Say Hello</h3>
                            <span>info@email.com</span>
                            <h4>+1 800 555 25 69</h4>
                        </div>
                        <div className="socials">
                            <h3>socials</h3>
                            <ul>
                                <li>facebook</li>
                                <li>twitter</li>
                                <li>dribble</li>
                                <li>instagram</li>
                            </ul>
                        </div>
                        <div className="address">
                            <h3>Address</h3>
                            <p>Germany — <br />785 15h Street, Office 478 <br />Berlin, De 81566</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer