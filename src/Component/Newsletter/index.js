import React from 'react'
import choosemain from '../../../public/assets/images/choosemain.png'
import choose1 from '../../../public/assets/images/choose1.png'
import choose3 from '../../../public/assets/images/choose3.png'
import Image from 'next/image'
import { Para16, Para18 } from '../ParaGraph'
import { HeadingH2 } from '../Heading'
import Button from '../Button'
import { BiRightArrowAlt } from 'react-icons/bi'
import Container from '../Container'

const Newsletter = () => {
  return (
    <>
     <Container className={'pt-20 pb-20'}>
     <div className='bg-primary-blue400 bg-newsletter bg-no-repeat bg-right-top rounded-md'>
    <div className='flex flex-wrap md:flex-nowrap gap-5 p-4 pt-20 pb-20'>
    <div className=' w-full md:w-6/12 hidden md:block'>
    <Image className='rounded-full' src={choosemain} alt='choosemain' />
    </div>
    <div className='md:w-6/12 text-primary-black space-y-4 '>
        <Para18 className='text-primary-black' title={"Newsletter"}/>
        <HeadingH2 className='text-primary-black' title={"Subcribe our newsletter"}/>
        <Para16 className='text-primary-black' title={"By clicking the button, you are agreeing with our Terms & Conditions"}/>

        <div className="flex items-center w-full md:w-4/5 border rounded bg-white p-3">
        <input className="appearance-none bg-transparent text-18 w-full text-black py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Subcribe our newsletter"/>
        <Button btnicon={<BiRightArrowAlt size={25}/>} className="flex-shrink-0 bg-primary-blue300 hover:bg-primary-blue400 border-primary-blue300 hover:border-primary-blue400"/>
    </div>
    </div>
    </div>
    
    </div> 
      </Container> 
    


    </>
  )
}

export default Newsletter