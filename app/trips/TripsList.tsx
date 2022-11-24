import React from "react";
import TripPreview from "./TripPreview";

const fetchTrips = async () => {
  const response = await fetch("http://localhost:8080/api/trips/getAllTrips");
  const trips = await response.json();
  return trips;
};

export default async function TripsList(props: { maxSize?: number }) {
  const trips = await fetchTrips();
  // How many trips to show - default 10
  const size = props.maxSize ?? 10;

  return (
    <div className="flex justify-center items-center">
      <div className="w-1/3 space-y-8 flex flex-col">
        {trips.splice(0, size).map((trip: any) => (
          <TripPreview key={trip.id} trip={trip} />
        ))}
      </div>
    </div>
  );
}
