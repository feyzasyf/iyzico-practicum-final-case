import React from "react";
import { useParams } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import { Link } from "react-router-dom";

const SingleStarship = () => {
  console.log("singlestarship rendered");
  const { id } = useParams();

  const { data: starship, loading, error } = useAxios(id);

  const {
    name,
    model,
    passengers,
    manufacturer,
    max_atmosphering_speed,
    crew,
    cargo_capacity,
  } = starship;
  return (
    <section className="single-starship">
      <img
        className="starship-img"
        src={`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`}
        onError={(e) => {
          e.target.src =
            "https://starwars-visualguide.com/assets/img/big-placeholder.jpg";
        }}
      />
      <div className="single-starship-info">
        <h2>Name: {name}</h2>
        <p>Model: {model}</p>
        <p>Manufacturer: {manufacturer}</p>
        <p>Passengers: {passengers}</p>
        <p>Max Atmosphering Speed: {max_atmosphering_speed}</p>
        <p>Crew: {crew}</p>
        <p>Cargo capacity: {cargo_capacity}</p>
        <Link to="/" className="btn">
          back to homepage
        </Link>
      </div>
    </section>
  );
};

export default SingleStarship;
