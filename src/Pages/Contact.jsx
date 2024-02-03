import React, { useState } from 'react'
import "./pages.css"
import { Link } from 'react-router-dom'
import axios from 'axios'

const Contact = () => {

    const [name, setname] = useState('')
    const [company, setCompany] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [massage, setMassage] = useState('')

    const handleClick = async (e) => {
        e.preventDefault()

        try {
            const addData = await axios.post(`https://reactjs-firebse-crude-default-rtdb.firebaseio.com/jigar.json`, {
                name: name,
                company: company,
                email: email,
                phone: phone,
                massage: massage
            })
            console.log(addData.data);

            alert("Record added")

            setname('')
            setCompany('')
            setEmail('')
            setPhone('')
            setMassage('')

        } catch (err) {
            console.log(err);
            return false
        }
    }

    return (
        <div className="contact-page">
            <div className="container">
                <div className="row">
                    <div className="main flex">
                        <div className="address">
                            <h2>Contact details</h2>
                            <p>785 15h Street,<br /> Office 478 Berlin,<br /> De 81566</p>
                            <span>info@email.com</span>
                            <h3>+1 800 555 25 69</h3>
                        </div>
                        <div className="form">
                            <form onSubmit={(e) => handleClick(e)}>
                                <ul className='flex'>
                                    <li>
                                        <input type="text" placeholder='Name' onChange={(e) => setname(e.target.value)} value={name} />
                                    </li>
                                    <li>
                                        <input type="text" placeholder='Company' onChange={(e) => setCompany(e.target.value)} value={company} />
                                    </li>
                                    <li>
                                        <input type="text" placeholder='Email' onChange={(e) => setEmail(e.target.value)} value={email} />
                                    </li>
                                    <li>
                                        <input type="text" placeholder='Phone Number' onChange={(e) => setPhone(e.target.value)} value={phone} />
                                    </li>
                                </ul>
                                <div className="massage">
                                    <textarea name="" id="" cols="30" rows="10" onChange={(e) => setMassage(e.target.value)} value={massage}></textarea>
                                </div>
                                <div className="btn">
                                    <button type='submit'>submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact