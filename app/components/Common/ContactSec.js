// Images
import contactImg from "@/assets/images/contact-img.png";

// Components
import { Col, Container, Row } from "react-bootstrap";
import Title from "../UI/Title";
import Image from "next/image";
import Button from "../UI/Button";
import { useState } from "react";

const ContactSec = () => {
    const [formData, setFormData] = useState({
        yourName: "",
        email: "",
        subject: "",
        phone: "",
        message: "",
    });

    // Function to handle input changes
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    // Function to handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <>
            <section className="contact_sec">
                <div className="sec_wp">
                    <Container fluid className="p-0">
                        <Row>
                            <Col lg={12}>
                                <Title className="text_center">Get in touch with us</Title>
                            </Col>
                        </Row>
                        <Row className="align-items-center">
                            <Col lg={5}>
                                <div className="contact_img">
                                    <Image src={contactImg.src} alt="Contact Image" width={596} height={550} />
                                </div>
                            </Col>
                            <Col lg={7}>
                                <div className="contact_form">
                                    <form onSubmit={handleSubmit}>
                                        <Row>
                                            <Col lg={6}>
                                                <div className="form_input_wp">
                                                    <input type="text" className="form_input" placeholder="Your Name" onChange={handleInputChange} name="yourName" value={formData.yourName} />
                                                </div>
                                            </Col>
                                            <Col lg={6}>
                                                <div className="form_input_wp">
                                                    <input type="email" className="form_input" placeholder="Enter Email" onChange={handleInputChange} name="email" value={formData.email} />
                                                </div>
                                            </Col>
                                            <Col lg={6}>
                                                <div className="form_input_wp">
                                                    <input type="text" className="form_input" placeholder="Subject" onChange={handleInputChange} name="subject" value={formData.subject} />
                                                </div>
                                            </Col>
                                            <Col lg={6}>
                                                <div className="form_input_wp">
                                                    <input type="text" className="form_input" placeholder="Phone" onChange={handleInputChange} name="phone" value={formData.phone} />
                                                </div>
                                            </Col>
                                            <Col lg={12}>
                                                <div className="form_input_wp">
                                                    <textarea cols="30" rows="10" placeholder="Message" className="form_input" onChange={handleInputChange} name="message" value={formData.message} />
                                                </div>
                                            </Col>
                                            <Col lg={12}>
                                                <div className="form_submit_wp">
                                                    <Button type="submit">Send Message</Button>
                                                </div>
                                            </Col>
                                        </Row>
                                    </form>
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
