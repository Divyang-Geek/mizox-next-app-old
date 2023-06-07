// Images
import whyChooseUsImg from "@/assets/images/why-choose-us-img.png";

// Components
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import Title from "../UI/Title";
import whyChooseUsData from "@/app/api/whyChooseUsData";

const WhyChooseUsSec = () => {
    return (
        <>
            <section className="why_choose_us_sec">
                <div className="sec_wp">
                    <Container fluid className="p-0">
                        <Row>
                            <Col lg={5}>
                                <div className="why_choose_us_content">
                                    <Title>Why Choose us?</Title>
                                    <div className="why_choose_us_boxes">
                                        {whyChooseUsData?.map((data) => {
                                            const { id, icon, title, text } = data;
                                            return (
                                                <div className="why_choose_us_box" key={id}>
                                                    <div className="why_choose_us_box_img">
                                                        <Image src={icon.src} alt={title} width={50} height={50} />
                                                    </div>
                                                    <div className="why_choose_us_box_content">
                                                        <h3 className="h3_title">{title}</h3>
                                                        <p>{text}</p>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </Col>
                            <Col lg={7}>
                                <div className="why_choose_us_img back_img" style={{ backgroundImage: `url(${whyChooseUsImg.src})` }}></div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
        </>
    );
};

export default WhyChooseUsSec;
