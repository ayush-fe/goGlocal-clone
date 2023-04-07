import React from "react";
import styled from "@emotion/styled";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from "react-router-dom";

const primaryColor = "#fcdea2";
const secondaryColor = "#a6a6a6";
const tertiaryColor = "#fefefe";

const OuterContainer = styled.div`

    padding:4rem;
    background-color:#000;
    position: absolute;
    //bottom: 0;
    left: 0;
    right: 0;
   // width:100%;

   .primarySection {
    display:flex;
    justify-content:flex-start;
    gap:10rem;

    .primarySubsectionOne {
        display:flex;
        flex-direction:column;
        .getStarted {
        color:${primaryColor};
        font-size: 2rem;
        font-weight: 700;
    }
        .searchMimic {
            margin-top:3rem;
            display:flex;
            justify-content:space-between;
            align-items:center;
            padding:0.5rem;
            border: 2px solid ${secondaryColor};
            border-radius: 2rem;
            

            span {
                color:${secondaryColor}
            }
            .rightArrowIcon {
                background-color:${primaryColor};
                border-radius: 50%;
            }
        }
    }

    .primarySubsectionTwo {
        display:flex;
        justify-content:center;
        align-items:center;
        color:${secondaryColor};
        gap:3rem;

        .list {
            height:100%;
            ul {
                list-style:none;
                text-align:left;
                font-size:1.2rem;
                display: flex;
                flex-direction: column;
                gap:1.2rem;
               
            }

        .navigationLink {
            color:${secondaryColor};
            text-decoration:none;
            }
        }
    }

    .primarySubsectionThree {
        color:${primaryColor};
        font-size: 1.5rem;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        font-weight: 600;
        text-align: left;

        .linkedInIcon {
            margin-top:2rem;
            font-size:3rem;
        }
    }
   
   }

   .contactUsDiv {
    color:${tertiaryColor};
    font-size: 1.5rem;
    display:flex;
    justify-content:flex-start;
    margin-top:4rem;
   }

   .lastSection {
    margin-top:4rem;
    color:${tertiaryColor};
    display:flex;
    text-align:left;
    
    div {
        width:40%;
    }

   }
`
const list1 = [{ linkTo: "/", text: "About" }, { linkTo: "/", text: "Products" }, { linkTo: "/", text: "Solution" }, { linkTo: "/aboutUs", text: "News in us" }, { linkTo: "/", text: "Careers" }, { linkTo: "/", text: "Sign in" }]
const list2 = [{ linkTo: "/", text: "Glocal Store" }, { linkTo: "/", text: "Global Strategy" }, { linkTo: "/", text: "Seller Enabler Network" }, { linkTo: "/", text: "Marketplace Integration" }]
const list3 = [{ linkTo: "/", text: "Global Fulfilment" }, { linkTo: "/", text: "Trade Compliance" }, { linkTo: "/", text: "International Payments" }, { linkTo: "/", text: "B2B Exports" }]

export default function BottomStaticInfo({ }) {
    return <OuterContainer>
        <div className="primarySection">
            <div className="primarySubsectionOne">
                <div className="getStarted">Get Started for FREE</div>
                <div className="searchMimic"><span>Enter your email here</span><ChevronRightIcon className="rightArrowIcon" /></div>
            </div>
            <div className="primarySubsectionTwo">
                <div className="list">
                    <ul>
                        {
                            list1.map((item, index) => (<li key={index}><Link className="navigationLink" to={item.linkTo}>{item.text}</Link></li>))
                        }
                    </ul>
                </div>
                <div className="list">
                    <ul>
                        {
                            list2.map((item, index) => (<li key={index}><Link className="navigationLink" to={item.linkTo}>{item.text}</Link></li>))
                        }
                    </ul>
                </div>
                <div className="list">
                    <ul>
                        {
                            list3.map((item, index) => (<li key={index}><Link className="navigationLink" to={item.linkTo}>{item.text}</Link></li>))
                        }

                    </ul>
                </div>
            </div>
            <div className="primarySubsectionThree">
                <div className="getStarted">Stay Connected</div>
                <div className="searchMimic"><LinkedInIcon className="linkedInIcon" /></div>
            </div>
        </div>
        <div className="contactUsDiv">contactus@goglocal.com</div>
        <div className="lastSection">
            <div className="lastSubsectionOne">© 2022 goGlocal Pvt Ltd Copyrights and Rights Reserved</div>
            <div className="lastSubsectionTwo">Terms and Condtions &nbsp;.&nbsp;
                Privacy Policy</div>
        </div>
    </OuterContainer>
}