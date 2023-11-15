import Head from "next/head";
import Link from "next/link"
import NavbarMobile from "~/components/ui/NavbarMobile"
import { Button } from "@nextui-org/react"
import { useSession, signOut, signIn } from "next-auth/react";

export default function Workouts() {
  const { data: sessionData } = useSession()
  // const { data: workouts } = api.workout.getAll.useQuery()
 
  return (
    <>
      <Head>
        <title>Tristan&apos;s Charity Workouts</title>
        <meta name="description" content="Tristan's Charity Workouts" />
        <link rel="icon" type="img/png" href="/favicon.png" />
      </Head>
      <main className="min-h-screen flex-col items-center justify-center bg-background-50">
        <NavbarMobile/>
        <div className="container flex flex-col items-left m-auto justify-center gap-12 px-4 py-16">
          <div className="flex flex-col items-left gap-2">
            Tristan&apos;s Charity Workouts
          </div>
          <Button
            className="rounded-full shadow-md px-10 py-3 font-semibold text no-underline transition hover:bg-white/20"
            color="primary"
            onClick={sessionData ? () => void signOut() : () => void signIn()}
          >
            {sessionData ? "Sign out" : "Sign in"}
          </Button>
          {sessionData && 
            <Link href="dashboard">
            <Button
              className="rounded-full shadow-md px-10 py-3 font-semibold text no-underline transition hover:bg-white/20"
              color="primary"
              onClick={sessionData ? () => void signOut() : () => void signIn()}
            >
                Go to my dashboard
            </Button>
            </Link>
          }
        </div>
      </main>
    </>
  );
}

