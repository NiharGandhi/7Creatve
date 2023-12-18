import { digitalmarketing } from "@/assets/data/dummydata"
import { Card } from "@/components/common/projectCard"
import { Title, TitleSm } from "@/components/common/Title"
import React from "react"

const DigitalMarketing = () => {
  return (
    <>
      <section className='agency bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='DIGITAL MARKETING'/> <br />
            {/* <br /> */}
            {/* <Title title='Unique technologies & modern approach' className='title-bg' /> */}
          </div>
          <div className='grid-2 py'>
            {digitalmarketing.map((item) => (
              <Card data={item} key={item.id} caption={item.post} show={true} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default DigitalMarketing
