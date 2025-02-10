import { getImageUrl } from "../../utils"
import styles from "./home.module.css";

export const Home = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, Im Manoj</h1>
            <p className={styles.description}>I am currently an Associate Software Engineer with 2 years of experience as a full-stack developer. I have expertise in web and mobile app development, proficient in technologies such as React, Angular, Node.js, and Flutter.</p>
            <div className={styles.buttons}>
            <a href="mailto:manojlakshan9991@gmail.com" className={styles.contactMe}>Contact Me</a>
            <a href="/Refer-to-Code-Creation.pdf" className={styles.download_cv} download="Refer-to-Code-Creation.pdf">Download CV</a>
            </div>
        </div>
        {/* <img className={styles.dpImage} src={getImageUrl("home/dp.jpeg")} alt="dp"/> */}
        <img className={styles.dpImage} src={getImageUrl("home/dp4.JPG")} alt="dp"/>
        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}/>
    </section>
  )
}
