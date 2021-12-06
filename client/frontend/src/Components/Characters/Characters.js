import React, {useState, useEffect} from "react";
import "./Characters";
import CharactersCard from "./CharactersCard";
import { Link } from "react-router-dom";
import axios from "axios";

const Characters = () => {

  const [chars, setChars] = useState([ {"name" :"loading", "age":999, "imgsrc":"defaultchar", "skills":[] } ])

  useEffect(() => {
    getChar();
  },[])

  const getChar = async () => {
    try {
      const res = await axios.get("http://192.168.1.11:5000/characters");
      setChars(res.data)
    } catch (error) {
      console.error(error);
    }
  };

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
          <div className="col-md-2 d-flex justify-content-center">
            <Link className="btn btn-primary btn-sm" to="#" ><span>Create new character</span></Link>
          </div>
          <div className="col-md-2 d-flex justify-content-center">
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
                      <label
                        className="form-check-label"
                        htmlFor="dropdownCheck"
                      >
                        StoryName1
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="dropdownCheck"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="dropdownCheck"
                      >
                        StoryName2
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="dropdownCheck"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="dropdownCheck"
                      >
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
          <div className="col">{chars.length} results</div>
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
          <div className="row row-cols-1 row-cols-md-3 g-4 justify-content-around">
              {
                chars.map( (char) => {
                  return <CharactersCard
                  key= {char.name}
                  imgsrc = {`http://192.168.1.11:5000/images/imgs/usercimgs/${char.imgsrc}.jpg`}
                  charName= {char.name}
                  charAge={char.age}
                  charSkills={char.skills}
                  CDate="11/12/2021"
                ></CharactersCard>
                } )
              }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Characters;
