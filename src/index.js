import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//css
import "./css/style.scss";

//common components
import Header from "./components/Header";
import Footer from "./components/Footer";

//pages
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Page404 from "./pages/Page404";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      <Footer />
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));