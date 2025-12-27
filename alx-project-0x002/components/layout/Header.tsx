import Link from "next/link";

const Header = () => {
  return (
    <header className="p-4">
      <nav className="flex gap-4">
        <Link href={"/home"}>Home</Link>
        <Link href={"/about"}>About</Link>
        <Link href={"/posts"}>Posts</Link>
        <Link href={"/users"}>Users</Link>
      </nav>
    </header>
  );
};

export default Header;
