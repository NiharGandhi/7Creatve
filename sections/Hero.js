import { home } from "@/assets/data/dummydata"
import Banner from "@/components/Banner"
import Expertise from "@/components/Expertise"
import ShowCase from "@/components/ShowCase"
import Testimonial from "@/components/Testimonial"
import { Title, TitleLogo, TitleSm } from "@/components/common/Title"
import { BlogCard, Brand } from "@/components/router"
import React from "react"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          {/* LOGO COMPANY NAME */}
          <TitleLogo title='Designing' caption='We' className='logobg' />
          <h1 className='hero-title'>WE BUILD DIGITAL EXPERIENCES</h1>

          <div className='sub-heading'>
            <TitleSm title='WEBSITES' /> <span>.</span>
            <TitleSm title='BRANDING' /> <span>.</span>
            <TitleSm title='DIGITAL MARKETING' />
          </div>
        </div>
      </section>
      <section className='hero-sec'>
        <div className='container'>
          <div className='heading-title'>
            <Title title='The last digital agency you ll ever need' />
            <p>At our agency, we specialize in providing a comprehensive suite of professional services tailored to elevate your brand. From dynamic Social Media Content Creation (Reels, Stories, Posts, TikToks) to adept use of Adobe Premiere Pro, Photoshop, and Audition, as well as expert designs for posters, flyers, business cards, and UI/UX, we bring a refined touch to every project, ensuring your brand stands out with compelling visual appeal and seamless user experiences.</p>
          </div>
          <div className='hero-content grid-4'>
            {home.map((item, i) => (
              <div className='box' key={i}>
                <span className='green'>{item.icon}</span> <br />
                <br />
                <h3>{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Expertise />
      {/* <Banner /> */}
      {/* <Testimonial /> */}
      {/* <ShowCase /> */}
      {/* <Brand /> */}
      
      {/* Blog */}
      {/* <div className='text-center'>
        <Title title='Latest News & Articles' />
      </div>
      <BlogCard /> */}
    </>
  )
}

export default Hero
