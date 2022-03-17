import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      <div className="home-banner">
        <div className="container">
          <div className="row align-items-center">
            <div className="col text-outer">
              <h1 className="banner-heading">Websites<br />Made Easy</h1>
              <p className="banner-desc">For the business and the owner</p>
              <p className="banner-link-btn"><Link to="/" className="btn">Get a Free Consultation</Link></p>
            </div>
            <div className="col img-outer">
              <img src="/assets/images/felix-illustration.png" alt="Illustration" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
