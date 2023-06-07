// Images
import chatImg from "@/assets/images/chat.png";

// Components
import Image from "next/image";
import Button from "../UI/Button";

const BlogBox = ({ ...data }) => {
    const { publishDate, img: blogThumb, meta, title, url } = data;
    const { day, month } = publishDate;
    const { author, comment } = meta;
    const { name: authorName, img: authorImg } = author;
    const { count } = comment;
    return (
        <>
            <div className="blog_box_wp">
                <div className="blog_box_date">
                    {day} {month}
                </div>
                <div className="blog_box">
                    <div className="blog_box_img">
                        <Image src={blogThumb.src} alt={title} width={550} height={550} />
                    </div>
                    <div className="blog_box_content">
                        <div className="blog_box_author">
                            <Image src={authorImg.src} alt="Author Image" width={50} height={50} />
                            <span>By {authorName}</span>
                        </div>
                        <h3 className="h3_title">{title}</h3>
                        <div className="blog_box_footer">
                            {comment && (
                                <div className="blog_box_comment">
                                    <Image src={chatImg.src} alt="Chat Image" width={20} height={19} />
                                    <span>{count} Comment</span>
                                </div>
                            )}
                            <Button url={url} size="xs">
                                More
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogBox;
