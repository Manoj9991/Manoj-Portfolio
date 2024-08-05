
import styles from "./App.module.css";
import {Navbar} from "./components/Navbar/Navbar";
import {Home} from "./components/Home/home";
import {About} from "./components/About/about";
import {Experience} from "./components/Experience/experience";
import {Projects} from "./components/projects/project";
import {Contacts} from "./components/Contact/Contact"

function App() {

  return (
    <div className={styles.App}>
      <Navbar/>
      <Home />
      <About />
      <Experience />
      <Projects />
      <Contacts />
    </div>
  )
}

export default App
