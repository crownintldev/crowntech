"use client"
import React from 'react';
import { HeadingH2, HeadingH5 } from '../Heading';
import {  Para16 } from '../ParaGraph';
import Image from 'next/image';
import { TiTick } from 'react-icons/ti';
import { Aboutcore } from '../Constants';
import Container from '../Container';
import Link from 'next/link';
import Button from '../Button';
import { motion, useViewportScroll, useTransform } from 'framer-motion';



const Technology = () => {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1.1]);

  return (
<>
 <Container className={'bg-aboutfinger bg-no-repeat pt-32 bg-left-bottom'}>
          <div className='space-y-4 pb-10'>
            <HeadingH2 title='Technologies We Use' />
            <HeadingH2 className={"text-primary-blue300 "}  title=' Mostly' />
          </div>
      
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-5">
  {Aboutcore && Aboutcore.service.map((array, index) => (
    <motion.div  key={index} className={`shadow group mb-8 rounded-lg max-h-full h-auto flex justify-center items-center relative  bg-primary-black hover:bg-primary-black text-primary-white  `} style={{
      scale, // Apply the scale effect to the entire card
    }}>
      <div className="p-4 rounded-lg group-hover:opacity-25">
        <Image className="rounded-full" src={array.image} alt={array.image} />
        <HeadingH5 className="pl-2 " title={array.title} />
        <Para16 className="pl-2" title={array.para} />
      </div>
      
      <div className={`absolute opacity-0 w-full h-auto mt-10 mb-10 flex flex-col p-5 rounded-lg shadow  group-hover:opacity-100 bg-primary-black hover:bg-primary-black  dark:bg-primary-white text-primary-white`}>
        {array.item.map((items, index) => (
          <div className="flex flex-col gap-3" key={index}>
            <div className="flex">
              <TiTick size={22} className={``} />
              <Para16 className='text-primary-white' title={items.role} />
            </div>
          </div>
        ))}
        <Link className="mt-3" href={`${array.ref}`}>
          <Button className="bg-primary-blue300 hover:bg-primary-blue500 hover:text-primary-white text-primary-black h-10" text="View More" />
        </Link>
      </div>
    </motion.div>
  ))}
</div>

        
    </Container>

      </>
  );
};

export default Technology;
