import styles from './Navbar.module.css';

import {getImageUrl} from '../../utils';
import { useState } from 'react';

export const Navbar = () => {
    const [menuOpen , setMenuOpen] = useState(false);

  return <nav className={styles.navbar}>
    <a className={styles.title} href='/'>portfolio</a>
    <div className={styles.menu}>
        <img className={styles.menuBtn} src={menuOpen ? getImageUrl("nav/closeBtn.jpg") : getImageUrl("nav/menuBtn.png")} alt='menu' onClick= {() => setMenuOpen(!menuOpen)}/>
        <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}>
            <li>
                <a href='#about'>About</a>
            </li>
            <li>
                <a href='#experience'>Experience</a>
            </li>
            <li>
                <a href='#projects'>Projects</a>
            </li>
            <li>
                <a href='#contact'>Contact</a>
            </li>
        </ul>
    </div>
  </nav>;
}