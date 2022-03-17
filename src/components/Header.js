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
              <NavLink to="/" className="nav-link" activeClassName="selected">Features</NavLink>
              <NavLink to="/" className="nav-link" activeClassName="selected">Showcase</NavLink>
              <NavLink to="/" className="nav-link" activeClassName="selected">Resell Felix</NavLink>
              <NavLink to="/contact" className="nav-link header-btn" activeClassName="selected">Get Started</NavLink>
            </div>
          </div>
        </div>
      </div>
    </header>
  ); 
}
