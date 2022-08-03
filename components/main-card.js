import React from "react";
import Image from "next/image";
import TravelIcon from "../public/Images/Fill219.svg";

export default function travelCard(props) {
  return (
    <div className="container flex">
      <div className="preview">
        <Image src={props.map} alt={props.alt} layout="fill" />
      </div>
      <div>
        <div>
          <div className="flex">
            <div>
              <Image scr={TravelIcon} alt="small stylized map pin" layout="fill"/>
            </div>
            <a src="#">View on Map of Thylea</a>
          </div>
        </div>
        <div>
          <h1>{props.title}</h1>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
}
