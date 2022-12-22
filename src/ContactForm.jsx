import React, { useRef, useState } from 'react'
import emailjs from 'emailjs-com'
import ExclamationCircle from './assets/ExclamationCircle'
import CheckCircle from './assets/CheckCircle'
import Loading from './assets/Loading'

export default function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [emailSent, setEmailSent] = useState(false)
  const [sendingMessage, setSendingMessage] = useState(false)
  const [messageStatus, setMessageStatus] = useState(null)
  const form = useRef()



  const messageStatusGood = (
    <div className="status-message pop-up">
      <CheckCircle className="green1" size={24} />
      <span>Message Sent</span>
    </div>
  )

  const messageStatusBad = (
    <div className="status-message pop-up">
      <ExclamationCircle className="red1" size={24} />
      <span>A problem occured. Try camloken@gmail.com</span>
    </div>
  )

  const spinner = <Loading className="spin" size={20} />

  const sendEmail = (e) => {
    e.preventDefault()
    setSendingMessage(true)
    setMessageStatus(null)

    emailjs.sendForm('service_84n7pzp', 'template_1cfchaq', form.current, 'R3tH5-boXFlOQNe3D')
      .then((result) => {
        // console.log(result, result.text)
        setName('')
        setEmail('')
        setMessage('')
        setEmailSent(true)
        setSendingMessage(false)
        setMessageStatus(messageStatusGood)
      }, (error) => {
        // console.log(error.text)
        setSendingMessage(false)
        setMessageStatus(messageStatusBad)
      })
  }

  return (
    <section className="contact-form max-width mb-100">
      <form ref={form} onSubmit={sendEmail}>
        <h4 className="m-0">Let's make something amazing!</h4>
        <p className="mt-10 mb-40">Thanks for taking the time to check out my work. Let's chat.</p>
        <div className="flex-row gap-20 mb-20">
          <div className="flex-column flex-1">
            <label>Full Name</label>
            <input
              type="text"
              name="user_name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex-column flex-1">
            <label>Email</label>
            <input
              type="email"
              name="user_email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="flex-column mb-20">
          <label>Message</label>
          <textarea
            name="message"
            value={message}
            maxLength="15000"
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <div className="flex-row flex-justify-end mt-50">
          {messageStatus}
          <button
            className="primary-btn"
            type="submit"
            disabled={sendingMessage}
          >
            {sendingMessage ? spinner : 'Send'}
          </button>
        </div>
      </form>
    </section>

  )
}
