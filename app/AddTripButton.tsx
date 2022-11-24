import Link from "next/link";
import React from "react";

export default function AddTripButton() {
  return (
    <div className="flex justify-center items-center">
      <Link href="/trips/add">
        <div className="w-fit shadow bg-blue-300 text-center px-8 py-4 rounded-full cursor-pointer">
          <p className="font-medium">+ Add trip</p>
        </div>
      </Link>
    </div>
  );
}
