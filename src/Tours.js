import React from "react";
import Tour from "./Tour";
const Tours = ({ tours, removeTour, fetchTours }) => {
  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h3>No Tour</h3>
          <button className="btn" onClick={fetchTours}>
            Refresh
          </button>
        </div>
      </main>
    );
  }
  return (
    <section>
      <div className="title">
        <h2>Our tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
        })}
      </div>
    </section>
  );
};

export default Tours;
