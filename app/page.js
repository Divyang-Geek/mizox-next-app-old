"use client";
import { Col, Container, Row } from "react-bootstrap";
import FrontLayout from "./components/FrontLayout";
import Button from "./components/Common/UI/Button";
import bannerImg1 from "@/assets/images/banner-image1.png";
import bannerImg2 from "@/assets/images/banner-image2.png";
import bannerImg3 from "@/assets/images/banner-image3.png";

const Index = () => {
    const bannerData = [
        {
            id: 1,
            img: bannerImg1,
        },
        {
            id: 2,
            img: bannerImg2,
        },
        {
            id: 3,
            img: bannerImg3,
        },
    ];

    return (
        <>
            <FrontLayout>
                <section className="main_banner">
                    <div className="sec-wp">
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
                <section className="">

                </section>
            </FrontLayout>
        </>
    );
};

export default Index;