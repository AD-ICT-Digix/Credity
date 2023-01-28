import Link from "next/link";
import { useRouter } from "next/router";
import FeatherIcon from "feather-icons-react";

export const Navigator = ({ children, signOut, user }) => {
  const router = useRouter();
  const menuItems = [
    {
      href: "/expo/overview",
      title: "Sign In",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <header>
        <nav className="bg-white border-zinc-200 px-4 lg:px-6 py-2.5 dark:bg-zinc-800">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <Link href="/" className="flex items-center">
              <img
                src="https://github.com/nahnova/Credity/raw/main/docs/logo.png"
                className="mr-3 h-6 sm:h-9"
                alt="Credity Logo"
              />
            </Link>
            <div className="flex items-center lg:order-2">
              <div>
              {menuItems.map(({ href, title }) => (
                  <Link
                    key={href}
                    href={href}
                    className={`flex p-2 bg-black-200 rounded hover:bg-indigo-500 hover:text-white cursor-pointer ${
                      router.asPath === href && "bg-indigo-600 text-white"
                    }`}
                  >
                    <div className="flex flex-1 justify-between">
                      <span className="text-md">{title}</span>
                    </div>
                  </Link>
              ))}
              </div>
            </div>
          </div>
        </nav>
      </header>
      <div className="flex flex-col md:flex-row flex-1">
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
};
