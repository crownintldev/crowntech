"use client";
import Aboutceo from "@/Component/AboutCEO";
import CeoMessage from "@/Component/Ceomessage";
import ContactHero from "@/Component/ContactHero";
import { NavbarContext } from "@/Component/ContextProvider";
import Footer from "@/Component/Footer";
import LayoutProvider from "@/Component/LayoutProvider";
import Team from "@/Component/Team";
import React, { useContext } from "react";

const TeamMain = () => {
  const { Header } = useContext(NavbarContext);

  return (
    <LayoutProvider>
      <Header />
      <ContactHero
        title={"________ Team"}
        heading1={"Crown International "}
        heading2={"Technology"}
        className={'text-primary-blue100'}
        para={"“Crown International Technology: Redefining the Digital Frontier Unlocking Digital Potential, Empowering Global Progress.”"}
      />
      <Aboutceo />
      <CeoMessage />
      <Team />
      <Footer />
    </LayoutProvider>
  );
};

export default TeamMain;
