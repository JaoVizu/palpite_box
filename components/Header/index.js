import React from "react";
import Link from 'next/link'

const Header = () => {
  return (
    <React.Fragment>
      <header className="bg-gray-200 py-4 shadow-md">
        <div className="container mx-auto text-center">
          <Link href="/">
            <a><img src="/logo_paplpitebox.png" alt="Palpite Box" className="mx-auto w-32"/></a>
          </Link>
        </div>
      </header>
      <div className="bg-gray-300 py-4 shadow-md text-center">
        <Link href="/sobre">
          <a className="px-2 hover:underline ">Sobre</a>
        </Link>
        <Link href="/contato">
          <a className="px-2 hover:underline ">Contato</a>
        </Link>
        <Link href="/pesquisa">
          <a className="px-2 hover:underline ">Pesquisa</a>
        </Link>
      </div>
    </React.Fragment>
  );
};

export default Header;
