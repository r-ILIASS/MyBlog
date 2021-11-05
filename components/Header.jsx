import React, { useContext } from 'react';
import Link from 'next/link';

const categories = [{ name: 'React', slug: 'react' }, { name: 'Web Developement', slug: 'web-dev' }];
const Header = () => {
  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="border-b w-full inline-block border-blue-400 py-8">
        <div className="md:flaot-left block">
          <Link href="/">
            <span className="cursor-pointer font-bold text-4xl text-white">
              My Blog
            </span>
          </Link>
        </div>
        <div className="hidden md:float-left md:contents"></div>
      </div>
    </div>
  )
}

export default Header
