import React from "react";
import styled from "@emotion/styled";
import { OuterContainerOriginal } from "./Containers";
import aboutUsPageData from "../../Pages/AboutUsPageData";

const OuterContainer = styled(OuterContainerOriginal)`
    display:flex;
    justify-content:space-between;
    align-items:center;
    max-width:72rem;
    font-weight: 400;
    font-size: 1.3rem;
    gap: 8rem;

    img {
    height: 15rem;
    width:18rem;
    }

    .data {
        text-align:left;
        color:${props => props.currentTheme.fonts.secondary.color};
    }

    .dataHeading {
        font-size:2rem;
        font-weight:700;
        padding-left: 2rem;
    }

    .completeData {
        margin-top:1.2rem;
        padding-left:2rem;
    }

`

//data:{imageURL:, data:{isDataList:,completeData:, imagePosition}
export default function ImageAndInfo({ data, currentTheme }) {
    if (data.data.imagePosition === "left") {
        return <OuterContainer currentTheme={currentTheme}>
            <div className="image"><img src={data.imageURL} alt="Image" /></div>
            <div className="data">
                {data.data.heading && <div className="dataHeading">{data.data.heading}</div>}
                {data.data.heading1 && <div className="dataHeading">{data.data.heading1}</div>}
                {
                    data.data.isDataList ? <ul>
                        {data.data.completeData.map((listItem, index) => (
                            <li key={index}>{listItem}</li>
                        ))}
                    </ul> : <div className="completeData">{data.data.completeData}</div>
                }
            </div>
        </OuterContainer>
    } else {
        return <OuterContainer currentTheme={currentTheme}>
            <div className="data">
                {data.data.heading && <div className="dataHeading">{data.data.heading}</div>}
                {data.data.heading1 && <div className="dataHeading">{data.data.heading1}</div>}
                {data.data.isDataList ? <ul>
                    {data.data.completeData.map((listItem, index) => (
                        <li key={index}>{listItem}</li>
                    ))}
                </ul> : <div className="completeData">{data.data.completeData}</div>
                }
            </div>
            <div className="image"><img src={data.imageURL} alt="Image" /></div>
        </OuterContainer>
    }
}