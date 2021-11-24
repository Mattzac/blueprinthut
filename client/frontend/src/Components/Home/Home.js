import React from 'react'

const Home = () => {
  return (
    <div className="home">
      <div
        className="homehero text-white bg-image w-100 text-center px-4 py-5 my-5"
        style={{
          backgroundImage:
            "url(" +
            "https://mdbootstrap.com/img/Photos/Others/images/76.jpg" +
            ")",
            height: "100vh",
        }}
      >
        <h1 className="display-5 fw-bold">Make your own story !</h1>
        <div className="col-md-6 mx-auto">
          <p className="mute">
            "Writing is the only thing that, when I do it, I don’t feel I should
            be doing something else." -Gloria Steinem
          </p>
        </div>
      </div>
    </div>
  )
}

export default Home
