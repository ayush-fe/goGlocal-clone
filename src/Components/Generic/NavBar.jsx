import React from "react";
import styled from "@emotion/styled";
import "../../Assests/globalStyles.css"
import GoGlocalLogo from "../../Assests/SVGs/GoGlocalLogo.jsx"
import { Link, useLocation } from "react-router-dom";
import paths from "../../Assests/Constants";
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Brightness3Icon from '@mui/icons-material/Brightness3';




const NavBarContainer = styled.div`
position:fixed;
top:0;
left:0;
right:0;
backdrop-filter: blur(5px);
.navigationLink {
    font-weight: 800;
    text-decoration:none;
    color:${props => props.currentTheme.fonts.secondary.color};
    /* &:active{
     color:#8e13db;
} */
}

.active{
     color:#8e13db;
}

.signIn {
    background-color:#fcdea2;
    padding: 0.6rem 1rem;
    border-radius: 0.5rem;
}

button {
    background: transparent;
    border: none;
    margin-right: -1rem;
}
    
`

export default function NavBar({ currentTheme, selectedTheme, setSelectedTheme }) {
    const location = useLocation()
    const handleThemeChange = () => {
        if (selectedTheme === "day") {
            setSelectedTheme("night");
        } else {
            setSelectedTheme("day");
        }
    };

    return (
        <NavBarContainer currentTheme={currentTheme} className="displayFlex paddingHorizontal8Rem paddingVertical1_5Rem">
            <div className="width50">
                <GoGlocalLogo fill={currentTheme.fonts.tertiary.color} />
            </div>
            <div className="width50 spaceEvenlyHorizontalFlex">
                <button onClick={handleThemeChange}>
                    {selectedTheme === "day" ? <Brightness7Icon /> : <Brightness3Icon />}
                </button>
                {
                    paths.map((path, index) => (
                        <Link key={index} className={`navigationLink ${location.pathname === path.to ? "active" : ""} ${path.to === "/signIn" ? "signIn" : ""}`} to={path.to}>{path.linkText}</Link>
                    ))
                }
            </div>
        </NavBarContainer>
    )
}