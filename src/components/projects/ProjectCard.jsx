
import { getImageUrl } from '../../utils';
import PropTypes from 'prop-types';
import styles from './ProjectCard.module.css';

export const ProjectCard = ({
    project:{title,imageSrc,description,skills,demo,source}
}) => {
  return (
    <div className={styles.container}>
        <img
            src={getImageUrl(imageSrc)} alt={`Image of ${title}`} className={styles.image}
        />
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <ul className={styles.skills}>
            {skills.map((skill,id) => (
                <li key={id} className={styles.skill}>{skill}</li>
            ))}
        </ul>
        <div className={styles.links}>
            <a href={source} className={styles.link}>Source</a>
        </div>
    </div>
  )
}

ProjectCard.propTypes = {
    project: PropTypes.shape({
        title: PropTypes.string.isRequired,
        imageSrc: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        skills: PropTypes.arrayOf(PropTypes.string).isRequired,
        demo: PropTypes.string.isRequired,
        source: PropTypes.string.isRequired,
    }).isRequired,
};