import React from "react";
import Image from "next/image";
import IslandFates from "../public/Images/ilsand_fates.jpg"

export default function travelCard() {
  return (
    <div className="container">
      <div>
        <Image src={IslandFates} alt="a map of the island of the fates" />
      </div>
      <h1>Island of the Fates</h1>
      
    </div>
  )
}