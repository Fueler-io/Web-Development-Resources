import * as React from "react";
import { ToggleModalProps } from "./types";

export default function DashTopBar(props: ToggleModalProps) {
  return (
    <div className="flex justify-between w-full mx-auto max-w-screen-2xl">
      <div className="hidden md:block">
        <h1 className="mb-1 text-2xl font-bold text-white">Resources</h1>
      </div>
      <div className="flex justify-between flex-1 space-x-4 md:justify-end">
        <div className="relative w-full md:max-w-xs">
          <svg
            className="absolute w-5 h-5 text-blue-100 top-3 left-3 opacity-70"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            ></path>
          </svg>
          <input
            type="text"
            className="w-full h-10 pr-4 text-sm font-semibold text-white placeholder-white bg-black-brand-08 border border-black-brand-06 rounded-lg pl-9 placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-green-brand-01 focus:ring-opacity-60"
            placeholder="Enter your search term..."
          />
        </div>
        <button onClick={() => props.setShowModal(true)} className="inline-flex bg-black-brand-08 border border-black-brand-06 text-green-brand-01 py-1 px-6 focus:outline-none rounded-lg text-lg hover:animate-bounce hover:text-white">Suggest a resource</button>
      </div>
    </div>
  );
}
