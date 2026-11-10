import { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function Destination() {
  const { id } = useParams();
  const [destination, setDestination] = useState(null);

  useEffect(() => {
    fetch(`/destinations/${id}`)
      .then((res) => res.json())
      .then((data) => setDestination(data.destinations));
  }, [id]);

  return (
    <>
      <main>
        <h1>Destination details</h1>
        {destination ? (
          <>
            <div className="data">
              <img src={destination.imageUrl} alt={destination.name} />

              <h2 className="data-title">{destination.name}</h2>
              <p>{destination.description}</p>

              <div className="duration-trip">
                <span>{destination.duration}</span>
                <span>{destination.difficulty}</span>
              </div>
            </div>
          </>
        ) : (
          <h3>Loading...</h3>
        )}
      </main>
    </>
  );
}
