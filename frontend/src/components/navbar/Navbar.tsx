import Image from "next/image";
import Link from "next/link";
import NavbarMenu from "./NavbarMenu";

export default function Navbar() {
  return (
    <nav className="border-gray-200 bg-transparent">
      <div className="flex flex-wrap items-center justify-between py-4 relative">
        <Link href="/">
          <Image src="/images/logo.png" alt="Potter DB" width="150" height="100" />
        </Link>
        <NavbarMenu />
      </div>
    </nav>
  );
}
