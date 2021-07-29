import Head from "next/head";
import Link from "next/link";
import Faq from "../components/Faq";
import { useState } from "react";
import { useRouter } from "next/dist/client/router";
import Slider from "../components/Slider";

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name,
      email,
      number,
      message,
    };
    console.log(data);
  };

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

  const images = [
    "./images/table.jpg",
    "./images/chair.jpg",
    "./images/bed.jpg",
  ];

  return (
    <div className="min-h-screen bg-gray-lightest w-screen overflow-hidden z-20">
      <Head>
        <title>MD Furniture</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <main className="w-full mx-auto px-6 sm:px-6 lg:px-28 -mt-10">
        <div className="grid grid-cols-1 justify-items-center" id="inicio">
          <div className="">
            <h1 className="z-20 relative text-5xl lg:text-8xl text-center text-brown mt-10 md:px-44 lg:px-72 xl:px-96">
              Una idea para un mejor mañana
            </h1>
            <div className="flex justify-center -mt-10 z-0 mb-28 lg:px-96">
              <img
                className="picture relative rounded-full"
                src="./images/table.jpg"
                alt="main image"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 mb-20 lg:justify-items-center lg:space-x-20 max-w-7xl">
            <p className="flex items-end text-xl text-gray-light mr-24 md:w-auto md:mr-52 lg:m-auto lg:mr-32 lg:w-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className="flex space-x-2 items-end justify-end lg:mb-10 lg:mt-0 mt-10 lg:w-auto lg:m-auto">
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
          <div className="divide-y divide-solid divide-gray w-full">
            <div></div>
            <div></div>
          </div>

          <div className="grid grid-cols-1" id="nosotros">
            <div className="flex justify-center mt-20 lg:mt-40">
              <img
                className="pb-2"
                src="/images/sofa.png"
                alt="logo"
                width="100"
              />
            </div>
            <p className="text-center text-2xl text-brown font-light mx-auto max-w-xl mt-6 lg:mt-12 mb-20 lg:mb-40">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            {/** divider  */}
            <div className="divide-y divide-solid divide-gray w-full">
              <div></div>
              <div></div>
            </div>
          </div>
          <div
            className="flex justify-center items-center mt-14"
            id="servicios"
          >
            <h1 className="z-20 relative text-5xl lg:text-6xl text-center text-brown-dark mt-10 ">
              Nuestros Servicios
            </h1>
          </div>

          <div className="grid grid-cols-1 space-y-10 px-4 md:grid-cols-2 lg:grid-cols-2 lg:w-auto lg:space-10 lg:space-y-10 mb-30 justify-items-center mt-10 max-w-5xl mx-auto">
            <div className="mx-10 mt-10">
              <h1 className="text-2xl text-center font-semibold">
                Lorem Ipsum
              </h1>
              <p className="text-center font-light text-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className="m-10">
              <h1 className="text-2xl text-center font-semibold">
                Lorem Ipsum
              </h1>
              <p className="text-center font-light text-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className="m-10">
              <h1 className="text-2xl text-center font-semibold">
                Lorem Ipsum
              </h1>
              <p className="text-center font-light text-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className="m-10">
              <h1 className="text-2xl text-center font-semibold">
                Lorem Ipsum
              </h1>
              <p className="text-center font-light text-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
          {/** divider  */}
          <div className="divide-y divide-solid divide-gray mt-20 mb-20 w-full">
            <div></div>
            <div></div>
          </div>

          <div className="flex justify-center items-center">
            <h1 className="z-20 relative text-5xl mx-10 lg:text-6xl text-center text-brown-dark mt-10 min-w-max">
              Última {<br className="md:hidden lg:hidden"/>} Colección
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-items-center lg:space-x-24 -ml-5">
            <Slider images={images} />
            <div className="justify-self-center flex items-center lg:justify-self-start">
              <div className="flex space-x-2 items-end justify-end lg:mr-24 mb-10">
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
          <div className="divide-y divide-solid divide-gray mt-20 mb-20 w-full">
            <div></div>
            <div></div>
          </div>

          <div className="flex justify-center items-center mt-14">
            <h1 className="z-20 relative text-5xl lg:text-6xl text-center text-brown-dark mt-10">
              Preguntas Frecuentes
            </h1>
          </div>
          <div className="grid grid-cols-1 mt-16 1 max-w-7xl">
            {accordionData.map(({ title, content }) => (
              <Faq title={title} content={content} />
            ))}
          </div>
          {/** divider  */}
          <div className="divide-y divide-solid divide-gray mt-20 mb-20 w-full">
            <div></div>
            <div></div>
          </div>
        </div>

        <div className="flex justify-center items-center mt-14" id="contacto">
          <h1 className="z-20 relative text-5xl lg:text-6xl text-center text-brown-dark mt-10">
            Contáctanos
          </h1>
        </div>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 justify-items-center mt-20 md:max-w-md lg:max-w-xl mx-auto gap-y-3"
        >
          <input
            className="w-full rounded-lg text-xl lg:text-2xl text-brown pl-4 my-2 py-5 bg-brown-light placeholder-brown"
            placeholder="Nombre"
            id="name"
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="w-full rounded-lg text-xl lg:text-2xl text-brown pl-4 my-2 py-5 bg-brown-light placeholder-brown"
            placeholder="Correo electrónico"
            id="email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="w-full rounded-lg text-xl lg:text-2xl text-brown pl-4  my-2 py-5 bg-brown-light placeholder-brown"
            placeholder="Número telefónico"
            id="number"
            type="text"
            onChange={(e) => setNumber(e.target.value)}
          />
          <textarea
            className="w-full rounded-lg text-xl lg:text-2xl text-brown pl-4 my-2 py-5 bg-brown-light placeholder-brown"
            placeholder="Mensaje"
            id="message"
            type="text"
            rows="6"
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            className="justify-self-start rounded-lg bg-brown text-white text-xl lg:text-2xl py-4 px-7 lg:py-5 lg:px-10 lg:mt-5 mt-2"
            type="submit"
            onclick={() => {
              router.push("/conf");
            }}
          >
            Enviar
          </button>
        </form>

        {/** divider  */}
        <div className="divide-y divide-solid divide-gray mt-20 mb-20">
          <div></div>
          <div></div>
        </div>
      </main>

      <footer className="max-w-7xl mx-auto sm:px-6 lg:px-28 bg-brown-dark min-w-full py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-items-start py-5 px-8 md:space-x-8 lg:space-x-8 space-y-8">
          <div>
            <img
              className="h-20 w-20 mb-5"
              src="./images/logo-white.svg"
              alt="logo"
            />
            <h1 className="text-lg text-white mb-2">+505 1111 0000</h1>
            <h1 className="text-lg text-white mb-4">Managua, Nicaragua</h1>
            <div className="inline-flex space-x-4">
              <a href="http://instagram.com" target="_blank">
                <img
                  className="h-10 w-10 mb-5"
                  src="./images/instagram.svg"
                  alt="logo"
                />
              </a>
              <a href="http://facebook.com" target="_blank">
                <img
                  className="h-10 w-10 mb-5"
                  src="./images/facebook.svg"
                  alt="logo"
                />
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 justify-items-start">
            <a className="text-white text-xl py-1" href="#">
              Inicio
            </a>
            <a className="text-white text-xl py-1" href="#nosotros">
              Nosotros
            </a>
            <a className="text-white text-xl py-1" href="#servicios">
              Servicios
            </a>
            <a className="text-white text-xl py-1" href="#contacto">
              Contacto
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
