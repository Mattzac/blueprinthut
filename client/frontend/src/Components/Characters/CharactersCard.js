import React from "react";
import { Link } from "react-router-dom";

function CharactersCard({ imgsrc, charName, charAge, charSkills, CDate }) {
  const skills = charSkills;

  return (
    <div className="card border-5">
      <img src={imgsrc} className="card-img-top rounded-circle mt-3 ms-auto me-auto" alt="..."  style={{ width: "200px" }}/>
      <div className="card-body">
        <h5 className="card-title">{charName}</h5>
        <h5 className="card-text">Age : {charAge}</h5>
        <h5 className="card-text">Skills :</h5>
        {skills.map((skill) => {
          return <h5 key={skill} className="card-text">{skill} </h5>;
        })}
      </div>
      <a href=" " className="btn btn-info ">
        More Info
      </a>
      {/* <Link
        className="btn btn-info mt-2 mb-4 w-75 ms-auto me-auto"
        to={{
          pathname: `/info/character/1`,
          state: 1,
        }}
      >
        More Info-Link
      </Link> */}
      <div className="card-footer">
        <small className="text-muted">Created on {CDate}</small>
      </div>
    </div>
  );
}

export default CharactersCard;
