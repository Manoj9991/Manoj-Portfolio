import styles from "./education.module.css"
import { getImageUrl } from "../../utils";
// import skills from "../../data/skills.json";
import education from "../../data/education.json";

export const Education = () => {
  return (
    <section className={styles.container}  id="education">
        <h2 className={styles.title}>Education</h2>
        <div className={styles.content}>
            <ul className={styles.education}>
                {education.map((education,id) => {
                    return(
                        <li key={id} className={styles.educationItem}>
                            <img
                            src={getImageUrl(education.imageSrc)} alt={`${education.organization} Logo`}/>
                            <div className={styles.educationItemDetails}>
                                <h3>{`${education.role} ${education.organization}`}</h3>
                                <p>{`${education.startDate} ${education.endDate}`}</p>
                                <ul>
                                    {education.experiences.map((edu,id) => {
                                        return <li key={id}>{edu}</li>
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