import "./App.css";
// import About from "./components/About";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import TextConfig from "./components/TextConfig";
import WordContainer from "./components/WordContainer";

function App() {
  return (
    <>
      <Navbar />
      <TextConfig />
      <WordContainer/>
      {/* <About/> */}
      <Footer />
    </>
  );
}

export default App;
