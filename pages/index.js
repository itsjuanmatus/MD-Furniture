import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen py-2 bg-gray-lightest">
      <Head>
        <title>MD Furniture</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-28">
        <div className="grid grid-cols-1">
          <div className="m-auto">
            <h1 className="relative text-8xl text-center text-brown z-10 mt-10">
              Una idea para un{<br />} mejor mañana
            </h1>
            <div className="flex flex-wrap justify-center">
              <img
                className="relative picture rounded-full -mt-12 z-0 mb-28"
                src="./images/table.jpg"
                alt="main image"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 mb-20">
            <p className="flex items-end text-xl text-gray-light mr-24">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className="flex space-x-2 items-end justify-end mr-24 mb-10">
              <h3 className="text-xl text-gray-light text-right inline-block">
                Know {<br />}About Us
              </h3>
              <span className="inline-block">
                <img 
                className="pb-2"
                src="/images/check.svg"
                alt="logo"
                width='37'
                />
              </span>
            </div>
          </div>
          <div className="divide-y divide-solid divide-gray">
            <div></div>
            <div></div>
          </div>

        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-24 "></footer>
    </div>
  );
}
