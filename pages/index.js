import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Accordion from "../components/accordion";

export default function Home() {
  const accordionData = [
    {
      title: "¿En dónde están ubicados?",
      content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
      laborum cupiditate possimus labore, hic temporibus velit dicta earum
      suscipit commodi eum enim atque at? Et perspiciatis dolore iure
      voluptatem.`,
    },
    {
      title: "¿Se pueden personalizar?",
      content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam
      reprehenderit nam assumenda voluptatem ut. Ipsum eius dicta, officiis
      quaerat iure quos dolorum accusantium ducimus in illum vero commodi
      pariatur? Impedit autem esse nostrum quasi, fugiat a aut error cumque
      quidem maiores doloremque est numquam praesentium eos voluptatem amet!
      Repudiandae, mollitia id reprehenderit a ab odit!`,
    },
    {
      title: "¿Realizan envíos internacionales?",
      content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
      quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
      dolor ut sequi minus iste? Quas?`,
    },
  ];

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
                Conoce {<br />}Sobre Nosotros
              </h3>
              <span className="inline-block">
                <a href="#">
                  <img
                    className="pb-2"
                    src="/images/check.svg"
                    alt="logo"
                    width="37"
                  />
                </a>
              </span>
            </div>
          </div>
          {/** divider  */}
          <div className="divide-y divide-solid divide-gray">
            <div></div>
            <div></div>
          </div>

          <div className="grid grid-cols-1">
            <div className="flex justify-center mt-40">
              <img
                className="pb-2"
                src="/images/sofa.png"
                alt="logo"
                width="100"
              />
            </div>
            <p className="text-center text-2xl text-brown font-light px-52 mt-12 mb-40">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            {/** divider  */}
            <div className="divide-y divide-solid divide-gray">
              <div></div>
              <div></div>
            </div>
          </div>
          <div className="flex justify-center mt-14">
            <h1 className="text-5xl mb-5">Nuestros Servicios</h1>
          </div>
          <div className="grid grid-cols-2 px-36 mb-30 justify-items-center">
            <div className="m-10">
              <h1 className="text-2xl text-center font-semibold">
                Lorem Ipsum
              </h1>
              <p className="text-center font-light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className="m-10">
              <h1 className="text-2xl text-center font-semibold">
                Lorem Ipsum
              </h1>
              <p className="text-center font-light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className="m-10">
              <h1 className="text-2xl text-center font-semibold">
                Lorem Ipsum
              </h1>
              <p className="text-center font-light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className="m-10">
              <h1 className="text-2xl text-center font-semibold">
                Lorem Ipsum
              </h1>
              <p className="text-center font-light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
          {/** divider  */}
          <div className="divide-y divide-solid divide-gray mt-10 mb-10">
            <div></div>
            <div></div>
          </div>

          <div className="flex justify-center mt-14">
            <h1 className="text-5xl mb-5">Última Colección</h1>
          </div>
          <div className="grid grid-cols-2 justify-items-center">
            <div className="justify-self-end flex flex-wrap">
              <div className="flex items-center mt-14">
                <Link href="#" onClick={console.log(1)}>
                  <img
                    className="arrow relative pb-2 inline-block -mr-5 z-10 rotate-180"
                    src="/images/arrow.svg"
                    alt="logo"
                    width="50"
                  />
                </Link>
                <img
                  className="relative picture2 rounded-full z-0 inline-block"
                  src="./images/table.jpg"
                  alt="main image"
                />
                <Link href="#" onClick={() => console.log(1)}>
                  <img
                    className="arrow relative pb-2 inline-block -ml-5 z-10"
                    src="/images/arrow.svg"
                    alt="logo"
                    width="50"
                  />
                </Link>
              </div>
            </div>
            <div className="justify-self-center flex items-center">
              <div className="flex space-x-2 items-end justify-end mr-24 mb-10">
                <h3 className="text-xl text-gray-light text-right inline-block">
                  Explora {<br />}Nuestros{<br />} Productos
                </h3>
                <span className="inline-block">
                  <a href="#">
                    <img
                      className="pb-2"
                      src="/images/check.svg"
                      alt="logo"
                      width="37"
                    />
                  </a>
                </span>
              </div>
            </div>
          </div>
          {/** divider  */}
          <div className="divide-y divide-solid divide-gray mt-20 mb-20">
            <div></div>
            <div></div>
          </div>

          <div className="flex justify-center">
            <h1 className="text-5xl text-brown">Preguntas Frecuentes</h1>
          </div>
          <div className="grid grid-cols-1 mt-16 px-60">
            {accordionData.map(({ title, content }) => (
              <Accordion title={title} content={content} />
            ))}
          </div>
          {/** divider  */}
          <div className="divide-y divide-solid divide-gray mt-20 mb-20">
            <div></div>
            <div></div>
          </div>
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-24"></footer>
    </div>
  );
}
