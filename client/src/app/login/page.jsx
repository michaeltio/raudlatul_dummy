import React from "react";
import Image from "next/image";
import Rating from "@/components/rating/Rating";

export default function Service() {
  return (
    <>
      <div className="flex min-h-screen justify-center font-ptserif text-gray-900">
        <div className="m-0 flex max-w-screen-xl flex-1 justify-center bg-white shadow sm:m-10 sm:rounded-lg">
          <div className="p-6 sm:p-12 lg:w-1/2 xl:w-5/12">
            <div></div>
            <div className="mt-12 flex flex-col items-center">
              <div className="mt-8 w-full flex-1">
                <div className="flex flex-col items-center">
                  <button className="focus:shadow-outline flex w-full max-w-xs items-center justify-center rounded-lg bg-green-100 py-3 font-bold text-gray-800 shadow-sm transition-all duration-300 ease-in-out hover:shadow focus:shadow-sm focus:outline-none">
                    <div className="rounded-full bg-white p-2">
                      <svg className="w-4" viewBox="0 0 533.5 544.3">
                        <path
                          d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                          fill="#4285f4"
                        />
                        <path
                          d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                          fill="#34a853"
                        />
                        <path
                          d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                          fill="#fbbc04"
                        />
                        <path
                          d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                          fill="#ea4335"
                        />
                      </svg>
                    </div>
                    <span className="ml-4">Sign In with Google</span>
                  </button>
                </div>

                <div className="my-12 border-b text-center">
                  <div className="inline-block translate-y-1/2 transform bg-white px-2 text-sm font-medium leading-none tracking-wide text-gray-600">
                    Or sign In with Cartesian E-mail
                  </div>
                </div>

                <div className="mx-auto max-w-xs">
                  <input
                    className="w-full rounded-lg border border-gray-200 bg-gray-100 px-8 py-4 text-sm font-medium placeholder-gray-500 focus:border-gray-400 focus:bg-white focus:outline-none"
                    type="email"
                    placeholder="Email"
                  />
                  <input
                    className="mt-5 w-full rounded-lg border border-gray-200 bg-gray-100 px-8 py-4 text-sm font-medium placeholder-gray-500 focus:border-gray-400 focus:bg-white focus:outline-none"
                    type="password"
                    placeholder="Password"
                  />
                  <button className="text-white-500 focus:shadow-outline mt-5 flex w-full items-center justify-center rounded-lg bg-green-400 py-4 font-semibold tracking-wide transition-all duration-300 ease-in-out hover:bg-green-700 focus:outline-none">
                    <svg
                      className="-ml-2 h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                      <circle cx="8.5" cy="7" r="4" />
                      <path d="M20 8v6M23 11h-6" />
                    </svg>
                    <span className="ml-">Sign In</span>
                  </button>
                  <p className="mt-6 text-center text-xs text-gray-600">
                    I agree to abide by Cartesian Kinetics
                    <a
                      href="#"
                      className="border-b border-dotted border-gray-500"
                    >
                      Terms of Service
                    </a>
                    and its
                    <a
                      href="#"
                      className="border-b border-dotted border-gray-500"
                    >
                      Privacy Policy
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden flex-1 bg-green-100 text-center lg:flex">
            <div className="m-12 w-full bg-contain bg-center bg-no-repeat xl:m-16"></div>
          </div>
        </div>
      </div>
    </>
  );
}
