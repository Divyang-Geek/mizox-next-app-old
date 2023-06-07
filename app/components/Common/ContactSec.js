// Components
import { Col, Container, Row } from "react-bootstrap";
import Title from "../UI/Title";
import Image from "next/image";

const ContactSec = () => {
    return (
        <>
            <section className="contact_sec">
                <div className="sec_wp">
                    <Container>
                        <Row>
                            <Col lg={12}>
                                <Title className="text_center">Get in touch with us</Title>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={5}>
                                <div className="contact_img">
                                    <Image src="" alt=""/>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
        </>
    );
};

export default ContactSec;
