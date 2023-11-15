import { useSession } from "next-auth/react"
import { RiListSettingsLine } from "react-icons/ri"


export default function Header({ pageTitle }: { pageTitle: string }) {
  const {data: sessionData} = useSession()

  return (<div className="sticky rounded-2xl flex justify-between items-center">
    {sessionData ?
      <img className="mx-3 inline-block rounded-full w-16 h-16" src={sessionData.user?.image ?? ''}></img> 
      :
      <img className="mx-3 inline-block rounded-full w-16 h-16" src=""></img> 
    }
    
    <h1 className="text-2xl font-bold">
      { pageTitle }
    </h1>
    <div className="rounded-full bg-accent-100 p-5">
      <RiListSettingsLine
        className="w-5 h-5"
      />
    </div>
  </div>)
}
