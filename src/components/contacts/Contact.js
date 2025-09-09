import React, { useState } from "react";
import styles from "./Contact.module.css";
import { InnerLayout } from "../layout/InnerLayout.js";
import SocialIconContainer from "../header/SocialIconContainer";

export const Contact = ({ socialLinks = [] }) => {
    return (
        <InnerLayout contentColor={"var(--primary-black)"} backgroundColor={"var(--primary-white)"}>
            <div className={styles.contactContainer} id="contact">
                <ContactForm socialLinks={socialLinks} />
                <ContactLabelText />
            </div>
        </InnerLayout>
    );
};

export const ContactForm = ({ socialLinks = [] }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [responseMessage, setResponseMessage] = useState("");
    const [errors, setErrors] = useState({});

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        website: "",
        message: "",
        countryCode: "+91",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Validate input fields but do NOT prevent submission
        const validationErrors = validateForm(formData);
        setErrors(validationErrors); // Show validation errors

        // Reset validation errors after 2 seconds
        setTimeout(() => {
            setErrors({});
        }, 5000);
        
        // If there are validation errors, return early and don't submit
        if (Object.keys(validationErrors).length > 0) {
            return;
        }

        // Create a new object with the combined phone number
        let submissionData = { ...formData };
        if (submissionData.countryCode && submissionData.phone) {
            submissionData.phone = `${submissionData.countryCode}${submissionData.phone}`;
        }
        // Remove countryCode from submission data
        delete submissionData.countryCode;

        submitForm(submissionData); // Proceed with submission
    };

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validatePhone = (phone) => {
        const phoneRegex = /^\d{10}$/;
        return phoneRegex.test(phone);
    };

    const validateWebsite = (url) => {
        const urlRegex = /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_.~#?&//=]*)$/;
        return urlRegex.test(url);
    };

    const validateForm = (formData) => {
        let errors = {};

        if (formData.email && !validateEmail(formData.email)) {
            errors.email = "Invalid email format";
        }

        if (formData.phone && !validatePhone(formData.phone)) {
            errors.phone = "Invalid phone number format (e.g., +1-1234567890)";
        }

        if (formData.website && !validateWebsite(formData.website)) {
            errors.website = "Invalid website URL (e.g., https://example.com)";
        }

        return errors;
    };

    const submitForm = async (formData) => {
        console.log("Submitting form:", formData);
        try {
            setIsLoading(true);

            const response = await fetch("https://prashantsingh.up.railway.app/send-mail", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            setIsLoading(false);
            const data = await response.json();
            if (data.statusCode === 200) {
                setResponseMessage('Thank you for reaching out to us! We have received your message and will be in touch shortly to discuss your inquiry.');
            } else {
                throw new Error(data.message || "Failed to send message");
            }
            
            // Clear response message after 2 seconds
            setTimeout(() => {
                setResponseMessage('');
            }, 5000);


            if (!response.ok) throw new Error("Failed to send message");

            setFormData({
                name: "",
                email: "",
                phone: "",
                website: "",
                message: "",
                countryCode: "+91",
            });
        } catch (error) {
            console.error("Error sending message:", error);
            alert("Failed to send message. Please try again later.");
        }
    };

    return (
        <form onSubmit={handleSubmit} className={styles.formContainer}>
            <div className={styles.formGroup}>
                <input
                    className={styles.input}
                    type="text"
                    name="name"
                    onInput={(e) => {
                        e.target.value = e.target.value.split(' ')
                            .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
                            .join(' ');
                    }}
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className={styles.formGroup}>
                <input
                    className={styles.input}
                    type="text"
                    name="email" 
                    placeholder="Enter email"
                    value={formData.email}
                    onChange={handleChange}
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    required
                />
                {errors.email && <small className={styles.error}>{errors.email}</small>}
            </div>

            <div className={styles.formGroup}>
                <div className={styles.phoneInputGroup}>
                    <select
                        className={styles.countryCode}
                        name="countryCode"
                        value={formData.countryCode}
                        onChange={(e) => {
                            const countryCode = e.target.value.split(' ')[0];
                            setFormData({ ...formData, countryCode: countryCode });
                        }}
                    >
                        <option value="+91">+91 IND</option>
                        <option value="+1">+1 USA</option>
                        <option value="+20">+20 EGY</option>
                        <option value="+27">+27 ZAF</option>
                        <option value="+30">+30 GRC</option>
                        <option value="+31">+31 NLD</option>
                        <option value="+32">+32 BEL</option>
                        <option value="+33">+33 FRA</option>
                        <option value="+34">+34 ESP</option>
                        <option value="+36">+36 HUN</option>
                        <option value="+39">+39 ITA</option>
                        <option value="+40">+40 ROU</option>
                        <option value="+41">+41 CHE</option>
                        <option value="+43">+43 AUT</option>
                        <option value="+44">+44 GBR</option>
                        <option value="+45">+45 DNK</option>
                        <option value="+46">+46 SWE</option>
                        <option value="+47">+47 NOR</option>
                        <option value="+48">+48 POL</option>
                        <option value="+49">+49 DEU</option>
                        <option value="+51">+51 PER</option>
                        <option value="+52">+52 MEX</option>
                        <option value="+54">+54 ARG</option>
                        <option value="+55">+55 BRA</option>
                        <option value="+61">+61 AUS</option>
                        <option value="+63">+63 PHL</option>
                        <option value="+65">+65 SGP</option>
                        <option value="+81">+81 JPN</option>
                        <option value="+86">+86 CHN</option>
                        <option value="+971">+971 UAE</option>
                    </select>
                    <input
                        className={styles.input}
                        type="text"
                        name="phone"
                        placeholder="Enter Phone Number (Optional)"
                        value={formData.phone}
                        onChange={handleChange}
                    />
                </div>
                {errors.phone && <small className={styles.error}>{errors.phone}</small>}
            </div>

            <div className={styles.formGroup}>
                <input
                    className={styles.input}
                    type="text"
                    name="website"
                    placeholder="Your website (If exists)"
                    value={formData.website}
                    onChange={handleChange}
                />
                {errors.website && <small className={styles.error}>{errors.website}</small>}
            </div>

            <div className={styles.formGroup}>
                <textarea
                    className={styles.textArea}
                    name="message"
                    placeholder="How can I help?*"
                    onInput={(e) => {
                        e.target.value = e.target.value
                            .split('. ')
                            .map(sentence => {
                                if (sentence.length > 0) {
                                    return sentence.charAt(0).toUpperCase() + sentence.slice(1);
                                }
                                return sentence;
                            })
                            .join('. ');
                    }}
                    value={formData.message}
                    onChange={handleChange}
                    required
                />
            </div>
            {responseMessage && <h5>{responseMessage}</h5>}
            
            <div className={styles.buttonAndSocialGroup}>
                <button className={styles.buttonContainer} type="submit">
                    {isLoading ? <LoadingSpinner /> : <h2>Get In Touch</h2>}
                </button>
                <SocialIconContainer socialLinks={socialLinks} />
            </div>
        </form>
    );
};

const LoadingSpinner = () => <span className={styles.loader}></span>;

function ContactLabelText() {
    return (
        <div className={styles.labelContainer}>
            <h2>Let's talk for Something special</h2>
            <small>
                I seek to push the limits of creativity to create high-engaging, user-friendly, and
                memorable interactive experiences.
            </small>
            <a href="mailto:prahsantsinghsca@gmail.com">
                <h3>prahsantsinghsca@gmail.com</h3>
            </a>
            <a href="tel:+917352579915">
                <h3>+91 7352579915</h3>
            </a>
        </div>
    );
}
