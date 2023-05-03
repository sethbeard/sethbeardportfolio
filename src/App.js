import "./Sass/App.css";
import AboutPage from "./Components/AboutPage";
import ContactPage from "./Components/ContactPage";
import HomePage from "./Components/HomePage";
import Projects from "./Components/Projects";
function App() {
  return (
    <div className="App" id="App">
      <HomePage className="section disableSelect" />
      <AboutPage className="section disableSelect" />
      <Projects className="section disableSelect" />
      <ContactPage classname="section disableSelect" />
    </div>
  );
}

export default App;
