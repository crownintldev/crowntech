
import React from 'react'
import { Para16, Para18 } from '../ParaGraph'
import { HeadingH1 } from '../Heading'

const ContactHero = ({title, heading1, heading2, para , className}) => {


  return (
    <div className={`  pt-10  w-full `}>
    <div className='xl:p-18 lg:p-10 md:p-2 sm:p-2 p-3 space-y-4 text-center'>
        <Para18 className={'font-bold text-justify'} title={title}/>
        <div className='-space-y-3'>
        <HeadingH1 title={heading1}/>
        <HeadingH1 className={`${className}`} title={heading2}/>
        </div>
        <Para16 title={para}/>
    </div>
  
    </div>
  )
}

export default ContactHero