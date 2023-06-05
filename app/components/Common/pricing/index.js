import { Col, Container, Row } from "react-bootstrap";
import PricingBox from "../PricingBox";
import PricingData from "../pricing/PricingData";

const PricingSec = () => {
    return (
        <>
            <section className="pricing_sec">
                <div className="sec_wp">
                    <Container>
                        <Row>
                            {PricingData?.map((data) => {
                                const { id } = data;
                                return (
                                    <Col lg={4} key={id}>
                                        <PricingBox {...data} />
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

export default PricingSec;
