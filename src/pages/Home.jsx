import React from "react";
import { Link } from "react-router";
import {
  HiOutlineSearch,
  HiOutlinePlusCircle,
  HiOutlineUserGroup,
} from "react-icons/hi";

const Home = () => {
  return (
    <section className="max-w-6xl mx-auto py-16 px-6 sm:px-12 text-center">
      {/* Hero */}
      <h1 className="text-5xl font-extrabold mb-6 text-ulab-blue dark:text-blue-400 motion-safe:animate-fadeInDown">
        Welcome to ULAB Lost & Found
      </h1>
      <p className="max-w-3xl mx-auto mb-10 text-gray-700 dark:text-gray-300 text-lg motion-safe:animate-fadeInDown motion-safe:animate-delay-150">
        Helping the ULAB community reunite lost belongings with their owners
        quickly and easily.
      </p>

      {/* Call to Action Buttons */}
      <div className="flex justify-center gap-6 mb-16 flex-wrap motion-safe:animate-fadeInUp">
        <Link
          to="/post-lost"
          className="bg-ulab-blue text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition"
        >
          Post Lost Item
        </Link>
        <Link
          to="/post-found"
          className="border border-ulab-blue text-ulab-blue px-6 py-3 rounded-md font-semibold hover:bg-ulab-blue hover:text-white transition"
        >
          Post Found Item
        </Link>
      </div>

      {/* Features / Steps */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left max-w-4xl mx-auto mb-20">
        <div className="flex flex-col items-center md:items-start">
          <HiOutlineSearch className="text-ulab-blue text-5xl mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
            1. Report Lost Items
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Easily submit details of items you’ve lost around campus.
          </p>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <HiOutlinePlusCircle className="text-ulab-blue text-5xl mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
            2. Report Found Items
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Help others by posting items you’ve found on campus.
          </p>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <HiOutlineUserGroup className="text-ulab-blue text-5xl mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
            3. Connect & Reunite
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Browse all posts and contact owners to return their belongings.
          </p>
        </div>
      </div>

      {/* Testimonial */}
      <blockquote className="max-w-3xl mx-auto px-6 py-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg text-left">
        <p className="text-xl italic text-gray-700 dark:text-gray-300 mb-4">
          “ULAB Lost & Found helped me find my lost laptop within hours! Such a
          helpful community.”
        </p>
        <footer className="text-gray-900 dark:text-gray-100 font-semibold">
          — Amina Rahman, Student
        </footer>
      </blockquote>
    </section>
  );
};

export default Home;
