import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className=" border-b border-gray-200">
      <div className="container px-4 mx-auto flex justify-between items-center">
        <nav className="grid grid-cols-1 lg:grid-cols-[1fr_3fr] flex-auto py-4">
          <Link href="/" className="flex gap-4 items-center">
            <Image
              alt="Logo"
              src="/assets/logo-big.svg"
              width={32}
              height={32}
            />
            <h1 className="uppercase">Stemps</h1>
          </Link>
          <div className="flex justify-between w-0 h-0 invisible lg:visible lg:w-auto lg:h-auto">
            <ul className="flex gap-4 items-center">
              <li>
                <Link href="#">О школе</Link>
              </li>
              <li>
                <Link href="#">Курсы</Link>
              </li>
              <li>
                <Link href="#">Библиотека</Link>
              </li>
            </ul>
            <button className="flex gap-4 items-center">
              Вход
              <Image
                alt="Login"
                src="/assets/login.svg"
                width={30}
                height={28}
              />
            </button>
          </div>
        </nav>
        <button
          className="text-white bg-black rounded-lg px-2 py-1 lg:invisible lg:w-0 lg:p-0"
          aria-label="Показать навигацию"
        >
          Меню
        </button>
      </div>
    </header>
  );
}
