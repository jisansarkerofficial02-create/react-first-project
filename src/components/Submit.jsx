import { useState } from 'react'

const Submit = () => {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!event.currentTarget.reportValidity()) return
    setSubmitted(true)
    setEmail("")
  }

  return (
    <section className='submit mt-30'>
        <div className='submit-inner flex justify-between items-center my-32 mx-25'>
            <h3>Enter your email address for our mailing Promo or other interesting things</h3>
            <form className='submit-form flex gap-6' onSubmit={handleSubmit}>
                <label className="sr-only" htmlFor="newsletter-email">Email address</label>
                <input id="newsletter-email" className='py-4 pl-6 pr-82 border border-[#D9D9D9] bg-transparent text-[#FFFFFF] rounded-[5px]' type="email" value={email} onChange={(event) => { setEmail(event.target.value); setSubmitted(false) }} placeholder='Enter your email' required />
                <button type="submit" className='text-white cursor-pointer font-lato font-medium text-[17px] py-3 px-11 border border-[#285A43] rounded-[3px] bg-[#285A43]'>Subscribe</button>
                {submitted && <p className="newsletter-success" role="status">Thanks for subscribing!</p>}
            </form>
        </div>
    </section>
  )
}

export default Submit
