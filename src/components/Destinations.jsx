import { useState, useEffect } from "react";

export default function Destinations() {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    fetch("/destinations")
      .then((res) => res.json())
      .then((data) => setDestinations(data.destinations));
  }, []);

  return (
    <div className="destinations-container">
      {destinations.map((destination) => (
        <div key={destination.id} className="destination-card">
          <img src={destination.imageUrl} alt={destination.name} />

          <h2>{destination.name}</h2>

          <p>{destination.country}</p>

          <p>{destination.description}</p>

          <div className="duration-trip">
            <span>{destination.duration}</span>
            <span>{destination.difficulty}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
