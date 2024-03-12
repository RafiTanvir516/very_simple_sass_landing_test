import "./Scss/index.scss";
import Home from "./Pages/Home/Home";
import ScrollToTop from "./Pages/ScrollToTop/ScrollToTop";
import Footer from "./Pages/shared/Footer/Footer";
import Navbar from "./Pages/shared/Navbar/Navbar";

function App() {
  return (
    <div>
      <div className="app-container">
        <ScrollToTop></ScrollToTop>
        <Navbar></Navbar>
        <Home></Home>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
