import React from "react";
import Link from "next/link";
import utils from "../utils";

export default function TripPreview(props: any) {
  return (
    <Link href={"/trips/" + props.trip.id}>
      <div className="h-1/2 bg-gray-200 rounded-lg flex items-center cursor-pointer w-full shadow shadow-gray-400">
        <div className="flex space-x-12 justify-center items-center py-6 px-8 w-full">
          <div className="flex-col space-y-2 w-full">
            <div className="flex justify-between">
              <div className="flex text-xl space-x-4">
                <p>
                  {utils.formatDate(props.trip.startDate)} -{" "}
                  {utils.formatDate(props.trip.endDate)}
                </p>
                <div className="space-x-2">
                  <span>🇸🇬</span>
                  <span>🇺🇸</span>
                </div>
              </div>
              <div className="flex items-center text-xl">
                <p>{utils.getRemainingDays(props.trip.startDate)}</p>
              </div>
            </div>
            <p className="text-3xl font-medium">{props.trip.name}</p>
            <div className="flex justify-between space-x-4">
              <p className="text-lg text-blue-600">Los Angeles</p>
              <div className="flex space-x-4">
                <p className="text-lg">🏠&nbsp;&nbsp;1x</p>
                <p className="text-lg">🛫&nbsp;&nbsp;2x</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
