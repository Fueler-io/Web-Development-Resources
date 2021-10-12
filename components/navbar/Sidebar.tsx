import * as React from "react";
import Link from "next/link";
import { sidebarLinks } from "../../utils/nav-menu";

const Sidebar = () => {
  return (
    <div
      id="menu"
      className="sticky top-0 z-10 flex-col hidden h-screen px-4 py-4 bg-white dark:bg-black-brand-01 shadow-inner w-60 xl:w-64 2xl:w-80 lg:px-6 xl:px-8 lg:py-6 lg:flex overflow-scroll border-r border-black-brand-02"
    >
      <div className="flex-1 py-4">
        <a href="#" className="hidden md:block">
          <span className="sr-only">Fueler Resources</span>
          <svg
          width="84"
          height="17"
          viewBox="0 0 84 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.72053 16H7.44993L10.5149 5.28374H10.6342L13.6918 16H16.4212L20.7315 0.727272H17.756L15.0043 11.9581H14.87L11.9244 0.727272H9.21733L6.27912 11.9506H6.13743L3.38565 0.727272H0.410156L4.72053 16ZM26.6327 16.2237C29.3025 16.2237 31.137 14.9187 31.6142 12.9276L29.0936 12.6442C28.7282 13.6136 27.8333 14.1207 26.67 14.1207C24.925 14.1207 23.7691 12.9723 23.7467 11.011H31.7261V10.1832C31.7261 6.16371 29.3099 4.39631 26.491 4.39631C23.2098 4.39631 21.0695 6.80504 21.0695 10.3398C21.0695 13.9343 23.1799 16.2237 26.6327 16.2237ZM23.7542 9.19141C23.8362 7.72976 24.9175 6.49929 26.5283 6.49929C28.0794 6.49929 29.1235 7.63281 29.1384 9.19141H23.7542ZM34.3292 16H36.9841V14.1953H37.1407C37.5658 15.0305 38.4532 16.2013 40.4219 16.2013C43.1215 16.2013 45.1425 14.0611 45.1425 10.2876C45.1425 6.46946 43.0618 4.39631 40.4145 4.39631C38.3935 4.39631 37.5508 5.61186 37.1407 6.43963H37.0288V0.727272H34.3292V16ZM36.9766 10.2727C36.9766 8.05043 37.9312 6.61115 39.6687 6.61115C41.466 6.61115 42.3907 8.13991 42.3907 10.2727C42.3907 12.4205 41.451 13.9865 39.6687 13.9865C37.9461 13.9865 36.9766 12.495 36.9766 10.2727ZM47.7568 16H50.5235V10.407H53.3424L56.3402 16H59.4276L56.124 9.9446C57.9212 9.22124 58.8683 7.68501 58.8683 5.61186C58.8683 2.69602 56.989 0.727272 53.4841 0.727272H47.7568V16ZM50.5235 8.11008V3.03906H53.059C55.1247 3.03906 56.0494 3.98615 56.0494 5.61186C56.0494 7.23757 55.1247 8.11008 53.0739 8.11008H50.5235ZM66.4026 16.2237C69.0724 16.2237 70.9069 14.9187 71.3842 12.9276L68.8636 12.6442C68.4982 13.6136 67.6033 14.1207 66.4399 14.1207C64.6949 14.1207 63.539 12.9723 63.5166 11.011H71.496V10.1832C71.496 6.16371 69.0798 4.39631 66.2609 4.39631C62.9797 4.39631 60.8394 6.80504 60.8394 10.3398C60.8394 13.9343 62.9499 16.2237 66.4026 16.2237ZM63.5241 9.19141C63.6061 7.72976 64.6874 6.49929 66.2982 6.49929C67.8494 6.49929 68.8934 7.63281 68.9083 9.19141H63.5241ZM83.0331 7.57315C82.6602 5.63423 81.1091 4.39631 78.4244 4.39631C75.6652 4.39631 73.786 5.75355 73.7934 7.87145C73.786 9.5419 74.8151 10.6456 77.015 11.1005L78.9688 11.5107C80.0203 11.7418 80.5125 12.1669 80.5125 12.8157C80.5125 13.5987 79.6624 14.1879 78.3797 14.1879C77.1418 14.1879 76.3364 13.6509 76.1052 12.6218L73.4727 12.8754C73.8083 14.9783 75.5757 16.2237 78.3872 16.2237C81.2508 16.2237 83.2718 14.7397 83.2792 12.5696C83.2718 10.9364 82.2203 9.93714 80.0576 9.46733L78.1038 9.04972C76.9404 8.78871 76.4781 8.38601 76.4855 7.7223C76.4781 6.94673 77.3357 6.4098 78.4617 6.4098C79.7071 6.4098 80.3634 7.08842 80.5722 7.84162L83.0331 7.57315Z"
            fill="#3FD080"
          />
        </svg>
        </a>
        {/* -mx-2  */}
        <nav className="md:mt-8">
          <ul className="pt-2 space-y-3 text-base">
          {sidebarLinks.map(link =>  (
          <li className="py-2 pr-4 dark:text-white text-opacity-10 rounded-t list-disc">
            <Link href={link.path}>
              <a className="text-sm uppercase font-medium text-center text-gray-brand-01 hover:text-green-brand-01">{link.name}</a>
            </Link>
          </li> 
        ))} 
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
