import React from "react";
import Image from "next/image";
import IslandFates from "../public/Images/island_fates.jpg"
import TravelIcon from "../public/Images/Fill 219.svg"

export default function travelCard() {
  return (
    <div className="container flex">
      <div className="preview">
        <Image src={IslandFates} alt="a map of the island of the fates" />
      </div>
      <div>
        <div>
          <div>
            <Image scr={TravelIcon} alt="small stylized map pin"/>
          </div>
          <a src="#">View on Map of Thylea</a>
        </div>
        <div>
          <h1>Island of the Fates</h1>
          <p>Description of Party's Events at location</p>
        </div>
      </div>
    </div>
  )
}