/**
 * v0 by Vercel.
 * @see https://v0.dev/t/WvZ5zGCHywN
 */
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Component() {
  const pathname = usePathname()
  console.log(pathname)

  return (
    <section className="fixed inset-x-0 bottom-0 h-16 bg-white dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-around">
      <Link href="dashboard">
        <div className={
          "flex flex-col items-center p-3 rounded-full " + 
          "transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300" +
          (pathname == "/dashboard" ? " bg-primary-200" : "")
        }>
          <svg
            className=" h-6 w-6 text-zinc-600 dark:text-zinc-300"
            fill="none"
            height="24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
          <span className="text-xs text-zinc-500 dark:text-zinc-400">Dashboard</span>
        </div>
      </Link>
      <Link href="workouts">
        <div className={
          "flex flex-col items-center p-3 rounded-full " + 
          "transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300" +
          (pathname == "/workouts" ? " bg-primary-200" : "")
        }>
          <svg
            className=" h-6 w-6 text-zinc-600 dark:text-zinc-300"
            fill="none"
            height="24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m6.5 6.5 11 11" />
            <path d="m21 21-1-1" />
            <path d="m3 3 1 1" />
            <path d="m18 22 4-4" />
            <path d="m2 6 4-4" />
            <path d="m3 10 7-7" />
            <path d="m14 21 7-7" />
          </svg>
          <span className="text-xs text-zinc-500 dark:text-zinc-400">Workouts</span>
        </div>
      </Link>
      <Link href="progress">
        <div className={
          "flex flex-col items-center p-3 rounded-full " + 
          "transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300" +
          (pathname == "/progress" ? " bg-primary-200" : "")
        }>
          <svg
            className=" h-6 w-6 text-zinc-600 dark:text-zinc-300"
            fill="none"
            height="24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M3 3v18h18" />
            <path d="m19 9-5 5-4-4-3 3" />
          </svg>
          <span className="text-xs text-zinc-500 dark:text-zinc-400">Progress</span>
        </div>
      </Link>
      <Link href="chat">
        <div className={
          "flex flex-col items-center p-3 rounded-full " + 
          "transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300" +
          (pathname == "/chat" ? " bg-primary-200" : "")
        }>
          <svg
            className=" h-6 w-6 text-zinc-600 dark:text-zinc-300"
            fill="none"
            height="24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" />
          </svg>
          <span className="text-xs text-zinc-500 dark:text-zinc-400">Chat</span>
        </div>
      </Link>
      <Link href="profile">
        <div className={
          "flex flex-col items-center p-3 rounded-full " + 
          "transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300" +
          (pathname == "/profile" ? " bg-primary-200" : "")
        }>
          <svg
            className=" h-6 w-6 text-zinc-600 dark:text-zinc-300"
            fill="none"
            height="24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
          <span className="text-xs text-zinc-500 dark:text-zinc-400">Profile</span>
        </div>
      </Link>
    </section>
  )
}

