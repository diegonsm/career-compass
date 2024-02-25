import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header() {

  return (
    <div className="bg-gray-800 text-white py-4 px-8 flex items-center justify-between fixed w-full top-0 z-10">
      <Link to="/" className="text-white-600 text-lg font-semibold">NSBE 2024</Link>
    </div>
  );
}

export default Header;
