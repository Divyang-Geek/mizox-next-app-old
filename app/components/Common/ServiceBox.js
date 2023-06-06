// Components
import Image from "next/image";
import Button from "../UI/Button";

const ServiceBox = ({ ...data }) => {
    const { id, image, icon, title, content, url } = data;

    return (
        <>
            <div className="service_box_wp">
                <div className="service_box_num">{id}</div>
                <div className="service_box">
                    <div className="service_box_img back_img" style={{ backgroundImage: `url(${image.src})` }}></div>
                    <div className="service_box_content">
                        <div className="service_box_icon">
                            <Image src={icon.src} alt={title} width={32} height={32} priority />
                        </div>
                        <h3 className="h3_title">{title}</h3>
                        <p>{content}</p>
                        <Button url={url} size="sm">
                            Start Course
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServiceBox;
