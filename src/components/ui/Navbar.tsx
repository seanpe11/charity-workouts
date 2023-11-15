import { signIn, signOut, useSession } from "next-auth/react";
import { Link, Button } from "@nextui-org/react";
import { LiaDumbbellSolid, LiaUserAltSolid, LiaChartBar } from "react-icons/lia"

function Navbar() {
  const { data:sessionData } = useSession()

  return (
    <>
      <nav className="bg-white dark:bg-gray-900 fixed md:static w-full z-20 bottom-5 left-0 md:top-0">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="https://charity-workouts.vercel.app/" className="hidden md:flex items-center">
            <img src="/favicon.png" className="h-8 mr-3 rounded-lg shadow-md" alt="Flowbite Logo"></img>
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">TCW</span>
          </a>
          <div className="md:hidden grow w-8 mx-10">
            <ul className="flex flex-row items-center justify-between p-3 shadow-md rounded-full">
              <li>
                <Link
                  className="rounded-full shadow-xl px-3 py-3 font-semibold text-2xl no-underline transition hover:bg-white/20"
                  href="/dashboard"
                >
                  <LiaChartBar/>
                </Link>
              </li>
              <li>
                <Button
                  className="rounded-full shadow-xl px-3 py-3 font-semibold text-2xl no-underline transition hover:bg-white/20"
                  color="primary"
                >
                  <LiaDumbbellSolid/>
                </Button>
              </li>
              <li>
                <Button
                  className="rounded-full shadow-xl px-3 py-3 font-semibold text-2xl no-underline transition hover:bg-white/20"
                  color="secondary"
                  onClick={sessionData ? () => void signOut() : () => void signIn()}
                >
                  <LiaUserAltSolid/>
                </Button>
              </li>
            </ul>
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
