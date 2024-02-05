
import styles from "./App.module.css";
import {Navbar} from "./components/Navbar/Navbar";
import {Home} from "./components/Home/home";
import {About} from "./components/About/about";

function App() {

  return (
    <div className={styles.App}>
      <Navbar/>
      <Home />
      <About />
    </div>
  )
}

export default App
