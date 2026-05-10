import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-3 border bg-white">
      <ul className="flex justify-between items-center gap-6">
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/destination"}>Destination</Link>
        </li>
        <li>
          <Link href={"/my-bookings"}>My Bookings</Link>
        </li>
      </ul> 

      <div>
        <Image
          height={150}
          width={150}
          alt="logo"
          src={"/assets/Wanderlast.png"}
        ></Image>
      </div>

      <ul className="flex justify-between items-center gap-6">
        <li>
          <Link href={"/profile"}>Profile</Link>
        </li>
        <li>
          <Link href={"/login"}>Login</Link>
        </li>
        <li>
          <Link href={"/signup"}>Sing Up</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
