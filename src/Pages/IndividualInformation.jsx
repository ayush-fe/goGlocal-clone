import React from "react";
import styled from "@emotion/styled";

const IndividualInfoContainer = styled.div`
margin-top:3rem;
display:flex;
flex-direction:column;
align-items:center;
gap:0.7rem;
width:30rem;

img {
    height: 15rem;
    width: 15rem;
    border-radius: 50%;
}

.name {
    font-size:1.5rem;
    color:${props => props.currentTheme.fonts.special.color};
}

.breifInfo {
    font-size:1.2rem;
    color:${props => props.currentTheme.fonts.secondary.color};
}

    
`

const IndividualInformation = ({ data, currentTheme }) => {
    return <IndividualInfoContainer key={data.id} currentTheme={currentTheme}>
        <div className="profilePicture"><img src={data.imageURL} alt="profilePic" /></div>
        <div className="name">{data.name}</div>
        <div className="breifInfo">{data.breifInfo}</div>
    </IndividualInfoContainer>
}

export default IndividualInformation