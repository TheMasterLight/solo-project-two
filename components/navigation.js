import React from "react";
import Image from "next/image";
import WorldIcon from "../public/Images/WorldIcon.svg"

export default function navigation() {
  return(
    <nav className="flex navigation">
      <div className="little-space">
        <Image src={WorldIcon} />
      </div>
      <h2>My Player's Travel Journal </h2>
    </nav>
  )
}