import construcion from '../assets/guysConstruct.webp'

export interface PersonCard {
    image: string;
    title: string;
    content: string;
    name: string;
}

const whyHomeSlide : PersonCard[] = [
    {
        image: construcion,
        title: "Financial Advisor",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        name: "Okezie Emmanuel"
    },
    {
        image: construcion,
        title: "Tech Associate",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        name: "Okezie Emmanuel"
    },
    {
        image: construcion,
        title: "Sales Associate",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        name: "Okezie Emmanuel"
    },
    {
        image: construcion,
        title: "MD Kelvic Tech",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        name: "Okezie Emmanuel"
    },
    
]

export default whyHomeSlide;