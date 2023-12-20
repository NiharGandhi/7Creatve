import { Title, TitleSm } from "@/components/common/Title"
import React from "react"
import { AiFillBehanceCircle, AiFillInstagram, AiFillLinkedin } from "react-icons/ai"
import { BiUserCircle } from "react-icons/bi"
import { BsFacebook } from "react-icons/bs"
import { FiHeadphones, FiHelpCircle } from "react-icons/fi"
import { IoLocationOutline } from "react-icons/io5"
import Link from "next/link";

const Contact = () => {
  return (
    <>
      <section className='contact bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='CONTACT' /> <br />
            <br />
            <Title title="Let's start right now!" className='title-bg' />
          </div>
          <div className='content py flex1'>
            <div className='left w-30'>
              <div className='contact-deatils'>
                <div className='box'>
                  <FiHeadphones size={30} className='icons' />
                  <h3>+971 58 274 5157</h3>
                  <span>Call us: Mon - Fri 9:00 - 19:00</span>
                </div>
                <div className='box'>
                  <IoLocationOutline size={30} className='icons' />
                  <h3>Dubai, UAE</h3>
                  {/* <span>990 Madison Ave, Midtown Manhattan, 2th Floor, NY 10022</span> */}
                </div>
                <div className='box'>
                  <FiHelpCircle size={30} className='icons' />
                  <h3>info@wedesigning.com</h3>
                  <span>Drop us a line anytime!</span>
                </div>
                <div className='box'>
                  <BiUserCircle size={30} className='icons' />
                  <h3>hr@wedesigning.com</h3>
                  <span>Career at Seven Creative</span>
                </div>
              </div>
              <ul>
                <li className='icon'>
                  <Link href='https://www.facebook.com'>
                    <BsFacebook size={25} />
                  </Link>
                </li>
                <li className='icon'>
                  <Link href='https://www.instagram.com'>
                    <AiFillInstagram size={25} />
                  </Link>
                </li>
                <li className='icon'>
                  <Link href='https://www.linkedin.com'>
                    <AiFillLinkedin size={25} />
                  </Link>
                </li>
              </ul>
            </div>
            <div className='right w-70'>
              <TitleSm title='Make an online enquiry' />
              <p className='desc-p'>Got questions? Ideas? Fill out the form below to get our proposal. </p>

              <form>
                <div className='grid-2'>
                  <div className='inputs'>
                    <span>Name</span>
                    <input type='text' id="name"/>
                  </div>
                  <div className='inputs'>
                    <span>Email</span>
                    <input type='email' id="email"/>
                  </div>
                </div>
                <div className='grid-2'>
                  <div className='inputs'>
                    <span>your budget</span>
                    <input type='text' id="budget"/>
                  </div>
                  <div className='inputs'>
                    <span>timeframe</span>
                    <input type='text' id="time"/>
                  </div>
                </div>
                <div className='inputs'>
                  <span>TELL US A BIT ABOUT YOUR PROJECT*</span>
                  <textarea cols='30' rows='10' id="message"></textarea>
                </div>
                <button type='submit' className='button-primary'>Submit</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
