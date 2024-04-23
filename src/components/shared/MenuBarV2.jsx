"use client"
import { Fragment } from "react";
import { Disclosure } from "@headlessui/react";
// import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from "next/image";
import headerLogo from "@/assets/home/TOADS-LOGO-GRAY-header.png";
import { GrMenu } from "react-icons/gr";
import { AiOutlineClose } from "react-icons/ai";
import Dropdown from "./Dropdown";
import Link from "next/link";
// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

export default function MenuBarV2() {
  return (
    <Disclosure as="nav" className="mb-2">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 xl:px-0 mt-2">
            <div className="flex h-16 justify-between items-center">
              <div className="flex">
                <div className="flex flex-shrink-0 items-center">
                  <div className="md:hidden">
                    <Dropdown />
                  </div>
                  {/* <Image
                    width={50}
                    height={50}
                    className="block h-8 w-auto lg:hidden"
                    src={headerLogo}
                    alt="Your Company"
                  /> */}
                  <Image
                    width={160}
                    height={50}
                    className="hidden lg:block"
                    src={headerLogo}
                    alt="Your Company"
                  />
                </div>
              </div>
              <div className="md:hidden">
                {/* <Dropdown /> */}
                <Image
                  // width={50}
                  // height={50}
                  className="block h-14 w-auto lg:hidden"
                  src={headerLogo}
                  alt="Your Company"
                />
              </div>
              {/* Mobile menu button */}
              <div className="-mr-2 flex items-center md:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <AiOutlineClose
                      className="block h-6 w-6"
                      aria-hidden="true"
                    />
                  ) : (
                    <GrMenu className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="hidden sm:ml-6 md:flex sm:space-x-8">
                {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                <Link
                  href="/"
                  className="inline-flex items-center px-1 pt-1 text-sm font-medium text-[#475467]"
                >
                  Home
                </Link>
                <Link
                  href="/factory"
                  className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-[#475467]"
                >
                  Factory
                </Link>
                <Link
                  href="/print-technic"
                  className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-[#475467]"
                >
                  Print Technic
                </Link>
                <Link
                  href="/client"
                  className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-[#475467]"
                >
                  Client
                </Link>
                <Link
                  href="/compliance"
                  className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-[#475467]"
                >
                  Compliance
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-[#475467]"
                >
                  Contact
                </Link>
              </div>
              <div className="hidden md:block">
                <Dropdown />
              </div>
            </div>
          </div>
          {/* mobile menu */}
          <Disclosure.Panel className="md:hidden">
            <div
              className={`space-y-1 pt-2 pb-3 transition-all duration-[400ms] ease-in-out ${
                open ? "translate-y-[-0]" : "translate-y-[-100%]"
              }`}
            >
              {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
              <Link href="/">
                <Disclosure.Button
                  as="li"
                  className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-yellow-300 hover:bg-gray-50 hover:text-gray-700"
                >
                  Home
                </Disclosure.Button>
              </Link>
              <Link href="/factory">
                <Disclosure.Button
                  as="li"
                  className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-yellow-300 hover:bg-gray-50 hover:text-gray-700"
                >
                  Factory
                </Disclosure.Button>
              </Link>
              <Link href="/print-technic">
                <Disclosure.Button
                  as="li"
                  className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-yellow-300 hover:bg-gray-50 hover:text-gray-700"
                >
                  Print Technic
                </Disclosure.Button>
              </Link>
              <Link href="/client">
                <Disclosure.Button
                  as="li"
                  className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-yellow-300 hover:bg-gray-50 hover:text-gray-700"
                >
                  Client
                </Disclosure.Button>
              </Link>

              <Link href="/compliance">
                <Disclosure.Button
                  as="li"
                  className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-yellow-300 hover:bg-gray-50 hover:text-gray-700"
                >
                  Compliance
                </Disclosure.Button>
              </Link>
              <Link href="/contact">
                <Disclosure.Button
                  as="li"
                  className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-yellow-300 hover:bg-gray-50 hover:text-gray-700"
                >
                  Contact
                </Disclosure.Button>
              </Link>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
