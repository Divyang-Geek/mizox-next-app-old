import { Col, Container, Row } from "react-bootstrap";
import mailIcon from "@/assets/images/mail.png";
import callIcon from "@/assets/images/call.png";
import locationIcon from "@/assets/images/location.png";
import Link from "next/link";
import Image from "next/image";

const TopHeader = () => {
    const contactData = [
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

    return (
        <>
            <div className="top_header">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className="top_header_contact">
                                <ul>
                                    {contactData?.map((data) => {
                                        const { id, icon, text, link } = data;
                                        return (
                                            <li key={id}>
                                                <Link href={link}>
                                                    <Image src={icon} alt={text} priority={true} width={15} height={15}/>
                                                    <span>{text}</span>
                                                </Link>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default TopHeader;
