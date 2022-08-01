import React from "react";
import Image from "next/image";
import TravelIcon from "../public/Images/Fill 219.svg"

export default function travelCard(props) {
  return (
    <div className="container flex">
      <div className="preview">
        <Image src={props.map} alt = {props.alt} width={auto} height={auto}/>
      </div>
      <div>
        <div>
          <div>
            <Image scr={TravelIcon} alt="small stylized map pin"/>
          </div>
          <a src="#">View on Map of Thylea</a>
        </div>
        <div>
          <h1>{props.title}</h1>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  )
}