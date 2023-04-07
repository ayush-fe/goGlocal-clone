import Img1 from "../Assests/Images/AboutUsPage1.png"
import Img2 from "../Assests/Images/AboutUsPage2.png"
import Img3 from "../Assests/Images/AboutUsPage3.png"

let aboutUsPageData = [
    {
        mainHeading: "About Us",
        details: "Founded in 2022, with the vision to transform global e-commerce exports from India, we are the pioneers connecting all the dots of global e-commerce, helping thousands of Indian merchants grow their international business by providing them the most comprehensive global e-commerce platform. Whether a business is just starting it’s cross-border journey or is an expert international exporter, we have a solution to offer.",
        imageURL: Img1,
        data: {
            isDataList: true,
            completeData: ["Solving core global trade problems faced by business across sizes and geographies.", "Uniquely crafted service models by leveraging technology and leveraging the benefits of e-commerce"],
            imagePosition: "right"
        }
    },
    {
        mainHeading: "Why we Exist ?",
        secondaryHeading: "Solving the big how",
        tertiaryHeading: "The world will not wait. And we are making sure “Made in India” is recognised across the world now.",
        details: "",
        imageURL: Img2,
        data: {
            isDataList: true,
            completeData: ["Integrate you into global marketplaces", "Setup global stores and attract new customers at low investment Integrate.", "Reliably deliver products internationally at low cost with speed Integrate", "Comply with Indian and foreign trade compliances and customs", "Receive secure international sale remittances at best Fix rate", "Offer a superior customer experience and grow business"],
            imagePosition: "left"
        }
    },
    {
        mainHeading: "Who We Are?",
        secondaryHeading: "",
        tertiaryHeading: "",
        details: "We believe in the power of a small group of thoughtful, committed and smart individuals aspiring to change the world.",
        imageURL: Img3,
        data: {
            isDataList: false,
            completeData: "A crew of creators from varying backgrounds and points of view are reimagining and reinventing the existing complexities of Global e-commerce with a view to offering the best and most simplified selling experience. The diverse perspectives of the crew derived from different cultures, education, and professional and life experiences all combine to add to our ability to give life to our mission.",
            imagePosition: "right"
        }
    }
]

export default aboutUsPageData
