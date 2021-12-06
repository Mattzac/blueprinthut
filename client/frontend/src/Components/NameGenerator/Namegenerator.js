import React, { useState } from "react";
import axios from "axios";
import Avatar from "avataaars";
import { generateRandomAvatarOptions } from "../../Avatars/Avatars";

const Namegenerator = () => {
  const [ngname, setNgname] = useState("Your Character's Name");
  const [type, setType] = useState("all");

  const getName = async () => {
    try {
      const response = await axios.get(
        `http://192.168.1.11:5000/namegen/${type}`
      );
      const pickedname = response.data.namepicked;
      setNgname(pickedname);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  const handletype = (e) => {
    setType(e.target.outerText.toLowerCase());
    console.log(e.target.outerText.toLowerCase());
  };

  const handlepick = () => {
    getName();
  };

  return (
    <div className="namegenerator">
      <div
        className="nghero text-white bg-image w-100 text-center px-4 py-5 my-5"
        style={{
          backgroundImage:
            "url(" +
            "https://images.unsplash.com/photo-1615830237128-99bf22dab98e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2633&q=80" +
            ")",
        }}
      >
        <h1 className="display-5 fw-bold">Feeling lucky htmlFor your name !</h1>
        <div className="col-md-6 mx-auto">
          <p className="mute">
            "Writing is the only thing that, when I do it, I don’t feel I should
            be doing something else." -Gloria Steinem
          </p>
        </div>
      </div>
      <div className="container mt-5" style={{ height: "700px" }}>
        <div className="row">
          <div className="col ">
            <h1 className="my-5">Name Generator</h1>
            <p className="my-5 lead">
              This is a name genertor to inspire you htmlFor the amazing
              characters you created.
            </p>
            <div className="btns my-5">
              <a
                href=" "
                onClick={(e) => {
                  handletype(e);
                }}
                className="p-3 me-4 my-2 btn btn-primary"
              >
                ALL
              </a>
              <a
                href=" "
                onClick={(e) => {
                  handletype(e);
                }}
                className="p-3 me-4 my-2 btn btn-primary"
              >
                Male
              </a>
              <a
                href=" "
                onClick={(e) => {
                  handletype(e);
                }}
                className="p-3 me-4 my-2 btn btn-primary"
              >
                Female
              </a>
              <a
                href=" "
                onClick={(e) => {
                  handletype(e);
                }}
                className="p-3 me-4 my-2 btn btn-primary"
              >
                Fantasy
              </a>
            </div>
            <a href=" " onClick={handlepick} className="p-3 me-4 my-5 btn btn-warning">
              Feeling lucky!
            </a>
          </div>
          <div className="col text-center bg-light ">
            <Avatar
              style={{ width: "300px", height: "300" }}
              avatarStyle="Circle"
              {...generateRandomAvatarOptions()}
            />
            <h3 className="my-5">{ngname}</h3>
            <h3 className="mt-5">Type: {type.toUpperCase()}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Namegenerator;
