import Banner from "@/components/Banner"
import Brand from "@/components/Brand"
import Testimonial from "@/components/Testimonial"
import { Title, TitleSm } from "@/components/common/Title"

const About = () => {
  return (
    <>
      <section className='agency bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='ABOUT US' /> <br />
            <br />
            <Title title='The last digital agency you will ever need!' className='title-bg' />
          </div>

          <div className='content flex1'>
            <div className='left w-60 py'>
              <TitleSm title='Turning your business ideas into smart digital products' />
              <p className='desc-p'>
                Welcome to D&N, where creativity meets precision. Founded on the principles of excellence, we are a dynamic team of professionals dedicated to transforming ideas into impactful visuals. With a diverse skill set spanning social media content creation, Adobe Creative Suite proficiency, and expert design across various mediums, we take pride in delivering tailored solutions for your brand. Our commitment to quality, innovation, and client satisfaction defines us. Discover the power of collaborative brilliance with D&N. Your vision, our expertise – a partnership for success.</p>
              <div className='grid-3'>
                <div className='box'>
                  <h1 className='indigo'>3+</h1>
                  <h3>Years of experience</h3>
                </div>
                <div className='box'>
                  <h1 className='indigo'>50+</h1>
                  <h3>Successful cases</h3>
                </div>
              </div>
            </div>
            <div className='right w-40 ml'>
              <img src='/images/s1.jpg' alt='Img' className='round' width='100%' height='100%' />
            </div>
          </div>

          <div className='content flex'>
            <div className='left w-40 py'>
              <img src='/images/s4.jpg' alt='Img' className='round' width='100%' height='100%' />
            </div>
            <div className='right w-60 ml'>
              <TitleSm title='Our Mission' />
              <br />
              <p className='misson-p'>At D&N, our mission is to empower businesses and individuals with compelling visual narratives that transcend expectations. We strive to be the catalyst for your brand's success by seamlessly blending creativity with strategic precision. Committed to excellence, innovation, and personalized solutions, we aim to not only meet but exceed your aspirations. With a passion for transforming ideas into captivating visuals, we embark on a journey to elevate your brand to new heights. Your success is our mission, and together, we create a visual legacy that resonates.</p>
            </div>
          </div>
        </div>
      </section>

      <Banner />
      <br />
      <br />
      <br />
      <br />
    </>
  )
}

export default About
