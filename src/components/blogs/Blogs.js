import {React} from "react";
import { InnerLayout } from "../layout/InnerLayout.js";
import style from "./Blogs.module.css";
import {HeadlineText} from "../text/Headline";
import ResumeButton from "../buttons/components/ResumeButton";
import axios from "axios";
import { useState, useEffect } from "react";

// Or load specific components

export const Blogs = ({ blogUrls = [] }) => {
    return (
        <InnerLayout backgroundColor={"var(--primary-white)"} contentColor={"var(--primary-black)"} >
            <div className={style.container} id="blogs">
                <HeadlineText firstText={"My"} secondText={" Blogs"} color={"var(--primary-black)"} />
                <br/>
                <div className={style.blogContainer} id="blogs">
                    {blogUrls.slice(0, 3).map((url, index) => (
                        <BlogCard key={index} url={url} />
                    ))}
                </div>
                {blogUrls.length > 3 && (
                    <ResumeButton 
                        label="Load More" 
                        icon={null} 
                        onClick={() => {window.open("https://prashantandev.medium.com")}} 
                    />
                )}

            </div>
        </InnerLayout>
    );
};


const getPreview = async (url) => {
    try {
        const encodedUrl = encodeURIComponent(url); // Encode URL properly
        const apiUrl = `https://prashant.up.railway.app/blog-preview?url=${encodedUrl}`;

        const { data } = await axios.get(apiUrl);

        // Extract relevant data
        return {
            title: data.title,
            description: data.first_50_words,
            image: data.image_url,
            blogLink: data.blog_link,
        };
    } catch (error) {
        console.error("Error fetching preview:", error);
        return null;
    }
};

export const BlogCard = ({ url }) => {
    const [preview, setPreview] = useState(null);

    useEffect(() => {
        if (url) {
            getPreview(url).then(setPreview);
        }
    }, [url]);

    if (!preview) {
        return null;
    }

    console.log(preview);
    return (
        <div className={style.blogCardContainer}>
            <div className={style.imageContainer}>
                <img src={preview.image} alt="Blog Preview" />
            </div>
            <div className={style.blogDetail}>
                <h2>{preview.title}</h2>
                <p className={style.description}>{preview.description}</p>

                <a className={style.readOnMedium} href={preview.blogLink} target="_blank" rel="noopener noreferrer">Read on Medium</a>
            
            </div>
        </div>
    );
};
