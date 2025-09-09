import SocialIcon from "../socialicon/SocialIcon";
import styles from "./css/SocialIconContainer.module.css";

const handleClick = (url) => {
    console.log(url);  // For debugging
    window.open(url, '_blank');  // Opens the link in a new tab
}

const SocialIconContainer =({socialLinks = []})=>{
    return(
        <div className={styles.socialContainer}>
            {
                socialLinks.map(({ id, name, icon, url  }) => (
                    <SocialIcon key={id} name={name} onClick={()=>handleClick(url)}>
                        {icon}
                    </SocialIcon>
                    )
                )
            }
        </div>
    )
}

export default SocialIconContainer;