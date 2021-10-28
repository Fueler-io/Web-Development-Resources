import React from "react";
import Link from "next/link";
import Head from "next/head";
import Navbar from "../components/navbar/LandingNavbar";

const LandingPage = () => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta property="og:title" content="web-resources" key="ogtitle" />
        <meta
          property="og:description"
          content="free resources for web development"
          key="ogdesc"
        />
        <title>Web Dev</title>
      </Head>
      <main className="flex flex-col w-full bg-black-brand-01 font-inter overflow-hidden">
        <div className="container px-4 mx-auto my-4">
          <Navbar />
        </div>
        <section className="text-gray-600 body-font h-100 container px-4 mx-auto">
          <div className="text-center py-6">
            <h1 className="font-sans text-6xl text-white py-4">
              Unlock Over 500+ FREE Web Resources
            </h1>
            <p className="text-xl text-gray-brand-02 py-4">
              Discover amazing web development resources packed in one place.
            </p>
            <Link href="/resources">
              <a className="bg-green-400 rounded text-white px-7 py-3 my-4 inline-block hover:bg-green-600">Dive In</a>
            </Link>
          </div>
          <div className="grid gap-8 md:grid-cols-2 mt-36 mb-10">
            <div className="pb-6">
              <div className="md:-ml-32 md:my-4 md:mr-24 rounded-full md:rounded-none md:rounded-r-full bg-gradient-to-l from-gray-900 to-black h-96"></div>
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-3xl pt-1 pb-4 text-green-400 font-medium">
                Simple and Inituitive
              </h3>
              <p className="text-xl text-gray-brand-02">
                Fueler Web Resources was curated by amazing open sourcerers
                aiming to make the lives of Software Developers easy. From an
                intuitive user interface to a clean design to many resources, we
                hope to keep bringing you amazing free resources from all over
                the web.
              </p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 mt-36 mb-10">
            
            <div className="flex flex-col justify-center">
              <h3 className="text-3xl pt-1 pb-4 text-green-400 font-medium">
               Responsive
              </h3>
              <p className="text-xl text-gray-brand-02">
                Search and filter resources both on desktop and on your mobile phones.
              </p>
            </div>
            <div className="row-start-1 md:col-start-2 pb-6">
              <div className="md:-mr-32 md:my-4 md:ml-24 rounded-full md:rounded-none md:rounded-l-full bg-gradient-to-r from-gray-900 to-black h-96 "></div>
            </div>
          </div>


          <div className="grid gap-8 md:grid-cols-2 mt-36 mb-10">
            <div className="pb-6">
              <div className="md:-ml-32 md:my-4 md:mr-24 rounded-full md:rounded-none md:rounded-r-full bg-gradient-to-l from-gray-900 to-black h-96 "></div>
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-3xl pt-1 pb-4 text-green-400 font-medium">
                Contribute
              </h3>
              <p className="text-xl text-gray-brand-02">
                Fueler Web Resources is open source, feel free to suggest resources.
              </p>
            </div>
          </div>


          <section className="text-gray-600 body-font container mx-auto">
            <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
              <div className="text-center lg:w-2/3 w-full p-6 border border-black-brand-06 rounded-lg">
                <h1 className="text-4xl mb-4 font-medium text-white py-4">Got ideas on how to improve this project ?</h1>
                <p className="mb-8 leading-relaxed text-2xl">Send us a mail at fueler.com</p>
              </div>
            </div>
          </section>

          <footer className="grid gap-4 grid-cols-3 md:grid-cols-3">
            <ul className="space-y-1 text-gray-brand-02">
              <li className="pb-4 text-green-brand-01">Social networks</li>
              <li>
                <a
                  href="https://twitter.com/"
                  className="hover:underline"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Linkedin
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Instagram
                </a>
              </li>
            </ul>
            <ul className="space-y-1 text-gray-brand-02">
              <li className="pb-4 text-green-brand-01">Other Products</li>
              <li>
                <a href="#" className="hover:underline">
                  Dope UI
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Fueler
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Excuse Me
                </a>
              </li>
            </ul>
            <ul className="space-y-1 text-gray-brand-02">
              <li className="pb-4 text-green-brand-01">Credits</li>
              <li>
                <a href="#" className="hover:underline">
                   Design
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Resources
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Images
                </a>
              </li>
            </ul>
          </footer>
          <div className="text-center">
            <p className="text-base py-6">Made with ❤️ by Minna</p>
          </div>
        </section>
      </main>
    </>
  );
};

export default LandingPage;
