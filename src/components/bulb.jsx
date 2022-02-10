
import React from "react";
import { useState } from "react";
import OffBulb from "../images/OFFbulb.png"
import OnBulb from "../images/ONbulb.png"
import "./bulb.css"
import img1 from "../images/img3.png"
const img = document.getElementById("img")

const Bulbes = () => {

                  // BULB MAKING


    const [bulb, setBulb] = useState(OffBulb)

    const [onOffText, btnText] = useState("ON")
    const toggleBulbBtn = (e) => {
       
        if (bulb == OffBulb) {
            setBulb(OnBulb)
            btnText("OFF")
        } else {
            setBulb(OffBulb)
            btnText("ON")
        }
    }


    //   BULB END



    const [lightMode, setMode] = useState({
        color: "black",
        backgroundColor: "white",
    })

          //BTN MAKING
    let btnStyle = {}

    const [btn, setBtn] = useState("Color Mode")

        //  DARK MODE
    const toggleBtn = () => {
        if (lightMode.color == "black") {
            setMode({
                color: "white",
                backgroundColor: "#28B1F5",
                transition: "background-color 0.6s ease-in-out"
               


            })
            setBtn("White Mode")
        }
        else {
            setMode({
                color: "black",
                backgroundColor: "white",
                transition: "background-color 0.6s ease-in-out"
               
                

            })
            setBtn("Color Mode")
        }
    }
    //    END FUNCTION


    return (
        <div className="BulbCon" style={lightMode}>

            <header style={lightMode}>
                <div className="header1">
                <h1  style={lightMode}>BULB ON OFF EXPERIMENT</h1>
                </div>
               
                  <div className="img1">
                  <img src={img1} />

                  </div>
                  
            </header>

            <section style={lightMode}>
                <img id="img" src={bulb} width="200px" />
                <button style={lightMode} onClick={() => toggleBulbBtn("zubi")}>{onOffText}</button>
            </section>


            <div style={lightMode}>
                <button style={lightMode} onClick={toggleBtn}>{btn}</button>
            </div>
        </div>

    )
}
export default Bulbes 