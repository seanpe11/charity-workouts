import Head from "next/head";
import Link from "next/link";
import Navbar from "~/components/Navbar"
import NavbarMobile from "~/components/NavbarMobile"
import { useSession, signIn, signOut } from "next-auth/react";
import { RiListSettingsLine } from "react-icons/ri"
import { LiaCalendarSolid, LiaDumbbellSolid, LiaFireSolid, LiaPeopleCarrySolid } from "react-icons/lia"
import { GiReceiveMoney, GiWhistle } from "react-icons/gi"
import { useRouter } from "next/router";
import CountUp from "react-countup"
import { Button } from "@nextui-org/react";

export default function Workouts() {
  const { data:sessionData } = useSession()
  const router = useRouter()
 
  return (
    <>
      <Head>
        <title>Your Dashboard - TCW</title>
      </Head>
      <main className="min-h-screen bg-background">
        <NavbarMobile/>
        { sessionData?.user ? 
          <div className="container flex flex-col justify-center p-5 gap-5 mx-auto">
            <div className="sticky rounded-2xl flex justify-between items-center">
              <img className="mx-3 inline-block rounded-full w-16 h-16" src={sessionData.user?.image ?? ''}></img>
              <h1 className="text-2xl font-bold">
                Dashboard
              </h1>
              <div className="rounded-full bg-accent-100 p-5">
                <RiListSettingsLine
                  className="w-5 h-5"
                />
              </div>
            </div>
            <div className="rounded-2xl p-5 shadow-sm bg-background-100">
              <h1 className="text-text text-2xl font-medium">
                Welcome back {sessionData.user.name}!
              </h1>
              <span>Your last workout was on July 20, 2023</span>
            </div>
            <div 
              className="overflow-x-scroll flex flex-row gap-5 p-3">
              <Link href="workouts">
                <div 
                  className="flex flex-col w-[30vw] gap-2 rounded-lg p-5 shadow-sm bg-primary-100 hover:cursor-pointer justify-items-end items-end">
                  <LiaDumbbellSolid
                    size="4rem"
                    className="rounded-full p-3 bg-accent-100"
                  />
                  <h1 className="text-text text-2xl font-medium w-[100%]">
                    Workouts
                  </h1>
                </div>
              </Link>
              <Link href="progress">
                <div 
                  className="flex flex-col w-[30vw] gap-2 rounded-lg p-5 shadow-sm bg-primary-100 hover:cursor-pointer justify-items-end items-end">
                  <div
                    className="flex flex-row rounded-full bg-accent-100 justify-center align-middle items-center"
                  >
                    <h1 className="text-text text-2xl font-medium w-[100%] text-right">
                      6
                    </h1>
                    <LiaFireSolid
                      size="4rem"
                    />
                  </div>
                  <h1 className="text-text text-2xl font-medium w-[100%]">
                    Streak
                  </h1>
                </div>
              </Link>
              <Link href="workouts">
                <div 
                  className="flex flex-col w-[30vw] gap-2 rounded-lg p-5 shadow-sm bg-primary-100 hover:cursor-pointer justify-items-end items-end">
                  <GiWhistle
                    size="4rem"
                    className="rounded-full p-3 bg-accent-100"
                  />
                  <h1 className="text-text text-2xl font-medium w-[100%]">
                    Coaching
                  </h1>
                </div>
              </Link>
            </div>
            <div className="rounded-lg p-5 shadow-sm bg-secondary-100">
              <h1 className="text-text text-2xl font-medium">
                Blog
              </h1>
              <span>See what&apos;s going on</span>
            </div>
            <div className="rounded-lg p-5 shadow-sm bg-secondary-100">
              <h1 className="text-text text-2xl font-medium">
                Charity
              </h1>
              <div
                className="grid grid-cols-2"
              >
                <div className="flex flex-col items-center">
                  <LiaPeopleCarrySolid
                    size="4rem"
                  />
                  <div className="text-justify">
                    <CountUp end={20} duration={2} /> people working out with you
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <GiReceiveMoney
                    size="4rem"
                  />
                  <div className="text-justify">
                    <CountUp end={200} duration={2} />AUD raised for charity
                  </div>
                </div>
              </div>
            </div>
          </div>
          :
          <div className="min-h-screen flex items-center justify-center">Please 
                <Button
                  className="rounded-full shadow-md px-10 py-3 font-semibold text no-underline transition hover:bg-white/20"
                  color="primary"
                  onClick={sessionData ? () => void signOut() : () => void signIn()}
                >
                  {sessionData ? "Sign out" : "Sign in"}
                </Button>
          </div>
        }
      </main>
    </>
  );
}

