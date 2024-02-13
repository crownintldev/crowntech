"use client"
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import img1 from '../../../public/assets/images/img1.jpg';
import img2 from '../../../public/assets/images/img2.jpg';
import img3 from '../../../public/assets/images/img3.jpg';
import img4 from '../../../public/assets/images/img4.jpg';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import Button from '../Button';
import { slider } from '../Constants';
import { Para12, Para16, Para18 } from '../ParaGraph';

const Hero = () => {
  const carouselRef = useRef(null);
  const [autoSlide, setAutoSlide] = useState(null);

  const timeRunning = 4000;
  const timeAutoNext = 7000;

  const showSlider = (type) => {
      const carousel = carouselRef.current;
      const sliderItems = carousel.querySelectorAll('.list .item');
      const thumbnailItems = carousel.querySelectorAll('.thumbnail .item');

      if (type === 'next') {
          carousel.querySelector('.list').appendChild(sliderItems[0]);
          carousel.querySelector('.thumbnail').appendChild(thumbnailItems[0]);
          carousel.classList.add('next');
      } else {
          carousel.querySelector('.list').prepend(sliderItems[sliderItems.length - 1]);
          carousel.querySelector('.thumbnail').prepend(thumbnailItems[thumbnailItems.length - 1]);
          carousel.classList.add('prev');
      }

      setTimeout(() => {
          carousel.classList.remove('next', 'prev');
      }, timeRunning);
  };

  useEffect(() => {
      const slideInterval = setInterval(() => {
          showSlider('next');
      }, timeAutoNext);

      return () => clearInterval(slideInterval);
  }, []);

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "..."; // Truncate text and add ellipsis
    }
    return text;
  };

  return (
    <div className={"carousel h-[90vh] lg:h-[70vh] "} ref={carouselRef}>
        <div className={"list"}>
        {
            slider.map((array, index)=>(
                <div className={"item"} key={index}>
                <Image src={array.image} alt="Image 1" layout="fill" objectFit="cover" />
                <div className="content space-y-3">
                        <div className="author text-primary-blue300 text-[18px]">{array.author}</div>
                        <div className="title">{array.title}</div>
                        <div className="des">{array.dec} </div>
                    </div>
            </div>
            ))
        }
    </div>
    <div className={"thumbnail"}>
    {
            slider.map((array, index)=>(
        <div className={"item"} key={index}>
            <Image src={array.image} alt="Thumbnail 1" layout="fill" objectFit="cover" />
            <div className="content">
                    <div className="title">{array.title} </div>
                    <Para18 className="description" title={truncateText(array.dec, 10)}/>
                </div>
        </div>
          ))
        }
    </div>
    {/* <div className={"arrows text-center"}>
      <Button onClick={() => showSlider('prev')} endicon={<IoIosArrowBack size={25} />}/>
      <Button onClick={() => showSlider('next')} endicon={<IoIosArrowForward  size={25}/>}/>

    </div> */}
    <div className={"time"}></div>
</div>
);
};

export default Hero;
