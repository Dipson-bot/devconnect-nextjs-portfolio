import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/blog/first-post", label: "Blog" },
  ];

  return (
    <nav className="bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white p-4 shadow-md sticky top-0 z-50">
      <ul className="flex space-x-6 max-w-4xl mx-auto">
        {links.map(({ href, label }) => (
          <li key={href}>
            <Link href={href}>
              <span
                className={`cursor-pointer hover:text-pink-400 transition-colors duration-300 ${
                  router.pathname === href ? "text-pink-400 font-semibold" : ""
                }`}
              >
                {label}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
