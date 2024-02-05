
import React from 'react'
import g2 from '../../../public/assets/images/g2.svg'
import g1 from '../../../public/assets/images/g1.svg'
import g3 from '../../../public/assets/images/g3.svg'
import g4 from '../../../public/assets/images/g4.svg'
import g5 from '../../../public/assets/images/g5.svg'
import g6 from '../../../public/assets/images/g6.svg'
import LayoutProvider from '@/Component/LayoutProvider'
import AboutHero from '@/Component/AboutHero'
import Testimonial from '@/Component/Testimonial'
import ChooseUs from '@/Component/ChooseUs'
import Footer from '@/Component/Footer'
import Header from '@/Component/Header'
export function generateMetadata() {
  return {
    title: "About", 
    description: "Generated by create next app"
  }
}
const About = () => {
  return (
    <LayoutProvider>
      <Header/>
      <AboutHero/>
      <ChooseUs
          maintitle={"CROWN Vision & Mission"}
          image1={g1}
          mainimage={g2}
          image2={g3}
          badge={"Mission"}
          choosetitle={"Our Mission"}
          choosepara={'Crown International Technology’s aim is to empower people, businesses, and organisations throughout the world by utilising cutting-edge digital technology. We work hard to provide cutting-edge solutions that boost productivity, connection, and efficiency while promoting sustainable growth. We strive to change the digital environment, inspire technical innovation, and enable our clients to succeed in the constantly changing digital era through our knowledge, creativity, and unrelenting pursuit of excellence.'}
          Choosedata={[
            { id: "1", title: " Advanced Digital Technology to Empower people" },
            { id: "2", title: " Businesses" },
            { id: "3", title: " Organizations Worldwide" },
            { id: "4", title: " Enhancing Productivity" },
            { id: "5", title: " Connectivity" },
            { id: "6", title: " Efficiency for Sustainable Growth and Success in the Digital Era" },
          ]}

        />

        <ChooseUs
          flex={'flex-row-reverse'}
          image1={g5}
          mainimage={g4}
          image2={g6}
          badge={"Vision"}
          choosetitle={"Our Vision"}
          choosepara={'Our company’s aim is to be the acknowledged global leader in digital solutions, revolutionizing sectors and enabling businesses to prosper in the digital era. We see a day when cutting-edge technology and creative strategies revolutionize how organizations run, improve human experiences, and have a beneficial influence on society. We intend to influence the digital environment, open up new opportunities, and serve as the global catalyst for sustainable growth and digital transformation with a dedication to quality, integrity, and forward-thinking. Let’s work together to create a connected world where technology has no bounds and opportunities are endless.'}
          Choosedata={[
            { id: "1", title: "Global Leadership in Digital Solutions" },
            { id: "2", title: " Revolutionizing Industries" },
            { id: "3", title: " Create fully integrated campaigns" },
            { id: "4", title: " Innovative Technology and Strategies" },
            { id: "5", title: " Enhancing Human Experience" },
            { id: "6", title: " Influencing the Digital Environment" },
          ]}

        />
        <Testimonial/>
        {/* <Blog/> */}
        <Footer/>
    </LayoutProvider>
  )
}

export default About;

