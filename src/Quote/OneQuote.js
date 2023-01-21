import quotes from "../data/data";
import Quote from "./Quote";
import { useState } from "react";

export default function OneQuote () {
    const [currIndex,setCurrIndex] = useState(0) ;
    const currentQuote = quotes [currIndex];
    const jsxQuote = <Quote text = {currentQuote.text} author ={currentQuote.author }/>;
        return (
        <div className ="App">
            {jsxQuote}
        </div >
        );
        }


