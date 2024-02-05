import { getImageUrl } from "../../utils"
import styles from "./home.module.css";

export const Home = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, Im Manoj</h1>
            <p className={styles.description}>Im a full stack developer with 2 years of Experience with react and node js. reach out if you`d like to learn more!</p>
            <a href="mailto:manojlakshan9991@gmail.com" className={styles.contactMe}>Contact Me</a>
        </div>
        <img className={styles.dpImage} src={getImageUrl("home/dp.jpeg")} alt="dp"/>
        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}/>
    </section>
  )
}
