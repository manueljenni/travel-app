import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white p-12 flex space-x-12 text-black text-xl justify-end">
      <Link href="/">Home</Link>
      <Link href="/trips">Trips</Link>
      <p>Profile</p>
    </header>
  );
}
