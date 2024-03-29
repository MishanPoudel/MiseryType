import React from "react";

export default function Navbar() {
  return (
    <>
      <nav class="bg-transparent border-gray-200 my-8">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="/"
            class="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://i.pinimg.com/originals/b1/44/15/b1441564a8b6e53807e9c7223f9245d1.gif"
              class="h-14"
              alt="MiseryType Logo"
            />
            <span class="self-center text-2xl font-semibold whitespace-nowrap">
              MiseryType
            </span>
          </a>
          <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              type="button"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              About
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
