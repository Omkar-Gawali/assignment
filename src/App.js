import "./App.css";
import img from "./img/watch.jpg";
function App() {
  return (
    <div className="App">
      <header>
        <nav className="navbar">
          <ul className="navbar-items my-auto">
            <li className="item">OG Tech</li>
            <li className="item">Home</li>
            <li className="item">About</li>
            <li className="item">Contact</li>
            <li className="item">Services</li>
          </ul>
        </nav>
      </header>
      <section className="home">
        <h1>Developing Professional Solutions for Your Business Needs</h1>
        <p>
          OG Tech offers you enterprise and web apps developments. Whether its a
          small or big project, we work with you to make sure it gets delivered
          on time.
        </p>
        <button className="btn btn-outline-light rounded-pill fs-6 w-25">
          {" "}
          Read More
        </button>
      </section>
      <div className="section-3 row justify-content-around">
        <div className="left col-6 p-0">
          <img className="img-fluid" src={img} alt="" />
        </div>
        <div className="right col-6 p-4">
          <h3>WATCH APPLICATIONS</h3>
          <p>Developing Professional Solutions for Your Business Needs</p>
          <p>
            OG Tech offers you enterprise and web apps developments. Whether its
            a small or big project, we work with you to make sure it gets
            delivered on time.
          </p>
          <button className="btn btn-outline-light rounded-pill fs-6 w-50">
            {" "}
            Read More
          </button>
          <button className="btn btn-outline-warning rounded-pill fs-6 w-50">
            {" "}
            Read More
          </button>
        </div>
      </div>
      <div className="section-3 row justify-content-around">
        <div className="right col-6 p-4">
          <h3>MEET THE TEAM</h3>
          <p>Developing Professional Solutions for Your Business Needs</p>
          <p>
            OG Tech offers you enterprise and web apps developments. Whether its
            a small or big project, we work with you to make sure it gets
            delivered on time. OG Tech offers you enterprise and web apps
            developments. Whether its a small or big project, we work with you
            to make sure it gets delivered on time.
          </p>
          <p>
            OG Tech offers you enterprise and web apps developments. Whether its
            a small or big project, we work with you to make sure it gets
            delivered on time.
          </p>
          <button className="btn btn-outline-light rounded-pill fs-6 w-50">
            {" "}
            Read More
          </button>
        </div>
        <div className="left col-6 p-0">
          <img
            className="img-fluid"
            src="https://png.pngtree.com/background/20230517/original/pngtree-group-of-business-men-standing-over-a-window-with-business-suitcases-picture-image_2634015.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="section-3 row justify-content-around">
        <div className="left col-6 p-0">
          <img
            className="img-fluid"
            src="https://img.freepik.com/premium-photo/man-using-digital-tablet-concept-service_220873-7590.jpg"
            alt=""
          />
        </div>
        <div className="right col-6 p-5">
          <h3 className="mx-2">WHAT WE DO</h3>
          <div class="container text-center">
            <div class="row row-cols-2">
              <div class="col  p-2">
                <h4 className="text-start mx-1">Interface Design</h4>
                <p className="text-start">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Ducimus accusamus enim vitae, deserunt architecto voluptatum
                </p>
              </div>
              <div class="col  p-2">
                <h4 className="text-start mx-1">User Experience</h4>
                <p className="text-start">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Ducimus accusamus enim vitae, deserunt architecto voluptatum
                </p>
              </div>
              <div class="col  p-2">
                <h4 className="text-start mx-1">Development</h4>
                <p className="text-start">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Ducimus accusamus enim vitae, deserunt architecto voluptatum
                </p>
              </div>
              <div class="col  p-2">
                <h4 className="text-start mx-1">Product Design</h4>
                <p className="text-start">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Ducimus accusamus enim vitae, deserunt architecto voluptatum
                </p>
              </div>
            </div>
            <button className="btn btn-outline-warning rounded-pill mt-4 w-50">
              {" "}
              Read More
            </button>
          </div>
        </div>
      </div>

      {/* Testimonail */}
      <div id="carouselExampleIndicators" className="carousel slide">
        <h2 className="text-center p-3">Our Testimonials</h2>
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={0}
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={1}
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={2}
            aria-label="Slide 3"
          />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="review">
              <div className="review-left">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPnCmfSvQADV6qtxbmmj3fJBoXCb3d5scVpw&usqp=CAU"
                  alt=""
                />
              </div>
              <div className="review-right">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et,
                  impedit.
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item active">
            <div className="review">
              <div className="review-left">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPnCmfSvQADV6qtxbmmj3fJBoXCb3d5scVpw&usqp=CAU"
                  alt=""
                />
              </div>
              <div className="review-right">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et,
                  impedit. Lorem, ipsum dolor sit amet consectetur adipisicing
                  elit. Qui, repudiandae.
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item active">
            <div className="review">
              <div className="review-left">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPnCmfSvQADV6qtxbmmj3fJBoXCb3d5scVpw&usqp=CAU"
                  alt=""
                />
              </div>
              <div className="review-right">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et,
                  impedit.
                </p>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="footer">
        <div class="container text-center">
          <div class="row align-items-center">
            <div class="col-2">
              <div className="column">
                <li className="fs-4">Section A</li>
                <li>Home</li>
                <li>Feature</li>
                <li>Pricing</li>
                <li>FAQs</li>
              </div>
            </div>
            <div class="col-2">
              <div className="column">
                <li className="fs-4">Section A</li>
                <li>Home</li>
                <li>Feature</li>
                <li>Pricing</li>
                <li>FAQs</li>
              </div>
            </div>
            <div class="col-2 ">
              <div className="column">
                <li className="fs-4">Section A</li>
                <li>Home</li>
                <li>Feature</li>
                <li>Pricing</li>
                <li>FAQs</li>
              </div>
            </div>
            <div class="col-6">
              <div className="column-contact">
                <p className="p-2 mt-4 fs-4"> Subscribe to our newsletter</p>
                <p className="p-2">
                  Monthly digest of what's new and exciting from us. Email
                  address
                </p>
                <div className="row justify-content-between p-2">
                  <input
                    type="email"
                    className="form-control w-50 fs-10 mx-2"
                    id="exampleFormControlInput1"
                    placeholder="name@example.com"
                  />
                  <button className="btn btn-outline-info w-25">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="one">© 2022 Company, Inc. All rights reserved.</div>
          <div className="two">
            <i
              className="fa-brands fs-2 fa-facebook"
              style={{ color: "#74C0FC" }}
            />
            <i
              className="fa-brands fs-2 fa-twitter"
              style={{ color: "#74C0FC" }}
            />
            <i
              className="fa-brands fs-2 fa-instagram"
              style={{ color: "#f31255" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
