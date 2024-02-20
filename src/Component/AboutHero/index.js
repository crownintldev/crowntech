import React from "react";
import { HeadingH1, HeadingH2, HeadingH6 } from "../Heading";
import { Para16, Para18 } from "../ParaGraph";
import { Aboutchallenge } from "../Constants";
import Container from "../Container";
import Counter from "../Counter";
import Image from "next/image";
import count from "../../../public/assets/images/count.png";

const AboutHero = () => {
  return (
    <>
      <div className={`pt-20  bg-aboutfinger bg-right-top bg-no-repeat`}>
        <div className="md:w-8/12 mx-auto text-center my-10 ">
          <HeadingH6 title={"Who we are"} />
          <HeadingH2
            title={
              "Crown International Technology: Redefining the Digital Frontier Unlocking Digital Potential, Empowering Global Progress."
            }
          />
          <Para16
            title={
              "Social media networks are open to all. Social media is typically used for social interation and access to news and information, and decison making."
            }
          />
        </div>

        <Container className={"mt-32"}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
            <div>
              <Image src={count} />
            </div>
            <div>
              <div className="grid grid-cols-1  xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 justify-items-center mt-10 md:mt-20 md:justify-items-end  gap-4   p-3 ">
                {Aboutchallenge.map((array, index) => (
                  <div
                    className={`mt-5 mb-5 ${array.className}  hover:scale-105 md:mx-auto duration-300 w-full transition pt-5 pb-5  p-2 rounded-md shadow`}
                    key={index}
                  >
                    <HeadingH1
                      className={"text-center"}
                      title={
                        <Counter
                          start={array.start}
                          end={array.end}
                          duration={array.duration}
                        />
                      }
                    />
                    <Para18 className={"text-center"} title={array.link} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default AboutHero;
