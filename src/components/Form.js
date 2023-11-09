import './Form.css'

import React from 'react'

const Form = () => {
  return (
    <div className='form'>
        <label>Your Name</label>
        <input type="text"></input>
        <label>Your Email</label>
        <input type="email"></input>
        <label>Subject</label>
        <input type="text"></input>
        <label>Message</label>
        <textarea rows={10} placeholder='Type your message here'/>
        <button className='btn'>Submit</button>
    </div>
  )
}

export default Form
