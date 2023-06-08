// Images
import mailIcon from "@/assets/images/mail.png";
import callIcon from "@/assets/images/call.png";
import locationIcon from "@/assets/images/location.png";

const contactInfoData = [
    {
        id: 1,
        icon: mailIcon,
        text: "mizox@gmail.com",
        link: "mailto: mizox@gmail.com",
    },
    {
        id: 2,
        icon: callIcon,
        text: "0123456789",
        link: "tel:0123456789",
    },
    {
        id: 3,
        icon: locationIcon,
        text: "123, Broklyn Golden Street. New York",
        link: "https://nextjs.org/",
    },
];

export default contactInfoData;
