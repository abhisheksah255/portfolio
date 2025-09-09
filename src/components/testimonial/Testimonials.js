import React from "react";
import {InnerLayout} from "../layout/InnerLayout.js";
import {HeadlineText} from "../text/Headline";
import styles from "./Testimonial.module.css"
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner from "../../assets/project.png";

// unsed component
export const Testimonials = () => {
    return (
        <InnerLayout backgroundColor={"var(--primary-black)"} contentColor={"var(--primary-white)"}>
            <div className={styles.container}>
                <HeadlineText secondText={"Testimonials"} color={"var(--primary-white)"}></HeadlineText>
            </div>
               <Responsive/>
        </InnerLayout>
        );
}

function Responsive() {
    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        className: "center",
        centerMode: true,
        autoplay: true,
        centerPadding: "60px",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className="slider-container">
            <Slider {...settings}>
                <Card index={1} />
                <Card index={1} />

            </Slider>
        </div>
    );
}



function Card(props){
        // const { index } = props;
        return (
            <div className={styles.cardContainer}>
                <div className={styles.profileImageWrapper}>
                    <img src={banner} alt="Profile" className={styles.profileImage} />
                    <div className={styles.quoteIcon}>&#34;</div>
                </div>
                <p className={styles.testimonialText}>
                    I recently had to jump on 10+ different calls across eight different countries to find the right owner.
                </p>
                <div className={styles.separator}></div>
                <h3 className={styles.name}>Flora Sheen</h3>
                <p className={styles.role}>Designer</p>
            </div>
        );
}
