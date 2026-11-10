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
        {destination ? (
          <>
            <div className="data">
              <div
                className="data-img"
                style={{
                  backgroundImage: `url(${destination.imageUrl})`,
                }}
              >
                <h1 className="title-black">Destination details</h1>
              </div>
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
