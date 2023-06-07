// Components
import { Col, Container, Row } from "react-bootstrap";
import ServiceBox from "./ServiceBox";
import servicesData from "@/app/api/servicesData";

const ServiceSec = () => {
    return (
        <>
            <section className="services_sec">
                <div className="sec_wp">
                    <Container>
                        <Row>
                            {servicesData?.map((data) => {
                                const { id } = data;
                                return (
                                    <Col lg={3} key={id}>
                                        <ServiceBox {...data} />
                                    </Col>
                                );
                            })}
                        </Row>
                    </Container>
                </div>
            </section>
        </>
    );
};

export default ServiceSec;
