
import styles from "./App.module.css";
import {Navbar} from "./components/Navbar/Navbar";
import {Home} from "./components/Home/home";
import {About} from "./components/About/about";
import {Experience} from "./components/Experience/experience";

function App() {

  return (
    <div className={styles.App}>
      <Navbar/>
      <Home />
      <About />
      <Experience />
    </div>
  )
}

export default App
