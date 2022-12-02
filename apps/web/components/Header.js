import React from "react";
import { faker } from "@faker-js/faker";

export const Header = ({ setIsOpen }) => {
  return (
    <header className="flex justify-between p-4">
      <h1 className="font-bold text-2xl">{faker.name.jobTitle()}</h1>
      <button onClick={() => setIsOpen(true)} type="button" class="inline-flex relative items-center p-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
        <span class="sr-only">Notifications</span>
        <div class="inline-flex absolute -top-2 -right-2 justify-center items-center w-6 h-6 text-xs font-bold text-white bg-red-500 rounded-full border-2 border-white dark:border-gray-900">{faker.datatype.number({ min: 0, max: 99 })}</div>
      </button>
    </header>
  );
}