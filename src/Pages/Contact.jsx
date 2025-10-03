import React from 'react'
import Banner from '../Subcontent/Banner'

const Contact = () => {
  return (
    <div>
      <Banner title="Contact Us" path="Contact" />

      <div className="contact-container">
      <h2 className="contact-title">Get In Touch</h2>
      <p className="contact-description">
        Amet consectetur adipisicing elit. Repell endus veniam, quaerat quasi in vel exerci
        tationem cum consequatur accusamus. Maxime quibusdam explicabo assumenda veniam velit.
      </p>

      <form className="contact-form">
        <div className="left-column">
          <input type="text" placeholder="First Name" required />
          <input type="text" placeholder="Last Name" required />
          <input type="email" placeholder="Email" required />
        </div>

        <div className="right-column">
          <textarea placeholder="Write Message" rows="8" required></textarea>
        </div>
      </form>

      <div className="button-container">
        <button type="submit">Send Now</button>
      </div>
    </div>
    </div>
  )
}

export default Contact