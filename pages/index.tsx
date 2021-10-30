import React from "react";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/navbar/LandingNavbar";
import cylinder from "../public/images/cylinder.svg";
import css from "../public/images/css.svg";
import job from "../public/images/job.svg";
import podcast from "../public/images/podcast.svg";
import settings from "../public/images/settings.svg";
import web from "../public/images/web.svg";
import youtube from "../public/images/youtube.svg";
import ellipse from "../public/images/Ellipse.svg";

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
        <div className="text-gray-600 body-font h-100 container md:px-4 mx-auto">
          <section className="text-center py-20 relative">
            <h1 className="font-sans text-3xl md:text-6xl text-white py-4">
              Unlock Over 500+ FREE Web Resources
            </h1>
            <p className="text-xl text-gray-brand-02 py-4">
              Discover amazing web development resources packed in one place.
            </p>
            <Link href="/resources">
              <a className="transition duration-500 ease-in-out bg-green-brand-01 rounded text-black-brand-01 px-7 py-3 my-4 inline-block hover:bg-green-600 transform hover:-translate-y-1 hover:scale-110 ">
                Dive In
              </a>
            </Link>
            <div className="absolute top-5 right-5 w-10 h-10">
              <Image src={cylinder} />
            </div>
            <div className="absolute top-5 left-1 w-10 h-10">
              <Image src={job} />
            </div>
            <div className="absolute bottom-8 left-32 md:bottom-5 md:left-40 w-10 h-10">
              <Image src={youtube} />
            </div>
            <div className="absolute bottom-5 right-40 w-10 h-10">
              <Image src={settings} />
            </div>
            <div className="absolute  top-80 md:top-auto right-auto w-10 h-10">
              <Image src={podcast} />
            </div>
            <div className="absolute bottom-1 right-80 w-10 h-10">
              <Image src={web} />
            </div>

            <div className="absolute md:top-1 md:right-96 w-10 h-10">
              <Image src={css} />
            </div>
          </section>

          <section className="text-gray-600 body-font">
            <div className="container px-2 md:px-5 py-24 mx-auto">
              <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-green-400">
                  Amazing Features
                </h1>
                <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
                  Fueler web resources is packed with amazing and robust
                  features
                </p>
              </div>
              <div className="grid grid-flow-row auto-rows-fr md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 -m-4">
                <div className="p-4 min-h-full">
                  <div className="p-6 rounded-lg h-full bg-black-brand-08">
                    <div className="w-10 h-10 inline-flex items-center justify-center bg-indigo-100  rounded-full mb-4">
                      <Image src={ellipse} />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-lg text-white font-medium title-font mb-2">
                        Categorized Resources
                      </h2>
                      <p className="leading-relaxed text-gray-brand-02 text-base">
                        Resources are well arranged and categorized on a simple
                        and beautiful user interface.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-4 min-h-full">
                  <div className="p-6 rounded-lg h-full bg-black-brand-08">
                    <div className="flex-1">
                      <div className="w-10 h-10 inline-flex items-center justify-center bg-indigo-100 rounded-full mb-4">
                        <Image src={ellipse} />
                      </div>
                      <h2 className="text-lg text-white font-medium title-font mb-2">
                        Dark Mode
                      </h2>
                      <p className="leading-relaxed text-gray-brand-02 text-base">
                        View over 500+ resources on a dark user interface to
                        avoid eye strain
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-4 min-h-full">
                  <div className="p-6 rounded-lg h-full bg-black-brand-08">
                    <div className="w-10 h-10 inline-flex items-center justify-center bg-indigo-100  rounded-full mb-4">
                      <Image src={ellipse} />
                    </div>
                    <h2 className="text-lg text-white font-medium title-font mb-2">
                      Search Functionality
                    </h2>
                    <p className="leading-relaxed text-gray-brand-02 text-base flex-1">
                      Search for resources on each page using suggested keywords
                    </p>
                  </div>
                </div>
                <div className="p-4 min-h-full">
                  <div className="p-6 rounded-lg h-full bg-black-brand-08">
                    <div className="w-10 h-10 inline-flex items-center justify-center bg-indigo-100  rounded-full mb-4">
                      <Image src={ellipse} />
                    </div>
                    <h2 className="text-lg text-white font-medium title-font mb-2">
                      Share Resources
                    </h2>
                    <p className="leading-relaxed text-gray-brand-02 text-base">
                      Share link with friends easily.
                    </p>
                  </div>
                </div>
                <div className="p-4 min-h-full">
                  <div className="p-6 rounded-lg h-full bg-black-brand-08">
                    <div className="w-10 h-10 inline-flex items-center justify-center bg-indigo-100  rounded-full mb-4">
                      <Image src={ellipse} />
                    </div>
                    <h2 className="text-lg text-white font-medium title-font mb-2">
                      Save Resources
                    </h2>
                    <p className="leading-relaxed text-gray-brand-02 text-base">
                      Save a reource for a more convinient access by creating an
                      account and clicking on the save icon.
                    </p>
                  </div>
                </div>
                <div className="p-4 min-h-full">
                  <div className="p-6 rounded-lg h-full bg-black-brand-08">
                    <div className="w-10 h-10 inline-flex items-center justify-center bg-indigo-100  rounded-full mb-4">
                      <Image src={ellipse} />
                    </div>
                    <h2 className="text-lg text-white font-medium title-font mb-2">
                      Contribute
                    </h2>
                    <p className="leading-relaxed text-gray-brand-02 text-base">
                      You can contribute to our pool of resources by subimitting
                      one.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="text-gray-brand-01 body-font">
            <div className="container md:px-5 py-24 mx-auto">
              <h2 className="text-green-brand-01 text-3xl md:text-4xl font-bold text-center py-2 mb-4">Fueler Web Resources In Numbers</h2>
              <div className="grid gap-4 grid-cols-1 md:grid-cols-3 text-center py-4">
                <div className="p-4">
                  <h2 className="title-font text-white font-medium sm:text-4xl text-3xl">
                    100+
                  </h2>
                  <p className="leading-relaxed">Users</p>
                </div>
                <div className="p-4">
                  <h2 className="title-font text-white font-medium sm:text-4xl text-3xl">
                    500+ 
                  </h2>
                  <p className="leading-relaxed">Resources</p>
                </div>
                <div className="p-4">
                  <h2 className="title-font text-white font-medium sm:text-4xl text-3xl">
                    100+
                  </h2>
                  <p className="leading-relaxed">Contributions</p>
                </div>
              </div>
            </div>
          </section>

          <section className="text-gray-600 body-font container mx-auto">
            <div className="container mx-auto flex px-2 md:px-5 py-6 mb-12 items-center justify-center flex-col">
              <div className="text-center lg:w-2/3 w-full md:p-6 border border-black-brand-06 rounded-lg">
                <h1 className="text-3xl md:text-4xl mb-3 font-medium text-white py-4">
                  Got ideas on how to improve this project ?
                </h1>
                <p className="mb-8 leading-relaxed text-xl">
                  Send us a mail at fueler.com
                </p>
              </div>
            </div>
          </section>

          <footer className="grid gap-4 grid-cols-2 md:grid-cols-3">
            <ul className="space-y-1 text-gray-brand-02">
              <li className="pb-4 text-green-brand-01">Social networks</li>
              <li>
                <a href="https://twitter.com/" className="hover:underline">
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
        </div>
      </main>
    </>
  );
};

export default LandingPage;
