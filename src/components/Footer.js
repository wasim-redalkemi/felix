import { Link } from "react-router-dom";
export default function Footer() {
  return(
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col d-flex align-items-center justify-content-between">
            <div className="logo">
              <Link to="/">
                <img src="/assets/images/logo-light.png" alt="logo" />
              </Link>
            </div>
            <ul className="nav">
              <li className="nav-item">
                © Worldwide Copyright Reserved. <Link to="/" className="nav-link">Felix</Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">Powered by Felix</Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">Admin Login</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  ); 
}
