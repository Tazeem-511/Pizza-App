import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"; // Importing social media icons

function Footer() {
  return (
    <footer className="bg-gray-800 text-white body-font">
      <div className="container mx-auto p-6 flex flex-col md:flex-row items-center justify-between">
        <Link
          href={"/"}
          className="flex title-font font-extrabold items-center uppercase text-gray-100"
        >
          <Image alt="Navbar Logo" src={"/Pizza.svg"} width={60} height={60} />
          <p className="leading-5 text-xl mx-2">Pizza Wizza</p>
        </Link>

        <div className="flex space-x-4 mt-4 md:mt-0">
          <Link
            href="https://www.facebook.com"
            className="text-gray-100 hover:text-gray-300"
          >
            <FaFacebook size={24} />
          </Link>
          <Link
            href="https://www.instagram.com"
            className="text-gray-100 hover:text-gray-300"
          >
            <FaInstagram size={24} />
          </Link>
          <Link
            href="https://www.twitter.com"
            className="text-gray-100 hover:text-gray-300"
          >
            <FaTwitter size={24} />
          </Link>
        </div>

        <p className="text-sm text-gray-100 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          Copyright © 2024 Pizza Wizza. All Rights Reserved.
        </p>
      </div>

      <div className="bg-gray-700 py-4">
        <div className="container mx-auto flex justify-center space-x-4">
          <Link href="/about" className="text-gray-100 hover:text-gray-300">
            About Us
          </Link>
          <Link href="/menu" className="text-gray-100 hover:text-gray-300">
            Menu
          </Link>
          <Link href="/contact" className="text-gray-100 hover:text-gray-300">
            Contact
          </Link>
          <Link href="/privacy" className="text-gray-100 hover:text-gray-300">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
