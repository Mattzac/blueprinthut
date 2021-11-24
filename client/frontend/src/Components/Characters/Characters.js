import React from "react";
import "./Characters";
import { Link } from "react-router-dom";

const Characters = () => {
  return (
    <div className="characters mt-3 mb-3">
      <div
        className="characterhero text-white bg-image w-100 text-center px-4 py-5 my-5"
        style={{
          backgroundImage:
            "url(" +
            "https://mdbootstrap.com/img/Photos/Others/images/76.jpg" +
            ")",
        }}
      >
        <h1 className="display-5 fw-bold">Create your own character !</h1>
        <div className="col-md-6 mx-auto">
          <p className="mute">
            "Your character defines who you are by the actions you take."
            Catherine Pulsifer
          </p>
        </div>
      </div>
      <div className="container ">
        <div className="row mb-3">
          <div className="col-md-8 justify-content-center">
            <div className="border-bottom ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
              <input
                className="ms-4"
                style={{ border: "none" }}
                type="text"
                placeholder="Visit your characters"
              />
            </div>
          </div>
          <div className="col-md-2 d-flex justify-content-end">
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Series
              </button>
              <div className="dropdown-menu">
                <form>
                  <div className="m-3">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="dropdownCheck"
                      />
                      <label className="form-check-label" for="dropdownCheck">
                        StoryName1
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="dropdownCheck"
                      />
                      <label className="form-check-label" for="dropdownCheck">
                        StoryName2
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="dropdownCheck"
                      />
                      <label className="form-check-label" for="dropdownCheck">
                        StoryName3
                      </label>
                    </div>
                  </div>
                  <button type="submit" className="m-2 btn btn-primary">
                    Apply
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="col-md-2 d-flex justify-content-end">
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Series
              </button>
              <div className="dropdown-menu">
                <form>
                  <div className="m-3">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="dropdownCheck"
                      />
                      <label className="form-check-label" for="dropdownCheck">
                        StoryName1
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="dropdownCheck"
                      />
                      <label className="form-check-label" for="dropdownCheck">
                        StoryName2
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="dropdownCheck"
                      />
                      <label className="form-check-label" for="dropdownCheck">
                        StoryName3
                      </label>
                    </div>
                  </div>
                  <button type="submit" className="m-2 btn btn-primary">
                    Apply
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col">262 results</div>
          <div className="col d-flex justify-content-end">
            <span className="m-3">Sort By</span>
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                sort
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                <li className="m-3">
                  <Link to="/">A - Z</Link>
                </li>
                <li className="m-3">
                  <Link to="/">Z - A</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row mb-3">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
              <div className="card h-100">
                <img
                  src="https://images.unsplash.com/photo-1601255596523-1ded45951ed4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                </div>
                <a href="#" class="btn btn-primary">
                  Button
                </a>
                <div className="card-footer">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <img
                  src="https://images.unsplash.com/photo-1541562232579-512a21360020?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                </div>
                <a href="#" class="btn btn-primary">
                  Button
                </a>
                <div className="card-footer">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <img
                  src="https://images.unsplash.com/photo-1546938576-7d56dda5e7d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2787&q=80"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                </div>
                <a href="#" class="btn btn-primary">
                  Button
                </a>
                <div className="card-footer">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <img
                  src="https://images.unsplash.com/photo-1601255596523-1ded45951ed4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <img
                  src="https://images.unsplash.com/photo-1601255596523-1ded45951ed4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <img
                  src="https://images.unsplash.com/photo-1601255596523-1ded45951ed4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Characters;