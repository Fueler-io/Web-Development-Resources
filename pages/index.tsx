import React from "react";
import Link from 'next/link';
import Head from "next/head";
import Navbar from '../components/navbar/LandingNavbar';


const LandingPage = () => {

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta property="og:title" content="web-resources" key="ogtitle" />
        <meta property="og:description" content="free resources for web development" key="ogdesc" />
        <title>Web Dev</title>
      </Head>
      <main className="flex flex-col w-full dark:bg-black-brand-01 font-inter">
        <div className="container mx-auto">
          <Navbar/>
        </div>
        <section className="text-gray-600 body-font">
          <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
            <div className="text-center lg:w-2/3 w-full text-black-brand-black-01 dark:text-white">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium">Free Web Develpment Resources all in One Place.</h1>
              <p className="mb-8 leading-relaxed">Meggings kinfolk echo park stumptown DIY, kale chips beard jianbing tousled. Chambray dreamcatcher trust fund, kitsch vice godard disrupt ramps hexagon mustache umami snackwave tilde chillwave ugh. Pour-over meditation PBR&amp;B pickled ennui celiac mlkshk freegan photo booth af fingerstache pitchfork.</p>
              <div className="flex justify-center">
                <button className="inline-flex text-white bg-blue-brand-blue-01 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Explore Resources</button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default LandingPage;
