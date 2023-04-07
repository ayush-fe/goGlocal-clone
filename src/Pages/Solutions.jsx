import React from "react";
import SolutionsPageData from "./SolutionsPageData";
import "../Assests/globalStyles.css"
import DataComponent from "../Components/Library/DataComponent";
import ImageAndInfo from "../Components/Library/ImageAndInfo";



export default function Solutions({ currentTheme }) {
    return <div className="paddingTop5rem columnFlex">
        {SolutionsPageData.map((data, index) => {
            if (data.type === "headingAndData") {
                return <DataComponent key={index} data={data} currentTheme={currentTheme} />
            }
            else if (data.type === "image") {
                return <div className="width100" key={index}><img width="100%" src={data.imageURL} alt="image" /></div>
            }
            else if (data.type === "imageAndData") {
                return <ImageAndInfo key={index} data={data} currentTheme={currentTheme} />
            }


        }
        )}

    </div>

}