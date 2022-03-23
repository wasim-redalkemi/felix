import { NavLink, Link } from "react-router-dom";
export default function Header() {
  return(
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="col d-flex align-items-center justify-content-between">
            <div className="logo">
              <Link to="/">
                <img src="/assets/images/logo.png" alt="logo" />
              </Link>
            </div>
            <div className="nav">
              <NavLink to="/" className={(navData) => "nav-link " + (navData.isActive ? "selected" : "")}>Features</NavLink>
              <NavLink to="/" className={(navData) => "nav-link " + (navData.isActive ? "selected" : "")}>Showcase</NavLink>
              <NavLink to="/" className={(navData) => "nav-link " + (navData.isActive ? "selected" : "")}>Resell Felix</NavLink>
              <NavLink to="/contact" className={(navData) => "nav-link header-btn " + (navData.isActive ? "selected" : "")}>Get Started</NavLink>
            </div>
          </div>
        </div>
      </div>
    </header>
  ); 
}
