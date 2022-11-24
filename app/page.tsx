import AddTripButton from "./AddTripButton";
import TripsList from "./trips/TripsList";

export default function Home() {
  return (
    <div className="mb-24 space-y-12">
      <h1 className="text-center text-3xl font-medium">Upcoming Trips</h1>
      <TripsList maxSize={5} />
      <AddTripButton />
    </div>
  );
}
