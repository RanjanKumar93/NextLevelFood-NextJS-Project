import burger from "@/assets/burger.jpg";
import curry from "@/assets/curry.jpg";
import dumplings from "@/assets/dumplings.jpg";
import macncheese from "@/assets/macncheese.jpg";
import pizza from "@/assets/pizza.jpg";
import schnitzel from "@/assets/schnitzel.jpg";
import tomatoSalad from "@/assets/tomato-salad.jpg";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* <nav className="navbar navbar-expand-lg bg-body-tertiary">
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
          </div>
        </div>
      </nav> */}
      <div className="card mb-3 mx-auto mt-5" style={{ maxWidth: 1080 }}>
        <div className="row g-0">
          <div className="col-md-5">
            <div
              id="carouselExampleAutoplaying"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src={burger.src}
                    className="d-block w-100"
                    alt="burger"
                  />
                </div>
                <div className="carousel-item">
                  <img src={curry.src} className="d-block w-100" alt="curry" />
                </div>
                <div className="carousel-item">
                  <img
                    src={dumplings.src}
                    className="d-block w-100"
                    alt="dumplings"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={macncheese.src}
                    className="d-block w-100"
                    alt="macncheese"
                  />
                </div>
                <div className="carousel-item">
                  <img src={pizza.src} className="d-block w-100" alt="pizza" />
                </div>
                <div className="carousel-item">
                  <img
                    src={schnitzel.src}
                    className="d-block w-100"
                    alt="schnitzel"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={tomatoSalad.src}
                    className="d-block w-100"
                    alt="tomatoSalad"
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                />
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                />
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div className="col-md-7">
            <div className="card-body">
              <h2 className="card-title m-3">
                NEXTLEVEL FOOD FOR NEXT LEVEL FOODIES
              </h2>
              <h4 className="card-text mx-3">
                Taste & share food from all over the world.
              </h4>
              <div className="m-4">
                <button type="button" className="btn btn-outline-warning">
                  Join the Community
                </button>
                <button type="button" className="btn btn-warning ms-3">
                  Explore Meals
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mb-1">
        <div className="row">
          <div className="col-12 fs-1 fw-bolder text-center">How it works</div>
        </div>
      </div>
      <div className="container mb-2">
        <div className="row">
          <div className="col-2"></div>
          <div className="col-8 fs-5 text-center">
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </div>
          <div className="col-2"></div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-2"></div>
          <div className="col-8 fs-5 text-center">
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </div>
          <div className="col-2"></div>
        </div>
      </div>
      <div className="container mb-2 mt-4">
        <div className="row">
          <div className="col-12 fs-1 fw-bolder text-center">
            Why NextLevel Food?
          </div>
        </div>
      </div>
      <div className="container mb-2">
        <div className="row">
          <div className="col-2"></div>
          <div className="col-8 fs-5 text-center">
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </div>
          <div className="col-2"></div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-2"></div>
          <div className="col-8 fs-5 text-center">
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </div>
          <div className="col-2"></div>
        </div>
      </div>
    </>
  );
}
