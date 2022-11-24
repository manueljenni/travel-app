"use client";

import React from "react";

export default function AddTrip() {
  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const data = {
      name: event.target.name.value,
      notes: event.target.notes.value,
      startDate: event.target.startDate.value,
      endDate: event.target.endDate.value,
    };

    const JSONdata = JSON.stringify(data);
    const endpoint = "http://localhost:8080/api/trips/createTrip";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    window.location.href = "/trips";
  };
  return (
    // We pass the event to the handleSubmit() function on submit.
    <form onSubmit={handleSubmit} className="form">
      <div className="grid grid-cols-2 gap-12 text-left mb-12">
        <div className="flex-col">
          <p>
            <label htmlFor="">Trip Name</label>
          </p>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="flex-col">
          <p>
            <label htmlFor="">Notes</label>
          </p>
          <input type="text" id="notes" name="notes" required />
        </div>
        <div className="flex-col">
          <p>
            <label htmlFor="">Start Date</label>
          </p>
          <input type="date" id="first" name="startDate" required />
        </div>
        <div className="flex-col">
          <p>
            <label htmlFor="">End Date</label>
          </p>
          <input type="date" id="first" name="endDate" required />
        </div>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
