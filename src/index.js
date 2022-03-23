import React, {Component} from "react";
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

class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="contact" element={<Contact />} />
              <Route path="*" element={<Page404 />} />
            </Route>
          </Routes>
        <Footer />
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
