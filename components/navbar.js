import Link from "next/link";
import logoImg from "@/assets/logo.png";

export default function Navbar({ handleClick }) {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid mx-4">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link navbar-brand active d-flex align-items-center"
                  aria-current="page"
                  href="#"
                >
                  <img
                    src={logoImg.src}
                    alt="Bootstrap"
                    width={70}
                    height={58}
                  />
                  <span className="ms-3 fs-2">NEXTLEVEL FOOD</span>
                </Link>
              </li>
            </ul>
            <button type="button" className="btn btn-outline-info me-2">
              Browse Meals
            </button>
            <button type="button" className="btn btn-outline-info">
              Foodies Community
            </button>
            {/* <span>
              <div className="btn-group">
                <a
                  href="#"
                  className="btn btn-primary active"
                  aria-current="page"
                >
                  Active link
                </a>
                <a href="#" className="btn btn-primary">
                  Link
                </a>
                <a href="#" className="btn btn-primary">
                  Link
                </a>
              </div>
            </span> */}
          </div>
        </div>
      </nav>
    </>
  );
}
