import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from "@nextui-org/react"

function AuthWelcome() {
  const { data: sessionData } = useSession();

  return (
    <div className="flex flex-row items-left gap-4">
      <p className="text-left text-2xl text-white">
        {sessionData && 
          <span>
            Hi 
            <img className="inline-block rounded-full w-8 h-8" src={sessionData.user?.image || ''}></img>
            {sessionData.user?.name}!
          </span>}
      </p>
      <button
        className="rounded-full bg-primary-50 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
}

export default AuthWelcome;
