import React from "react";
import styled from "@emotion/styled";
import { OuterContainerOriginal } from "./Containers";

const OuterContainer = styled(OuterContainerOriginal)`
    display:flex;
    flex-direction:column;
    align-items:center;

.headingAndInfo {
    display:flex;
    flex-direction:column;
    align-items:center;
    padding:3rem 10rem 0rem 10rem;

    .mainHeading {
        font-size:3.5rem;
        font-weight: 600;
        color:${props => props.currentTheme.fonts.special.color};
    }

        .secondaryHeading {
            display:flex;
            gap:0.5rem;
        margin-top: 2rem;
        font-size:2rem;
        font-weight: 500;
        color:${props => props.currentTheme.fonts.secondary.color};
        hr {
            width: 3rem;
            height: 0rem;
        }
    }

        .tertiaryHeading {
        margin-top: 2rem;
        max-width:48rem;
        font-size:2rem;
        font-weight: 600;
        color:${props => props.currentTheme.fonts.secondary.color};
    }

        .details {

        max-width:72rem;
        padding-top:2rem;
        font-size:1.5rem;
        font-weight: 400;
        color:${props => props.currentTheme.fonts.secondary.color};
    }

}
    
`


export default function DataComponent({ data, currentTheme }) {
    return <OuterContainer currentTheme={currentTheme}>
        <div className="headingAndInfo">
            {data.mainHeading && <div className="mainHeading">{data.mainHeading}</div>}
            {data.secondaryHeading && <div className="secondaryHeading"><hr />{data.secondaryHeading}<hr /></div>}
            {data.tertiaryHeading && <div className="tertiaryHeading">{data.tertiaryHeading}</div>}
            {data.details && <div className="details">{data.details}</div>}
        </div>

    </OuterContainer>
}