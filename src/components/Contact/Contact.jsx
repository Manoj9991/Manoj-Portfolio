import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './Contact.module.css';

export const Contacts = () => {
  return (
    <footer id='contact' className={styles.container}>
        <div className={styles.text}>
          <h2>Contact</h2>
          <p>Feel free to reach out</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl('contact/emailIcon.png')} alt='Email icon' />
                <a href='mailto:manojlakshan9991@gmail.com'>manojlakshan9991@gmail.com</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl('contact/linkedinIcon.png')} alt='Linkedin icon' />
                <a href='https://www.linkedin.com/in/manoj-lakshan99/'>Manoj Lakshan</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl('contact/githubIcon.png')} alt='Github icon' />
                <a href='https://github.com/Manoj9991'>Manoj9991</a>
            </li>
        </ul>
    </footer>
  )
}