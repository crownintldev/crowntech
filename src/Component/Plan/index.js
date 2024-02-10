
import React, { useState } from 'react'
import Button from '../Button'
import PlanCard from '../PlanCard'
import { BiRightArrowAlt } from 'react-icons/bi'
import { HeadingH1, HeadingH6 } from '../Heading'
import { Para18 } from '../ParaGraph'

const Plan = ({ serviceTabId,setServiceplanId }) => {
  return (
    
    <div className=' w-full p-4 bg-finger bg-no-repeat shadow backdrop-blur-3xl'>
      <div className='grid grid-cols-1 mb-3 '>
        <div className='text-center'>
          <HeadingH1 spanclass={'text-primary-blue100'} title={'Choose The Best '} title1={"Plan"}/>
          <Para18 className={''} title={'Pick your plan.'}/>
          <Para18 title={'Change whenever you want.'}/>
        </div>
       
      </div>
      <PlanCard serviceTabId={serviceTabId} setServiceplanId={setServiceplanId}/>

    </div>
  )
}

export default Plan

