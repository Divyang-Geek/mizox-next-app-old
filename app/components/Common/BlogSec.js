// Components
import { Col, Container, Row } from "react-bootstrap";
import Title from "../UI/Title";
import BlogBox from "./BlogBox";
import blogData from "@/app/api/blogData";

const BlogSec = () => {
    return (
        <>
            <section className="blog_sec">
                <div className="sec_wp">
                    <Container>
                        <Row>
                            <Col lg={12}>
                                <Title className="text_center">News & Articles</Title>
                            </Col>
                        </Row>
                        <div className="blog_row">
                            <Row>
                                {blogData?.slice(0, 3).map((data) => {
                                    const { id } = data;
                                    return (
                                        <Col lg={4} key={id}>
                                            <BlogBox {...data} />
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

export default BlogSec;
