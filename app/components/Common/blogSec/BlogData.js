// Images
import blogImg1 from "@/assets/images/blog-img1.png";
import blogImg2 from "@/assets/images/blog-img2.png";
import blogImg3 from "@/assets/images/blog-img3.png";
import blogAuthor1 from "@/assets/images/blog-author1.png";
import blogAuthor2 from "@/assets/images/blog-author2.png";
import blogAuthor3 from "@/assets/images/blog-author3.png";

const BlogData = [
    {
        id: 1,
        publishDate: {
            day: "02",
            month: "Jan",
        },
        img: blogImg1,
        meta: {
            author: {
                name: "Shadhin",
                img: blogAuthor1,
            },
            comment: {
                count: "1",
            },
        },
        title: "Manage Design system theme",
        url: "/blog",
    },
    {
        id: 2,
        publishDate: {
            day: "05",
            month: "Aug",
        },
        img: blogImg2,
        meta: {
            author: {
                name: "Alex",
                img: blogAuthor2,
            },
            comment: {
                count: "4",
            },
        },
        title: "Necessity may give us best",
        url: "/blog",
    },
    {
        id: 3,
        publishDate: {
            day: "07",
            month: "Dec",
        },
        img: blogImg3,
        meta: {
            author: {
                name: "John",
                img: blogAuthor3,
            },
            comment: {
                count: "1",
            },
        },
        title: "virtual court give us best",
        url: "/blog",
    },
];

export default BlogData;
