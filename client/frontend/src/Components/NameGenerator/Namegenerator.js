import React from "react";

const Namegenerator = () => {
  return (
    <div className="namegenerator">
      <div className="container mt-5">
        <div className="row">
          <div className="col border">
            <h1>Name Generator</h1>
            <p className="lead">
              This is a name genertor to inspire you for the amazing characters
              you created.
            </p>
            <div className="btns">
              <a className="p-3 me-4 my-2 btn btn-primary">ALL</a>
              <a className="p-3 me-4 my-2 btn btn-primary">Male</a>
              <a className="p-3 me-4 my-2 btn btn-primary">Female</a>
              <a className="p-3 me-4 my-2 btn btn-primary">Animals</a>
              <a className="p-3 me-4 my-2 btn btn-primary">Weapons</a>
            </div>
            <a className="p-3 me-4 my-2 btn btn-warning">Feeling lucky!</a>
          </div>
          <div className="col text-center border">
            <h1 className="mb-5 display-6" >There you go !</h1>
            <h3 className="my-5" >Character's Name</h3>
            <h3 className="mt-5">Author</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Namegenerator;
