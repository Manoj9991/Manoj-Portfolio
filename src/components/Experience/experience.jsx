import styles from "./experience.module.css"
import { getImageUrl } from "../../utils";
import skills from "../../data/skills.json";
import history from "../../data/history.json";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
        <h2 className={styles.title}>Experience</h2>
        <div className={styles.content}>
            <div className={styles.skills}>
                {skills.map((skill,id) => {
                    return (
                        <div key={id} className={styles.skill}>
                            <div className={styles.skillImageContainer}>
                                <img className={styles.skillImg} src={getImageUrl(skill.imageSrc)} alt="jk"/>
                            </div>
                            <p>{skill.title}</p>
                        </div>
                    )
                })}
            </div>
            <ul className={styles.history}>
                {history.map((history,id) => {
                    return(
                        <li key={id} className={styles.historyItem}>
                            <img
                            src={getImageUrl(history.imageSrc)} alt={`${history.organization} Logo`}/>
                            <div className={styles.historyItemDetails}>
                                <h3>{`${history.role} ${history.organization}`}</h3>
                                <p>{`${history.startDate} ${history.endDate}`}</p>
                                <ul>
                                    {history.experiences.map((exp,id) => {
                                        return <li key={id}>{exp}</li>
                                    })}
                                </ul>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    </section>
  )
}