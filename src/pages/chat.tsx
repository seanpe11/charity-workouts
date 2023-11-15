import WorkoutLayout from "~/components/WorkoutLayout"
import { Metadata } from "next"
import Header from "~/components/ui/Header"

export const metadata: Metadata = {
  title: "Chat with Tristan - TCW",
  description: "Your workouts recently at Tristan's Charity Workouts"
}

export default function WorkoutsIndex() {
  return <>
    <WorkoutLayout>
      <div className="container flex flex-col justify-center p-5 gap-5 mx-auto">
        <Header
          pageTitle="Chat"
        />
      </div>
    </WorkoutLayout>
  </>
}
