import Link from "next/link";
import Image from "next/image";
import { SignInButton, SignOutButton } from "../components/buttons";

export const NavMernu = () => {
  return (
    <nav className="flex justify-between h-16 w-full px-5 items-center">
      <Link href={"/"}>
        <Image src="/logo.png" width={50} height={30} alt="" />
      </Link>
      <ul className="flex items-center justify-around">
        <li>
          <Link href={"/about"}>About</Link>
        </li>
        <li>
          <Link href={"/users"}>Users</Link>
        </li>
        {/* <li>
          <Link href={"/blog"}>Blog</Link>
        </li> */}
        <li>
          <SignInButton />
          <SignOutButton />
        </li>
      </ul>
    </nav>
  );
};
