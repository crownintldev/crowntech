"use client"
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import img1 from '../../../public/assets/images/img1.jpg';
import img2 from '../../../public/assets/images/img2.jpg';
import img3 from '../../../public/assets/images/img3.jpg';
import img4 from '../../../public/assets/images/img4.jpg';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import Button from '../Button';

const Hero = () => {
  const carouselRef = useRef(null);
  const [autoSlide, setAutoSlide] = useState(null);

  const timeRunning = 3000;
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

  return (
    <div className={"carousel"} ref={carouselRef}>
    <div className={"list"}>
        <div className={"item"}>
            <Image src={img1} alt="Image 1" layout="fill" objectFit="cover" />
            <div className="content space-y-3">
                    <div className="author">TECHNOLOGY</div>
                    <div className="title">DESIGN SLIDER</div>
                    <div className="topic">React js</div>
                    <div className="des">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?
                    </div>
                  
                </div>
        </div>
        <div className={"item"}>
            <Image src={img2} alt="Image 1" layout="fill" objectFit="cover" />
            <div className="content space-y-3">
                    <div className="author">TECHNOLOGY</div>
                    <div className="title">DESIGN SLIDER</div>
                    <div className="topic">Nextjs</div>
                    <div className="des">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?
                    </div>
                     
                </div>
        </div>
        <div className={"item"}>
            <Image src={img3} alt="Image 1" layout="fill" objectFit="cover" />
            <div className="content space-y-3">
                    <div className="author">TECHNOLOGY</div>
                    <div className="title">DESIGN SLIDER</div>
                    <div className="topic">Angular</div>
                    <div className="des">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?
                    </div>
                  
                </div>
        </div>
        <div className={"item"}>
            <Image src={img4} alt="Image 1" layout="fill" objectFit="cover" />
            <div className="content space-y-3">
                    <div className="author">TECHNOLOGY</div>
                    <div className="title">DESIGN SLIDER</div>
                    <div className="topic">Diango</div>
                    <div className="des">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?
                    </div>
                   
                </div>
        </div>
    </div>
    <div className={"thumbnail"}>
        <div className={"item"}>
            <Image src={img1} alt="Thumbnail 1" layout="fill" objectFit="cover" />
            <div className="content">
                    <div className="title">
                        Name Slider
                    </div>
                    <div className="description">
                        Description
                    </div>
                </div>
        </div>
        <div className={"item"}>
            <Image src={img2} alt="Thumbnail 1" layout="fill" objectFit="cover" />
            <div className="content">
                    <div className="title">
                        Name Slider
                    </div>
                    <div className="description">
                        Description
                    </div>
                </div>
        </div>
        <div className={"item"}>
            <Image src={img3} alt="Thumbnail 1" layout="fill" objectFit="cover" />
            <div className="content">
                    <div className="title">
                        Name Slider
                    </div>
                    <div className="description">
                        Description
                    </div>
                </div>
        </div>
        <div className={"item"}>
            <Image src={img4} alt="Thumbnail 1" layout="fill" objectFit="cover" />
            <div className="content">
                    <div className="title">
                        Name Slider
                    </div>
                    <div className="description">
                        Description
                    </div>
                </div>
        </div>
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
