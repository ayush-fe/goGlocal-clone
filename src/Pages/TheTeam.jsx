import React from "react";
import TeamPageData from "./TeamPageData";

import styled from "@emotion/styled";
import IndividualInformation from "./IndividualInformation";

const TeamDataContainer = styled.div`
.teamData{
   display:flex;
    justify-content:space-around;
    flex-wrap: wrap;
    padding-bottom:5rem;
}
 

    .teamtext {
        font-size:2.3rem;
        font-weight:600;
        color:${props => props.currentTheme.fonts.special.color};
    }
`



export default function TheTeam({ currentTheme }) {
    return <TeamDataContainer currentTheme={currentTheme}>
        <div className="teamtext">The Team</div>
        <div className="teamData">
            {
                TeamPageData.map((member, index) => (
                    <IndividualInformation
                        data={member}
                        currentTheme={currentTheme}
                    />
                ))
            }
        </div>

    </TeamDataContainer>
}