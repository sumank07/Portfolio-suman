import React from "react";
import sumanImage from '../Assets/suman-image.png.jpg';

const Home = () => {
  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center bg--white"
    >
      <div className="text-center flex flex-col md:space-x-12">
        <img
          src={sumanImage}
          alt=""
          className="rounded-full  mx-auto  w-72 h-72  object-cover mb-8 transform 
        transition-transform duration-300 hover:scale-105"
        />
       <h1 className="text-2xl">
          I am Suman Katuwal From sankhuwasava. herohonda chalauxu moo
        </h1>
      </div>
    </section>
  );
};

export default Home;
