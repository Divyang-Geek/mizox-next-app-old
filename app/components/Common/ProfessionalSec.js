import { Col, Container, Row } from "react-bootstrap";
import Title from "../UI/Title";
import Image from "next/image";
import professionalData from "@/app/api/professionalData";

const ProfessionalSec = () => {
    const ProfessionalBox = ({ ...data }) => {
        const { id, img, name, designation } = data;
        return (
            <div className="professional_box_wp">
                <div className="professional_box_num">{id < 10 ? `0${id}` : id}</div>
                <div className="professional_box">
                    <div className="professional_box_img">
                        <Image src={img.src} alt={name} width={500} height={500} />
                    </div>
                    <div className="professional_box_content">
                        <div className="professional_box_content_inr">
                            <p>{designation}</p>
                            <h3 className="h3_title">{name}</h3>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <>
            <section className="professional_sec">
                <div className="sec_wp">
                    <Container>
                        <Row>
                            <Col lg={6} className="mx-auto">
                                <Title className="text_center">Meet our professionals</Title>
                            </Col>
                        </Row>
                        <div className="professional_row">
                            <Row>
                                {professionalData?.map((data) => {
                                    const { id } = data;
                                    return (
                                        <Col lg={4} key={id}>
                                            <ProfessionalBox {...data} />
                                        </Col>
                                    );
                                })}
                            </Row>
                        </div>
                    </Container>
                </div>
            </section>
        </>
    );
};

export default ProfessionalSec;
