import * as React from "react";
import { useTheme } from "next-themes";

export default function DashTopBar() {
  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  const switchTheme = () => {
    if (isMounted) {
      console.log(theme);
      setTheme(theme === "light" ? "dark" : "light");
    }
  };
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
              fill-rule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <input
            type="text"
            className="w-full h-10 pr-4 text-sm font-semibold dark:text-white placeholder-white dark:bg-black-brand-01 border dark:border-black-brand-05 rounded-lg pl-9 placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-green-brand-01 focus:ring-opacity-60"
            placeholder="Enter your search term..."
          />
        </div>
        <div className="flex space-x-4">
          {theme === "light" ? (
            <button
              onClick={() => switchTheme()}
              type="button"
              className="relative h-10 px-3 border border-black-brand-05  rounded-lg hover:bg-gray-700 focus:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-60"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#0e182a"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            </button>
          ) : (
            <button
              onClick={() => switchTheme()}
              type="button"
              className="relative h-10 px-3 border border-black-brand-05  rounded-lg hover:bg-gray-700 focus:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-60"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#ffffff"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
