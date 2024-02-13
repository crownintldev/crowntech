import React from 'react'
import Container from '../Container'
import { HeadingH1 } from '../Heading'
import { Para16 } from '../ParaGraph'
import Image from 'next/image'
import heropolicy from '../../../public/assets/images/heropolicy.jpg'

const PrivacyHero = () => {
  return (
    <>
    <div className='bg-primary-blue100 h-[30vh] md:h-[40vh]  bg-policyright bg-no-repeat bg-right-top pt-10 md:pt-20'>
    <Container className={'flex flex-col justify-center items-center space-y-5 text-primary-black'}>
       <HeadingH1 title={'Terms and Condition'}/> 
       <Para16 className='text-primary-black' title={'Under no circumstances shall AliThemes be liable for any direct, '}/>
     </Container>  
    </div>
    </>
  )
}

export default PrivacyHero