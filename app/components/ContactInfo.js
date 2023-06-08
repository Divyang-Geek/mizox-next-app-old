// Components
import Image from "next/image";
import Link from "next/link";
import contactInfoData from "../api/contactInfoData";

const ContactInfo = ({ variant }) => {
    return (
        <>
            <div className={`contact_info${variant === "vertical" ? " vertical" : ""}`}>
                <ul>
                    {contactInfoData.map((data) => {
                        const { id, icon, text, link } = data;
                        return (
                            <li key={id}>
                                <Link href={link}>
                                    <Image src={icon} alt={text} priority={true} width={15} height={15} />
                                    <span>{text}</span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </>
    );
};

export default ContactInfo;
