import React from "react";
import HeadingWithDetails from "../Components/Library/HeadingWithDetails";
import ImageAndInfo from "../Components/Library/ImageAndInfo";
import aboutUsPageData from "./AboutUsPageData";
import "../Assests/globalStyles.css"
import TheTeam from "./TheTeam";
export default function AboutUs({ currentTheme }) {
    return <div className="paddingTop5rem">
        {aboutUsPageData.map((data, index) => (
            <HeadingWithDetails key={index} data={data} currentTheme={currentTheme} />
        ))}
        <TheTeam currentTheme={currentTheme} />
    </div>

}