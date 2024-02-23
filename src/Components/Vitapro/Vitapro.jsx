import React from "react";
import Style from "./Vitapro.module.css"
import oops from "../../assets/oopImages.jpg"

export function Vitapro(){
    return (
<>
<div className={Style.VitaContain}>
    <img src={oops} alt="picture of haggrid"  className={Style.VitaImage}/>
    <div>
        <h4 className={Style.VitaHeading}>Vitapro</h4>
        <p className={Style.VitaText}>harry ta en vitapro</p>
    </div>
</div>
</>
    )
}