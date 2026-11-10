import { useState, useEffect } from "react";
import { Link } from "react-router";

export default function Destinations() {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    fetch("/destinations")
      .then((res) => res.json())
      .then((data) => setDestinations(data.destinations));
  }, []);

  return (
    <main>
      <div className="destinations-container">
        {destinations.map((destination) => (
          <Link key={destination.id} to={`/destinations/${destination.id}`}>
            <div className="destination-card">
              <img src={destination.imageUrl} alt={destination.name} />

              <button className="btn destination-btn">
                {destination.name}
              </button>
              <p>{destination.country}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
