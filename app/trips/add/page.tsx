import React from "react";
import AddTrip from "./AddTrip";

export default function Trips() {
  return (
    <div className="mb-24 flex justify-center items-center text-center">
      <div>
        <h1 className="text-center mb-12 text-3xl font-medium">Upcoming Trips</h1>
        <AddTrip />
      </div>
    </div>
  );
}
