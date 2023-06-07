"use client";

// Images
import aboutImg from "@/assets/images/about-image.png";

// Components
import { Col, Container, Row } from "react-bootstrap";
import FrontLayout from "./components/FrontLayout";
import Button from "./components/UI/Button";
import bannerData from "./api/bannerData";
import ServiceSec from "./components/common/ServiceSec";
import PortfolioSec from "./components/common/PortfolioSec";
import PricingSec from "./components/common/PricingSec";
import WhyChooseUsSec from "./components/common/WhyChooseUsSec";
import Title from "./components/UI/Title";
import BlogSec from "./components/common/BlogSec";
import ProfessionalSec from "./components/common/ProfessionalSec";
import ContactSec from "./components/common/ContactSec";

const Index = () => {
    return (
        <>
            <FrontLayout>
                <section className="main_banner">
                    <div className="sec_wp">
                        <Container>
                            <Row className="align-items-center">
                                <Col lg={5}>
                                    <div className="banner_content">
                                        <h1 className="h1_title">Designing & Developing Agency.</h1>
                                        <Button url="/contact">Let’s Start</Button>
                                    </div>
                                </Col>
                                <Col lg={7}>
                                    <div className="banner_imgs">
                                        {bannerData?.map((data) => {
                                            const { id, img } = data;

                                            return <div className={`banner_img back_img ${`banner_img${id}`}`} key={id} style={{ backgroundImage: `url(${img.src})` }}></div>;
                                        })}
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </section>
                <section className="about_sec">
                    <div className="sec_wp">
                        <Container>
                            <Row className="g-0">
                                <Col lg={5}>
                                    <div className="about_img back_img" style={{ backgroundImage: `url(${aboutImg.src})` }}></div>
                                </Col>
                                <Col lg={7}>
                                    <div className="about_content">
                                        <Title>Work Together for your Business Success.</Title>
                                        <p>Lorem ipsum dolor sit amet consec tetur notted adipisi cing elit sed do tempor ut labore et dolore magna aliqua Lorem ipsum dolor sit amet elit tell us scelerisque aenean simply.</p>
                                        <div className="about_services">
                                            <div className="about_service_box">
                                                <h3 className="h3_title">Project Planning</h3>
                                                <p>Lorem ipsum dolor sit amet consec tetur notted adipisi cing elit sed</p>
                                            </div>
                                            <div className="about_service_box">
                                                <h3 className="h3_title">Building Quality</h3>
                                                <p>Lorem ipsum dolor sit amet consec tetur notted adipisi cing elit sed</p>
                                            </div>
                                        </div>
                                        <Button url="/">Discover more</Button>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </section>
                <ServiceSec />
                <PortfolioSec />
                <PricingSec />
                <WhyChooseUsSec />
                <BlogSec />
                <ProfessionalSec />
                <ContactSec />
            </FrontLayout>
        </>
    );
};

export default Index;
