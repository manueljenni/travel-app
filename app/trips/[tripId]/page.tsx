import React from "react";
import utils from "../../utils";

const fetchTripById = async (id: number) => {
  const response = await fetch("http://localhost:8080/api/trips/" + id);
  const trips = await response.json();
  return trips;
};

export default async function TripDetailPage(props: any) {
  const trip: any = await fetchTripById(props.params.tripId);

  const places = ["Los Angeles (CA)", "New York (NY)", "San Francisco (CA)"];

  return (
    <div className="flex flex-col justify-center items-center space-y-12">
      <div className="w-1/2 p-8 rounded-lg bg-gray-100 space-y-8 shadow">
        <div className="flex space-x-8 items-center">
          <h1 className="text-3xl uppercase font-medium">{trip.name}</h1>
          <p className="text-xl text-blue-600">
            {utils.formatDate(trip.startDate)} - {utils.formatDate(trip.endDate)}
          </p>
        </div>
        <div className="space-y-2">
          <h1 className="text-2xl">Countries & Places</h1>
          <ul className="list-disc list-inside">
            {places.map((place) => (
              <li className="text-xl">{place}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
