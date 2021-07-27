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
            <h1 className="text-8xl text-center">
              Una idea para un{<br />} mejor mañana
            </h1>
            <div className="flex flex-wrap justify-center">
              <img
                className="rounded-full h-5/6 w-60 mx-52"
                src="./images/table.jpg"
                alt="logo"
              />
            </div>
          </div>
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-24 "></footer>
    </div>
  );
}
