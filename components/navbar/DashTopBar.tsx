import * as React from "react";

export default function DashTopBar() {
  return (
    <div className="flex justify-between w-full mx-auto max-w-screen-2xl">
      <div className="hidden md:block">
        <h1 className="mb-1 text-2xl font-bold text-white">Resources</h1>
      </div>
      <div className="flex justify-between flex-1 space-x-4 md:justify-end">
        <div className="relative w-full md:max-w-xs">
          <svg className="absolute w-5 h-5 text-blue-100 top-3 left-3 opacity-70" fill="currentColor" viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clip-rule="evenodd"></path>
          </svg>
          <input type="text"
            className="w-full h-10 pr-4 text-sm font-semibold dark:text-white placeholder-white dark:bg-black-brand-01 border dark:border-black-brand-05 rounded-lg pl-9 placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-green-brand-01 focus:ring-opacity-60"
            placeholder="Enter your search term..." />
        </div>
        <div className="flex space-x-4">
          <button type="button"
            className="relative h-10 px-3 border border-black-brand-05  rounded-lg hover:bg-gray-700 focus:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-60">
            <svg className="w-6 h-6 text-blue-100 opacity-80" fill="currentColor" viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z">
              </path>
            </svg>
            <div className="absolute w-2 h-2 bg-red-500 rounded-full top-3 right-4 ring-2 ring-red-400 ring-opacity-60">
              &nbsp;</div>
          </button>
        </div>
      </div>
    </div>
  )
}