import React from "react";
import TripsList from "./TripsList";

export default function Trips() {
  return (
    <div className="mb-24">
      <h1 className="text-center mb-12 text-3xl font-medium">Upcoming Trips</h1>
      <TripsList maxSize={5} />
    </div>
  );
}
