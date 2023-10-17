import { signIn, signOut, useSession } from "next-auth/react";
import { Link, Button } from "@nextui-org/react";

function Navbar() {
  const { data:sessionData } = useSession()

  return (
    <>
      <nav className="bg-white dark:bg-gray-900 sticky w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="https://charity-workouts.vercel.app/" className="flex items-center">
            <img src="/favicon.png" className="h-8 mr-3 rounded-lg shadow-md" alt="Flowbite Logo"></img>
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">TCW</span>
        </a>
        <div className="flex md:order-2">
            <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
          </button>
        </div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link 
                href="/"
                className="py-3 text-text no-underline transition hover:bg-white/20"
                >
                Home
              </Link>
            </li>
            <li>
              <Link 
                href="#about"
                className="py-3 text-text no-underline transition hover:bg-white/20"
                >
                About
              </Link>
            </li>
            {sessionData && 
              <li>
                  <button 
                    type="button" 
                    className="py-3 text no-underline transition hover:bg-white/20">
                    Get started
                  </button>
              </li>
            }
            <li>
              <Button
                className="rounded-full shadow-md px-10 py-3 font-semibold text no-underline transition hover:bg-white/20"
                color="primary"
                onClick={sessionData ? () => void signOut() : () => void signIn()}
              >
                {sessionData ? "Sign out" : "Sign in"}
              </Button>
            </li>
            <li>
              {sessionData ? 
                <>
                  <Link
                    className="rounded-full shadow-md px-10 py-3 font-semibold text no-underline transition hover:bg-white/20"
                    color="primary"
                    href="/dashboard"
                  >
                    Dashboard
                  </Link>
                  <img className="mx-3 inline-block rounded-full w-8 h-8" src={sessionData.user?.image ?? ''}></img>
                </>
                : // no session
                <>
                </>
              }
            </li>
          </ul>
        </div>
        </div>
      </nav>
    </>
    )
  } 

  export default Navbar;
