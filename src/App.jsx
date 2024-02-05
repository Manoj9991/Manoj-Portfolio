
import styles from "./App.module.css";
import {Navbar} from "./components/Navbar/Navbar";
import {Home} from "./components/Home/home";

function App() {

  return (
    <div className={styles.App}>
      <Navbar/>
      <Home />
    </div>
  )
}

export default App
