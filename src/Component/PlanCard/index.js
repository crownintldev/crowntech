"use client";
import React, { useEffect, useState } from "react";
import { TiTick } from "react-icons/ti";
import Button from "../Button";
import { HeadingH3, HeadingH4 } from "../Heading";
import Container from "../Container";
import { Para12, Para14 } from "../ParaGraph";
import axios from "axios";
import Link from "next/link";
import { BiRightArrowAlt } from "react-icons/bi";

const PlanCard = ({ serviceTabId, setServiceplanId }) => {
  const [filteredServiceplan, setFilteredServiceplan] = useState([]);
  const [serviceplan, setserviceplan] = useState([]);

  useEffect(() => {
    if (serviceTabId) {
      const fetchAllServiceplans = async () => {
        try {
          const response = await axios.get("/api/serviceplan");
          setserviceplan(response.data.serviceplans); // Corrected to serviceplans
          // console.log("All Service Plans:", response.data.serviceplans);
        } catch (error) {
          console.error("Error getting service plans:", error);
        }
      };
      fetchAllServiceplans();
    }
  }, [serviceTabId]);

  useEffect(() => {
    const filteredData = serviceplan.filter(
      (plan) => plan.tab.serviceInfoId === serviceTabId
    );
    setFilteredServiceplan(filteredData);
    // console.log("Filtered Service Plans:", filteredData);

    if (filteredData.length > 0) {
      const newServiceplanId = filteredData[0].tabId;
      // console.log("New Service Faq ID:", newServiceplanId);
      setServiceplanId(newServiceplanId);
    }
  }, [serviceplan, serviceTabId]);

  // Check if there is any item with a non-empty title
  const hasValidTitle = filteredServiceplan.some(
    (plan) => plan.price && plan.price.trim() !== ""
  );

  return (
    <>
      {hasValidTitle ? (
        <Container>
          <div
            className={`mt-10 mb-10 gap-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 `}
          >
            {filteredServiceplan &&
              filteredServiceplan.map((items, index) => (
                <div
                  className={`  space-y-2 shadow  mb-5 rounded-lg text-white p-4 hover:scale-105 transition duration-300 bg-primary-blue100  dark:bg-primary-black `}
                  key={index}
                >
                
                    <HeadingH3 className="text-white" title={items.title}   />
                    <Para12 className="font-normal" title={items.text}/>
                    <HeadingH4 className="text-white" title={items.price} spans={"$"}/>
                    <Para12 className="font-normal" title={items.description} />
                    <hr />
                 
                  <Button
                    text={"Choose Plan"}
                    className={`w-full  justify-center flex bg-primary-black text-black  dark:bg-primary-blue200 dark:hover:bg-primary-blue300 dark:text-white border-none `}
                  />
                  <HeadingH4
                    className="text-white"
                    title={"Features"}
                  />

                  {items.feature.map((items, index) => (
                    <>
                      <div className="flex" key={index}>
                        <TiTick size={20} />
                        <Para14 className="text-white" title={items.option}/>
                      </div>
                    </>
                  ))}
                  <Para12
                    className="text-white"
                    title={
                      "This is project starting Price it will be increase on project scalability."
                    }
                  />
                </div>
              ))}
          </div>
        </Container>
      ) : (
        <div className="flex justify-between items-center">
        <Para14 title={'Contact Us for more information'}/>
         <Link href={'/contact'} className={`bg-primary-black text-black shadow border-none flex p-2 rounded-md`} ><BiRightArrowAlt  size={25} />Contact</Link>
     </div>
      )}
    </>
  );
};

export default PlanCard;
