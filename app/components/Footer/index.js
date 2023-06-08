import footerGalleryData from "@/app/api/footerGalleryData";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import ContactInfo from "../ContactInfo";

const Footer = () => {
    return (
        <>
            <footer className="main_footer">
                <Container>
                    <Row>
                        <Col lg={4}>
                            <div className="footer_left white_text">
                                <h4 className="h4_title">About</h4>
                                <p>Desires to obtain pain of itself, because it is pain but occasionally circumstances.</p>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className="footer_gallery_wp white_text">
                                <h4 className="h4_title">Gallery</h4>
                                <div className="footer_gallery">
                                    {footerGalleryData.map((data) => {
                                        const { id, img } = data;
                                        return (
                                            <div className="footer_gallery_img" key={id}>
                                                <Image src={img.src} alt="Gallery Image" width={300} height={300} />
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className="footer_contact white_text">
                                <h4 className="h4_title">Contact</h4>
                                <ContactInfo variant="vertical" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    );
};

export default Footer;
