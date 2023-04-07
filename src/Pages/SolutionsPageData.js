import SolutionsPage1 from "../Assests/Images/SolutionsPage1.svg"
import SolutionsPage2 from "../Assests/Images/SolutionsPage2.png"
import SolutionsPage3 from "../Assests/Images/SolutionsPage3.png"
import SolutionsPage4 from "../Assests/Images/SolutionsPage4.png"
import SolutionsPage5 from "../Assests/Images/SolutionsPage5.png"
import SolutionsPage6 from "../Assests/Images/SolutionsPage6.png"
import SolutionsPage7 from "../Assests/Images/SolutionsPage7.png"

const SolutionsPageData = [
    {
        id: 0,
        type: "headingAndData",
        mainHeading: "Sit back and relax while we take care of everything",
        details: "We start by proposing the best glocal strategy for your products, setting up your global e-commerce business, opening new sales channels , getting you tons of fresh orders, fulfilling international deliveries while managing all trade compliances and ensuring your payments and profits are maximised; in short making sure your business reaches it’s true global potential."
    },
    {
        id: 1,
        type: "image",
        imageURL: SolutionsPage1,

    },
    {
        id: 2,
        type: "imageAndData",
        imageURL: SolutionsPage2,

        data: {
            heading: "Have a great product but low sales?",
            heading1: "Confused how to start selling online?",
            isDataList: false,
            imagePosition: "left",
            completeData: "For new sellers to kickstart their online business Setup global e-commerce stores. After that, Managed by goGLOCAL will take care of all your requirements and kickstart your glocal e-commerce business."
        }
    },
    {
        id: 3,
        type: "imageAndData",
        imageURL: SolutionsPage3,

        data: {
            heading1: "Have been selling online in India but don’t know how to sell internationally?",
            isDataList: false,
            imagePosition: "right",
            completeData: "When you choose Managed by goGlocal, you enable convenient, cost- effective and fast delivery to your customers with goGlocal’s world- class international logistics support."
        }
    },
    {
        id: 4,
        type: "imageAndData",
        imagePosition: "left",
        imageURL: SolutionsPage4,

        data: {
            heading1: "Have been selling internationally online but want someone to streamline and optimise your operations ?",
            isDataList: false,
            imagePosition: "left",
            completeData: "Enabled by goGLOCAL lets you choose from one of our specialised services, tailor made to suit your requirements and skyrocket your brand to new heights."
        }
    },
    {
        id: 5,
        type: "headingAndData",
        mainHeading: "Hassle free exporting starts here",
        details: "We offer the best, most comprehensive solutions for all your global selling needs with AI enabled, technologically advanced solutions, all in one place."
    },
    {
        id: 6,
        type: "imageAndData",
        imagePosition: "left",
        imageURL: SolutionsPage5,

        data: {
            heading1: "Get onboarded and unlock your global business potential with Glocal Store and Strategy Engine",
            isDataList: true,
            imagePosition: "left",
            completeData: ["International E-commerce cataloging", "Glocal business and product strategy", "Marketplace Integrations"]
        }
    },
    {
        id: 7,
        type: "imageAndData",
        imagePosition: "left",
        imageURL: SolutionsPage6,

        data: {
            heading1: "Sell internationally and fulfill your orders with optimised logistics networks with goGlocal Fulfilment Machine",
            isDataList: true,
            imagePosition: "left",
            completeData: ["End-to-end international storage, packing, delivery", "Fast, reliable and budget friendly", "Seamless international fulfilment and returns"]
        }
    },
    {
        id: 8,
        type: "imageAndData",
        imagePosition: "left",
        imageURL: SolutionsPage7,

        data: {
            heading1: "Mitigate risks and maximize profits with goGlocal International Payments and Trade Compliance Solutions",
            isDataList: true,
            imagePosition: "left",
            completeData: ["Cost-effective financial solutions", "Accurate and effective trade expert inputs", "Maximum profits and exponential growth"]
        }
    },



]

export default SolutionsPageData