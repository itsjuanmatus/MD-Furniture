import { useState } from "react";
import { Transition } from "@headlessui/react";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-gray-lightest w-screen overflow-hidden z-0">
      <div className="w-full mx-auto">
        <div className="flex h-44 w-full px-5">
          <div className="flex items-center m-auto">
            <div className="hidden md:block">
              <div className="flex lg:space-x-10 min-w-full items-center">
                <a
                  href="#"
                  className="text-brown px-3 py-2 rounded-md text-xl font-medium"
                >
                  Inicio
                </a>

                <a
                  href="#"
                  className="text-brown px-3 py-2 rounded-md text-xl font-medium"
                >
                  Nosotros
                </a>

                <div className="flex-shrink-0">
                  <img
                    className="h-20 w-20 md:mx-36 lg:mx-52"
                    src="./images/logo.svg"
                    alt="logo"
                  />
                </div>

                <a
                  href="#"
                  className="text-brown px-3 py-2 rounded-md text-xl font-medium"
                >
                  Servicios
                </a>

                <a
                  href="#"
                  className="text-brown px-3 py-2 rounded-md text-xl font-medium"
                >
                  Contacto
                </a>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex items-center justify-between md:hidden w-full">
            <img
              className="h-20 w-20 md:mx-36 lg:mx-52"
              src="./images/logo.svg"
              alt="logo"
            />

            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white "
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-12 w-12"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="black"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="black"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          <div className="md:hidden" id="mobile-menu">
            <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                href="#"
                className="text-brown block px-3 py-2 rounded-md text-base font-medium"
              >
                Dashboard
              </a>

              <a
                href="#"
                className="text-brown block px-3 py-2 rounded-md text-base font-medium"
              >
                Team
              </a>

              <a
                href="#"
                className="text-brown block px-3 py-2 rounded-md text-base font-medium"
              >
                Projects
              </a>

              <a
                href="#"
                className="text-brown block px-3 py-2 rounded-md text-base font-medium"
              >
                Calendar
              </a>

              <a
                href="#"
                className="text-brown block px-3 py-2 rounded-md text-base font-medium"
              >
                Reports
              </a>
            </div>
          </div>
        )}
      </Transition>
    </nav>
  );
}
