import * as React from "react";
import DashMobileNavbar from "../navbar/DashMobileNavbar";
import Sidebar from "../navbar/Sidebar";
import DashTopBar from "../navbar/DashTopBar";
import ResourceModal from "../modals/SuggestResourceModal";

const Layout = ({ children }: any) => {
  const [toggleNav, setToogleNavBar] = React.useState(false);
  const [showModal, setShowModal] = React.useState(false);

  const toggleNavBar = () => {
    setToogleNavBar(!toggleNav);
  };
  return (
    <main className="flex flex-col min-h-screen text-base subpixel-antialiased font-normal bg-black-brand-01 lg:flex-row">
      <DashMobileNavbar toggleNavBar={toggleNavBar} />
      <Sidebar toggleState={toggleNav} toggleNavBar={toggleNavBar} />
      <div className="flex flex-col flex-1 px-4 py-4 overflow-hidden lg:py-8 lg:px-6 xl:px-8">
        <DashTopBar setShowModal={setShowModal} />
        <div className="border border-black-brand-06 bg-gradient-to-tr from-black-brand-08 to-black h-60 rounded flex flex-col items-center justify-center my-4 relative">
          <div className="absolute w-20 h-20 bottom-0 right-5">
            <p className="text-7xl">😉</p>
          </div>
          <div className="absolute w-20 h-20 top-5 left-5">
           
            <p className="text-7xl"> 😋</p>
          </div>
          <h1 className="font-bold text-5xl text-white text-center">
            Free Web Resources in <span className="text-green-brand-01 text-7xl">1</span>{" "}
            Place.
          </h1>
        </div>
        <ResourceModal showModal={showModal} setShowModal={setShowModal} />
        <div className="flex-1 py-4 lg:py-10">{children}</div>
      </div>
    </main>
  );
};
export default Layout;
