// Components
import Image from "next/image";
import { useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { GrPlayFill } from "react-icons/gr";
import PortfolioData from "./PortfolioData";
import Title from "../../UI/Title";

const PortfolioSec = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef(null);

    const toggleBtn = (e) => {
        setIsPlaying(!isPlaying);

        if (!isPlaying) {
            videoRef.current.play();
        } else {
            videoRef.current.pause();
        }
    };

    return (
        <>
            <section className="portfolio_sec">
                <div className="sec_wp">
                    <Container fluid className="p-0">
                        <Row>
                            <Col lg={5}>
                                <div className={`portfolio_video ${isPlaying ? " activeVideo" : ""}`}>
                                    <video muted loop ref={videoRef} onClick={toggleBtn}>
                                        <source src={"/portfolio-video.mp4"} type="video/mp4" />
                                    </video>
                                    {!isPlaying && (
                                        <div className="play_btn" onClick={toggleBtn}>
                                            <GrPlayFill />
                                        </div>
                                    )}
                                </div>
                            </Col>
                            <Col lg={7}>
                                <div className="portfolio_content">
                                    <Title>Keep your Vision to Our Projects</Title>
                                    <p>Lorem ipsum dolor sit amet consec tetur notted adipisi cing elit sed Lorem ipsum dolor sit amet consec tetur notted adipisi cing elit sed</p>
                                    <div className="portfolio_counter_wp">
                                        {PortfolioData?.map((data) => {
                                            const { id, icon, text, count } = data;
                                            return (
                                                <div className="count_box" key={id}>
                                                    <div className="count_box_icon">
                                                        <Image src={icon.src} width={50} height={50} alt={text} />
                                                    </div>
                                                    <div className="count_box_content">
                                                        <h3 className="count_box_num">{count}</h3>
                                                        <p>{text}</p>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
        </>
    );
};

export default PortfolioSec;
