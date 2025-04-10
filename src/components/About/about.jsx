import { getImageUrl } from '../../utils'
import styles from './about.module.css'

export const About = () => {
  return (
    <section className={styles.container} id='about'>
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img src = {getImageUrl("home/dp4.JPG")} alt='Me sitting with a laptop'className={styles.aboutImage}/>
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/cursorIcon.png")} alt='frontend'/>
                    <div className={styles.aboutItemText}>
                        <h3>Frontend Developer</h3>
                        <p>I`m a frontend developer and have Experience with react and angular</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/serverIcon.png")} alt='backend'/>
                    <div className={styles.aboutItemText}>
                        <h3>Backend Developer</h3>
                        <p>I`m a backend developer and have Experience with node js</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/uiIcon.png")} alt='ui'/>
                    <div className={styles.aboutItemText}>
                        <h3>UI Developer</h3>
                        <p>I`m a UI developer and have Experience with figma</p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
  )
}
