// Components
import { Col, Container, Row } from "react-bootstrap";
import PricingBox from "./PricingBox";
import pricingData from "@/app/api/pricingData";

const PricingSec = () => {
    return (
        <>
            <section className="pricing_sec">
                <div className="sec_wp">
                    <Container>
                        <div className="pricing_row">
                            <Row>
                                {pricingData?.map((data) => {
                                    const { id } = data;
                                    return (
                                        <Col lg={4} key={id}>
                                            <PricingBox {...data} />
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

export default PricingSec;
