import { Col, Container, Row } from "react-bootstrap";
import SiteLogo from "../SiteLogo";
import Button from "../UI/Button";
import Menu from "../Menu";
import { HeaderMenuData } from "./HeaderMenuData";

const BottomHeader = () => {
    return (
        <>
            <div className="bottom_header">
                <Container>
                    <Row>
                        <Col lg={3}>
                            <SiteLogo />
                        </Col>
                        <Col lg={9}>
                            <div className="header_menu_wp">
                                <div className="header_menu">
                                    <Menu data={HeaderMenuData} />
                                </div>
                                <Button url="/contact">Get A Quote</Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default BottomHeader;
