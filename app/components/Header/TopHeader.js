// Components
import { Col, Container, Row } from "react-bootstrap";
import ContactInfo from "../ContactInfo";

const TopHeader = () => {
    return (
        <>
            <div className="top_header">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className="top_header_contact">
                                <ContactInfo/>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default TopHeader;
